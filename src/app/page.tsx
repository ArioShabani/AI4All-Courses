
'use client'; // Required for Framer Motion and client-side interactions

import React from 'react';
import { Button } from "@/components/ui/button"; // Keep Button import if needed elsewhere, though cards have their own
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import { CourseOverviewCard } from '@/components/course-overview-card';
import { ModuleCard } from '@/components/module-card';
import { ResourceCard } from '@/components/resource-card';
import { DashboardLinkCard } from '@/components/dashboard-link-card';
import { modules, resources, futureDashboards, furtherLearningResources } from '@/lib/course-data'; // Import furtherLearningResources
import { BrainCircuit, BookOpenCheck } from 'lucide-react'; // Import BookOpenCheck icon


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children appearance
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
   }
};

export default function Home() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true); // Set client state after mount
  }, []);

  // Render nothing or a loader server-side, then the full UI client-side
  if (!isClient) {
    return null; // Or a loading spinner
  }

   // Parse furtherLearningResources
   const furtherLearningParagraphs = furtherLearningResources.trim().split('\n\n');
   const furtherLearningTitle = furtherLearningParagraphs.length > 0 ? furtherLearningParagraphs[0].replace(/\*\*/g, '') : "Further Learning";
   const furtherLearningListItems = furtherLearningParagraphs.slice(1).join('\n').split('\n').filter(line => line.startsWith('- '));


  return (
    <AnimatePresence>
      <motion.div
        className="container mx-auto max-w-5xl p-4 md:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden" // Define exit animation if needed
      >
        {/* Header Section */}
        <motion.header className="text-center mb-10 md:mb-16" variants={itemVariants}>
           <BrainCircuit className="w-16 h-16 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
              AI & Machine Learning Course
          </h1>
          <p className="text-lg text-muted-foreground">Beginner to Intermediate (Python Focus)</p>
          <p className="text-sm text-muted-foreground/80 mt-2">Powered by AI4All - Ario Shabani</p>
        </motion.header>

        <motion.div variants={itemVariants}>
           <Separator className="mb-10 md:mb-16 bg-border/60" />
        </motion.div>


        {/* Course Overview Section */}
        <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
          <CourseOverviewCard />
        </motion.section>

         <motion.div variants={itemVariants}>
          <Separator className="mb-10 md:mb-16 bg-border/60" />
        </motion.div>

        {/* Weekly Modules Section */}
        <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Weekly Modules</h2>
          <motion.div
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
             variants={containerVariants} // Use container variants for staggering grid items
           >
            {modules.map((module, index) => (
              <ModuleCard key={module.week} module={module} index={index} />
            ))}
          </motion.div>
        </motion.section>

         <motion.div variants={itemVariants}>
          <Separator className="mb-10 md:mb-16 bg-border/60" />
         </motion.div>


        {/* Resources Section */}
        <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Useful Resources</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} index={index} />
            ))}
          </motion.div>
        </motion.section>

        <motion.div variants={itemVariants}>
          <Separator className="mb-10 md:mb-16 bg-border/60" />
        </motion.div>


        {/* Future Dashboards Section */}
         {futureDashboards.length > 0 && (
            <>
             <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
               <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Explore More AI Tools</h2>
               <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
                   variants={containerVariants}
               >
                 {futureDashboards.map((link, index) => (
                   <DashboardLinkCard key={index} dashboardLink={link} index={index} />
                 ))}
               </motion.div>
             </motion.section>
              <motion.div variants={itemVariants}>
                <Separator className="mb-10 md:mb-16 bg-border/60" />
              </motion.div>
            </>
         )}

         {/* Further Learning Section */}
          <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
             <h2 className="text-3xl font-semibold text-primary mb-8 text-center flex items-center justify-center">
                 <BookOpenCheck className="w-8 h-8 mr-3 text-accent" />
                 {furtherLearningTitle}
             </h2>
             <motion.div
                className="max-w-3xl mx-auto bg-card p-6 rounded-lg shadow-md text-muted-foreground"
                 variants={itemVariants} // Apply item variant for fade-in
             >
                <ul className="list-disc list-inside space-y-2">
                    {furtherLearningListItems.map((item, index) => (
                       <li key={`learn-${index}`}>{item.substring(2)}</li> // Remove '- ' prefix
                    ))}
                </ul>
                 {/* Add the concluding remark if present */}
                {furtherLearningParagraphs.length > 1 && !furtherLearningParagraphs[furtherLearningParagraphs.length - 1].startsWith('- ') && (
                    <p className="mt-4 italic">{furtherLearningParagraphs[furtherLearningParagraphs.length - 1]}</p>
                )}
             </motion.div>
          </motion.section>


        {/* Footer Section */}
        <motion.footer className="text-center text-muted-foreground mt-12 pb-8" variants={itemVariants}>
          <p>&copy; {new Date().getFullYear()} AI4All - Ario Shabani. All rights reserved.</p>
        </motion.footer>

      </motion.div>
     </AnimatePresence>
  );
}
