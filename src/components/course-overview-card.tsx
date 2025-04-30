
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { courseOverviewContent } from '@/lib/course-data'; // Import the new content

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CourseOverviewCard() {
  // Split the content into paragraphs for better formatting
  const paragraphs = courseOverviewContent.trim().split('\n\n');
  const title = paragraphs.length > 0 ? paragraphs[0].replace(/\*\*/g, '') : "Course Overview"; // Extract title
  const restOfContent = paragraphs.slice(1).join('\n\n'); // Get remaining content

  return (
    <motion.div variants={itemVariants}>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">{title}</CardTitle>
          {/* CardDescription can be removed or adapted if needed */}
          {/* <CardDescription>A comprehensive 8-week journey...</CardDescription> */}
        </CardHeader>
        <CardContent className="text-foreground/80 space-y-3">
           {/* Render the rest of the content */}
           {restOfContent.split('\n').map((line, index) => {
             // Basic handling for bold text and list items
             if (line.startsWith('- ')) {
               return <p key={index} className="ml-4">{line}</p>;
             }
             if (line.includes('**')) {
                 // Crude bold handling - consider markdown parser for complex cases
                 const parts = line.split('**');
                 return (
                    <p key={index}>
                        {parts.map((part, i) =>
                            i % 2 === 1 ? <strong key={i} className="text-primary/90">{part}</strong> : part
                        )}
                    </p>
                 );
             }
             return <p key={index}>{line}</p>;
           })}
        </CardContent>
      </Card>
    </motion.div>
  );
}
