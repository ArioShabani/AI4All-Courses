
// src/app/api/pdf/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises'; // Use promises for async file reading
import path from 'path';
// NOTE: You need to install pdf-parse: npm install pdf-parse
// import pdf from 'pdf-parse'; // pdf-parse doesn't have default export or proper TS types easily available

// Dynamically import pdf-parse as it might be CommonJS
let pdf: (dataBuffer: Buffer) => Promise<{ text: string }>;
import('pdf-parse').then(mod => {
  // Assuming the structure based on common usage, might need adjustment
  pdf = (mod as any).default ?? mod;
}).catch(err => {
    console.error("Failed to load pdf-parse:", err);
    // Handle the error appropriately, maybe set pdf to a function that throws
    pdf = async () => { throw new Error("pdf-parse module failed to load"); };
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename'); // e.g., 'course-content.pdf'

  if (!filename) {
    return NextResponse.json({ error: 'Filename query parameter is required' }, { status: 400 });
  }

  // --- Security Note ---
  // Be VERY careful with allowing arbitrary filenames.
  // In a real application, you MUST sanitize/validate the filename
  // to prevent directory traversal attacks (e.g., ensure it doesn't contain '..').
  // For this example, we assume the filename is safe and refers to a file
  // within a designated directory.
  if (filename.includes('..') || filename.includes('/')) {
     return NextResponse.json({ error: 'Invalid filename' }, { status: 400 });
  }

  // Ensure the filename ends with .pdf
  if (!filename.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json({ error: 'Filename must end with .pdf' }, { status: 400 });
  }


  const pdfDirectory = path.join(process.cwd(), 'public', 'pdfs'); // Store PDFs in public/pdfs
  const filePath = path.join(pdfDirectory, filename);

  try {
    const dataBuffer = await fs.readFile(filePath);

    if (!pdf) {
       console.error("pdf-parse module not loaded yet or failed to load.");
       return NextResponse.json({ error: 'PDF parsing library not available' }, { status: 500 });
    }


    const data = await pdf(dataBuffer);

    // Return the extracted text content
    return NextResponse.json({ text: data.text });

  } catch (error: any) {
    console.error(`Error reading or parsing PDF file ${filePath}:`, error);
    if (error.code === 'ENOENT') {
      // Provide a more helpful error message to the user
      return NextResponse.json({ error: `File not found: ${filename}. Please ensure the file exists in the 'public/pdfs' directory.` }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to read or parse PDF file' }, { status: 500 });
  }
}
