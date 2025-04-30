
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown'; // Import react-markdown
import remarkGfm from 'remark-gfm'; // Import remark-gfm for GitHub Flavored Markdown

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface CourseOverviewCardProps {
  pdfContent: string | null; // Accept the PDF content as a prop
}

export function CourseOverviewCard({ pdfContent }: CourseOverviewCardProps) {

  // Basic parsing of the PDF content to extract title and description
  // This is a simplified example; you might need more robust parsing
  // depending on your PDF structure.
  let title = "Course Overview";
  let description = "Loading course content...";
  let mainContent = pdfContent || "";

  if (pdfContent) {
    const lines = pdfContent.trim().split('\n');
    // Attempt to find the first non-empty line as the title (might need adjustment)
    const firstMeaningfulLineIndex = lines.findIndex(line => line.trim() !== '');
    if (firstMeaningfulLineIndex !== -1) {
        title = lines[firstMeaningfulLineIndex].replace(/\*\*/g, ''); // Basic title extraction
        // Attempt to find the next paragraph as description
        let descStartIndex = firstMeaningfulLineIndex + 1;
        while (descStartIndex < lines.length && lines[descStartIndex].trim() === '') {
            descStartIndex++;
        }
         let descEndIndex = descStartIndex;
        while (descEndIndex < lines.length && lines[descEndIndex].trim() !== '') {
             descEndIndex++;
        }
         description = lines.slice(descStartIndex, descEndIndex).join(' ');

        // The rest is main content
        mainContent = lines.slice(descEndIndex).join('\n');
    } else {
        // Fallback if parsing fails
        description = "Comprehensive AI & ML Training.";
        mainContent = pdfContent; // Show raw content if title/desc extraction fails
    }

  }


  return (
    <motion.div variants={itemVariants}>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-foreground/80 space-y-3 prose prose-sm max-w-none dark:prose-invert">
           {/* Use ReactMarkdown to render the main content */}
           {mainContent ? (
             <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {mainContent}
             </ReactMarkdown>
           ) : (
             <p>Loading content...</p> // Or a skeleton loader
           )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
