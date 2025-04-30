
'use client';

import type { Module } from '@/lib/course-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ExternalLink, BookOpenText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose, // Import DialogClose
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area"; // Import ScrollArea

interface ModuleCardProps {
  module: Module;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ModuleCard({ module, index }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <Dialog>
      <motion.div
        variants={itemVariants}
        custom={index}
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
               <CardDescription className="text-sm line-clamp-2">{module.introduction}</CardDescription>
             </div>
          </CardHeader>
          <CardContent className="flex-grow flex items-end pt-4">
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                Explore Content
                <BookOpenText className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
          </CardContent>
        </Card>
      </motion.div>

      {/* Dialog Content */}
      <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
         <DialogHeader>
           <DialogTitle className="text-2xl flex items-center">
              <Icon className="w-6 h-6 mr-2 text-accent" />
              Week {module.week}: {module.title}
           </DialogTitle>
           <DialogDescription>
             {module.introduction}
           </DialogDescription>
         </DialogHeader>
         <ScrollArea className="h-[50vh] pr-6"> {/* Added ScrollArea */}
            <div className="grid gap-4 py-4">
                <div>
                    <h3 className="font-semibold text-primary mb-2">Topics Covered:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {module.topics.map((topic, i) => <li key={`topic-${i}`}>{topic}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-primary mb-2">Exercises:</h3>
                     <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {module.exercises.map((exercise, i) => <li key={`ex-${i}`}>{exercise}</li>)}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-primary mb-2">Project Component:</h3>
                     <p className="text-muted-foreground">{module.projectComponent}</p>
                 </div>
             </div>
         </ScrollArea>
         <DialogFooter>
            <DialogClose asChild>
                 <Button type="button" variant="secondary">
                   Close
                 </Button>
            </DialogClose>
         </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
