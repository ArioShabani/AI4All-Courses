'use client'; // Required for Framer Motion and client-side interactions

import React, {useState, useEffect} from 'react';
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import { CourseOverviewCard } from '@/components/course-overview-card';
import { ModuleCard } from '@/components/module-card';
import { ResourceCard } from '@/components/resource-card';
import { DashboardLinkCard } from '@/components/dashboard-link-card';
import { modules, resources, futureDashboards, furtherLearningResources } from '@/lib/course-data'; // Import furtherLearningResources
import { BrainCircuit, BookOpenCheck } from 'lucide-react'; // Import BookOpenCheck icon
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton

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
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);
  const [courseContent, setCourseContent] = useState<string | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        className="container mx-auto max-w-5xl p-4 md:p-8"
      >
        {/* Header Section */}
        <motion.header className="text-center mb-10 md:mb-16" variants={itemVariants}>
           <BrainCircuit className="w-16 h-16 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
              AI & Machine Learning Course for MaharatKhaneh Alborz
          </h1>
          <p className="text-lg text-muted-foreground">Beginner to Intermediate (Python Focus)</p>
          <p className="text-sm text-muted-foreground/80 mt-2">Powered by AI4All - Ario Shabani</p>
        </motion.header>

        <motion.div variants={itemVariants}>
           <Separator className="mb-10 md:mb-16 bg-border/60" />
        </motion.div>


        {/* Course Overview Section */}
        <CourseOverviewCard />


         <motion.div variants={itemVariants}>
          <Separator className="mb-10 md:mb-16 bg-border/60" />
        </motion.div>

        {/* Weekly Modules Section - Still uses course-data.ts */}
        <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Weekly Modules</h2>
          <motion.div
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
             variants={containerVariants} // Use container variants for staggering grid items
           >
            {modules.map((module) => (
              <ModuleCard key={module.week} module={module} index={index} />
            ))}
          </motion.div>
        </motion.section>

         <motion.div variants={itemVariants}>
          <Separator className="mb-10 md:mb-16 bg-border/60" />
         </motion.div>


        {/* Resources Section - Still uses course-data.ts */}
        <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Useful Resources</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {resources.map((resource) => (
              <ResourceCard key={index} resource={resource} index={index} />
            ))}
          </motion.div>
        </motion.section>

        <motion.div variants={itemVariants}>
          <Separator className="mb-10 md:mb-16 bg-border/60" />
        </motion.div>


        {/* Future Dashboards Section - Still uses course-data.ts */}
         {futureDashboards.length > 0 && (
            <>
             <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
               <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Explore More AI Tools</h2>
               <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
                   variants={containerVariants}
               >
                 {futureDashboards.map((link) => (
                   <DashboardLinkCard key={index} dashboardLink={link} index={index} />
                 ))}
               </motion.div>
             </motion.section>
              <motion.div variants={itemVariants}>
                <Separator className="mb-10 md:mb-16 bg-border/60" />
              </motion.div>
            </>
         )}

         {/* Further Learning Section - Still uses course-data.ts */}
          <motion.section className="mb-10 md:mb-16" variants={itemVariants}>
             <h2 className="text-3xl font-semibold text-primary mb-8 text-center flex items-center justify-center">
               <BookOpenCheck className="w-8 h-8 mr-3 text-accent" />
                Further Learning
             </h2>

            
            
            
          </motion.section>


        {/* Footer Section */}
        <motion.footer className="text-center text-muted-foreground mt-12 pb-8" variants={itemVariants}>
          <p>&copy; {new Date().getFullYear()} AI4All - Ario Shabani. All rights reserved.</p>
        </motion.footer>

      </motion.div>
    </AnimatePresence>
  );
}
