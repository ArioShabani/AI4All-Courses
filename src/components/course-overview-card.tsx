'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CourseOverviewCard() {
  return (
    <motion.div variants={itemVariants}>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Course Overview</CardTitle>
          <CardDescription>A comprehensive 8-week journey into the world of AI and ML with Python.</CardDescription>
        </CardHeader>
        <CardContent className="text-foreground/80 space-y-3">
          <p>This course is designed for engineers and technical professionals looking to build a strong foundation in AI and Machine Learning using Python. We cover core concepts, data handling, practical projects, and an introduction to modern AI tools like LLMs and agents.</p>
          <p><strong className="text-primary/90">Key Focus Areas:</strong> Python Programming, Data Engineering Fundamentals, Supervised & Unsupervised Learning, Practical ML Projects, Introduction to LLMs & AI Agents, Frameworks (LangChain, etc.), Career Preparation.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
