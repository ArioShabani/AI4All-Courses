# AI4All Training Hub - AI Learning Course Dashboard

This is a Next.js application designed as a dashboard for an AI & Machine Learning course.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Place Course Content PDF:**
    - **Rename your course content PDF file to `course-content.pdf`.**
    - **Place this `course-content.pdf` file inside the `public/pdfs/` directory.** If the `public/pdfs/` directory doesn't exist, create it first.

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) (or the specified port) with your browser to see the result.

## Features

- Displays course overview loaded from the PDF file (`public/pdfs/course-content.pdf`).
- Shows weekly module breakdowns.
- Lists useful resources.
- Includes placeholders for future dashboard links.
- Provides further learning suggestions.
- Uses Tailwind CSS for styling and ShadCN UI components.
- Incorporates Framer Motion for animations.
- Implements an API route (`/api/pdf`) to parse and serve PDF content.

## Project Structure

- `src/app/`: Contains the main application pages and layout.
- `src/components/`: Reusable UI components.
  - `ui/`: Components from ShadCN UI.
- `src/lib/`: Utility functions and data (like module/resource details).
- `src/hooks/`: Custom React hooks.
- `src/ai/`: Genkit related files (if used).
- `public/pdfs/`: **Location for the `course-content.pdf` file.**

