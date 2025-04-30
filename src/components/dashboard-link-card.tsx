'use client';

import type { DashboardLink } from '@/lib/course-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from 'lucide-react';


interface DashboardLinkCardProps {
  dashboardLink: DashboardLink;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


export function DashboardLinkCard({ dashboardLink, index }: DashboardLinkCardProps) {
  const { toast } = useToast();
  const Icon = dashboardLink.icon;

  const handleNavigate = () => {
    // In a real app, implement navigation logic here based on dashboardLink.dashboardName
    // For now, just show a toast.
    toast({
      title: `Navigating to ${dashboardLink.title}`,
      description: `Feature under development. Target: ${dashboardLink.dashboardName}`,
    });
  };

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="h-full" // Ensure motion div takes full height
    >
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
         <CardHeader className="flex flex-row items-center space-x-4 pb-4">
           <Icon className="w-8 h-8 text-accent flex-shrink-0" />
           <div>
             <CardTitle className="text-lg text-primary">{dashboardLink.title}</CardTitle>
             <CardDescription className="text-sm">{dashboardLink.description}</CardDescription>
           </div>
         </CardHeader>
        <CardContent className="flex-grow flex items-end pt-4">
          <Button
            onClick={handleNavigate}
            className="w-full bg-accent hover:bg-accent/90"
            disabled={dashboardLink.disabled}
            aria-label={`Go to ${dashboardLink.title}${dashboardLink.disabled ? ' (Coming Soon)' : ''}`}
          >
            {dashboardLink.disabled ? 'Coming Soon' : 'Go to Dashboard'}
             {!dashboardLink.disabled && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
