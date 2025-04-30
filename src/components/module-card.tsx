'use client';

import type { Module } from '@/lib/course-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { ExternalLink } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ModuleCard({ module, index }: ModuleCardProps) {
  const { toast } = useToast();
  const Icon = module.icon;

  const handleExplore = () => {
    // Placeholder action - In a real app, this would navigate or show module details
    toast({
      title: `Week ${module.week}: ${module.title}`,
      description: "Detailed content view is under development.",
    });
  };

  return (
    <motion.div
      variants={itemVariants}
      custom={index} // Pass index for potential stagger effect if parent uses it
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        <CardHeader className="flex flex-row items-center space-x-4 pb-4">
           <Icon className="w-8 h-8 text-accent flex-shrink-0" />
           <div>
             <CardTitle className="text-lg text-primary">Week {module.week}: {module.title}</CardTitle>
             <CardDescription className="text-sm">{module.description}</CardDescription>
           </div>
        </CardHeader>
        <CardContent className="flex-grow flex items-end pt-4">
          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10" onClick={handleExplore}>
            Explore Content
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
