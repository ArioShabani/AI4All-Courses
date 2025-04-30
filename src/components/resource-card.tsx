'use client';

import type { Resource } from '@/lib/course-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ResourceCard({ resource, index }: ResourceCardProps) {
    const Icon = resource.icon;
  return (
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
           <Icon className="w-6 h-6 text-accent flex-shrink-0" />
           <div>
             <CardTitle className="text-lg text-primary">{resource.title}</CardTitle>
             <CardDescription className="text-sm">{resource.description}</CardDescription>
           </div>
        </CardHeader>
        <CardContent className="flex-grow flex items-end pt-4">
          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button
              variant={resource.type === 'youtube' ? 'default' : 'outline'}
              className={`w-full ${resource.type !== 'youtube' ? 'border-accent text-accent hover:bg-accent/10' : 'bg-accent hover:bg-accent/90'}`}
            >
              {resource.type === 'youtube' ? 'Watch Now' : 'Access Resource'}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
