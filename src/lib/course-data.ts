import type { LucideIcon } from 'lucide-react';
import { BookOpen, Youtube, Link as LinkIcon, BrainCircuit, Bot, Database, Code, Target, Briefcase, Users } from 'lucide-react';

export interface Module {
  week: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'youtube' | 'article' | 'docs' | 'other';
  icon: LucideIcon;
}

export interface DashboardLink {
    title: string;
    description: string;
    dashboardName: string; // Identifier for navigation logic
    disabled: boolean;
    icon: LucideIcon;
}


export const modules: Module[] = [
  { week: 1, title: "Introduction & Python Bootcamp", description: "Setting the stage, Python essentials for AI/ML.", icon: Code },
  { week: 2, title: "Data Engineering Fundamentals", description: "Working with data: NumPy, Pandas, data cleaning.", icon: Database },
  { week: 3, title: "Core Machine Learning Concepts", description: "Understanding Supervised vs. Unsupervised learning.", icon: BrainCircuit },
  { week: 4, title: "Supervised Learning Algorithms", description: "Regression, Classification, and practical examples.", icon: Target },
  { week: 5, title: "Unsupervised Learning Algorithms", description: "Clustering, Dimensionality Reduction techniques.", icon: Users },
  { week: 6, title: "Introduction to LLMs & AI Agents", description: "Exploring Large Language Models and Agentic concepts.", icon: Bot },
  { week: 7, title: "Practical AI Frameworks", description: "Hands-on with LangChain or similar frameworks.", icon: LinkIcon },
  { week: 8, title: "Project & Career Preparation", description: "Capstone project work and job readiness.", icon: Briefcase },
];

export const resources: Resource[] = [
  {
    title: "Python for Everybody (YouTube)",
    description: "Excellent free course for Python beginners by Dr. Chuck.",
    url: "https://www.youtube.com/playlist?list=PLlRFEj9H3Oj7Bp8-DfGpfOA9lZzd ভিক্ষু", // Example Playlist
    type: "youtube",
    icon: Youtube,
  },
  {
    title: "Pandas Documentation",
    description: "Official documentation for the Pandas library.",
    url: "https://pandas.pydata.org/docs/",
    type: "docs",
    icon: BookOpen,
  },
   {
    title: "StatQuest with Josh Starmer (YouTube)",
    description: "Clear explanations of ML and statistics concepts.",
    url: "https://www.youtube.com/@statquest",
    type: "youtube",
    icon: Youtube,
  },
  {
    title: "Introduction to Machine Learning (Article)",
    description: "A foundational article on ML concepts from Google.",
    url: "https://developers.google.com/machine-learning/crash-course/ml-intro",
    type: "article",
    icon: LinkIcon,
  },
   {
    title: "LangChain Quickstart",
    description: "Get started quickly with the LangChain framework.",
    url: "https://python.langchain.com/docs/get_started/quickstart",
    type: "docs",
    icon: BookOpen,
  },
];

export const futureDashboards: DashboardLink[] = [
    {
        title: "Agentic Workflow Dashboard",
        description: "Manage and build AI Agents.",
        dashboardName: "agentic-workflow",
        disabled: true, // Mark as coming soon
        icon: Bot,
    },
    // Add more potential dashboards here
    // {
    //     title: "Data Visualization Hub",
    //     description: "Tools for visualizing datasets.",
    //     dashboardName: "data-viz",
    //     disabled: true,
    //     icon: BarChart,
    // },
];
