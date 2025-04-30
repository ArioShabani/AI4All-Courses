
import type { LucideIcon } from 'lucide-react';
import { BookOpen, Youtube, Link as LinkIcon, BrainCircuit, Bot, Database, Code, Target, Briefcase, Users, Activity, Milestone, GraduationCap, GitBranch, Mail, DatabaseZap, Sparkles, Tv, Workflow, FileCode, SearchCheck, Settings } from 'lucide-react';

// Enhanced Module interface to hold more structured content
export interface Module {
  week: number;
  title: string;
  introduction: string; // Introduction/summary for the week
  topics: string[];
  exercises: string[];
  projectComponent: string;
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
  {
    week: 1,
    title: "Introduction & Python Bootcamp",
    introduction: "Setting the stage, Python essentials for AI/ML.",
    topics: [
        "Why Python for AI/ML and Automation? (Readability, Libraries, Community, Versatility)",
        "Python Fundamentals (Variables, Data Types, Operators, Control Flow, Functions, Basic Data Structures)",
        "Setting up the Python Environment (Anaconda, Conda environments, Package installation)",
        "Introduction to Python IDEs/Environments (Jupyter Notebook/Lab, Spyder, VS Code, PyCharm)",
        "Basic Python Projects & Simple Automations (Simple scripts, File renaming example)",
    ],
    exercises: [
        "Install Anaconda and create a new Conda environment.",
        "Write Python functions for basic arithmetic operations.",
        "Practice using loops and conditional statements.",
        "Create and manipulate lists and dictionaries.",
        "Write a simple Python script to list files in a folder.",
    ],
    projectComponent: "Set up your project directory structure. Write a \"Hello, World!\" script and run it in your chosen IDE.",
    icon: Code
  },
  {
    week: 2,
    title: "Core AI/ML Concepts & Basic Theory",
    introduction: "Introduces the fundamental concepts and terminology of Machine Learning and Deep Learning.",
     topics: [
        "What is Machine Learning? What is Deep Learning? (Definitions, Relationship)",
        "Types of Machine Learning (Supervised: Regression/Classification, Unsupervised: Clustering/Dimensionality Reduction, Reinforcement Learning)",
        "Basic ML Tasks (Regression, Classification, Clustering)",
        "Understanding Data and its Role in ML (Importance, Types, Features/Labels, Train/Validation/Test Sets)",
    ],
    exercises: [
        "Identify whether a given problem is a regression, classification, or clustering task.",
        "Discuss potential features and labels for different ML problems.",
        "Explain the difference between supervised and unsupervised learning.",
    ],
    projectComponent: "Research and identify a simple dataset online (e.g., Kaggle, UCI). Understand its features and the ML task it could be used for.",
    icon: BrainCircuit
  },
   {
    week: 3,
    title: "Data Handling & Engineering (Part 1)",
    introduction: "Dives into the crucial steps of handling and preparing data using Python libraries NumPy and Pandas.",
    topics: [
        "Importance of Data Engineering for AI/ML (Data quality, Pipelines)",
        "Working with Data in Python: NumPy (Arrays, Indexing, Slicing, Operations, Broadcasting)",
        "Working with Data in Python: Pandas (Series, DataFrames, Creation, Selection, Filtering)",
        "Handling Missing Data with Pandas (Checking, Dropping, Filling)",
        "Basic Data Cleaning Techniques (Duplicates, Data Types)",
    ],
    exercises: [
        "Create NumPy arrays and perform basic operations.",
        "Load a CSV file into a Pandas DataFrame.",
        "Select specific columns and rows from a DataFrame.",
        "Identify and handle missing values using Pandas.",
        "Filter a DataFrame based on conditions.",
    ],
    projectComponent: "Load the dataset identified in Week 2 into a Pandas DataFrame. Perform basic inspection (head, info, describe). Check for and report missing values.",
    icon: Database
  },
   {
    week: 4,
    title: "Data Handling & Engineering (Part 2)",
    introduction: "Continues with data fundamentals, introduces visualization, databases, version control, and basic automation.",
    topics: [
        "Data Visualization Basics (Matplotlib, Seaborn; Scatter, Line, Histograms, Bar plots)",
        "Introduction to Databases (Relational vs. NoSQL concepts)",
        "SQL for Data Querying (SELECT, FROM, WHERE, GROUP BY, ORDER BY, basic JOIN concepts)",
        "Brief Overview of Data Warehousing & ETL",
        "Basic Concepts of Distributed Systems & Big Data Tools (Apache Spark intro)",
        "Version Control (Git/GitHub basics: repo, commit, push, pull, clone)",
        "Simple Automation Projects (Sending emails with smtplib, File handling, Basic web scraping with requests/BeautifulSoup)",
        "Working with APIs for Real-time Data (REST APIs, requests library)",
    ],
    exercises: [
        "Create basic plots of your dataset using Matplotlib/Seaborn.",
        "Write simple SQL queries (simulated or online environment).",
        "Set up a Git repository and make your first commit.",
        "Write a Python script to send a simple email.",
        "Write a script to fetch data from a public API.",
    ],
    projectComponent: "Add basic visualizations for key features in your dataset. Commit your project code to GitHub.",
    icon: DatabaseZap // Using a different database icon for variety
  },
  {
    week: 5,
    title: "Practical Projects & Applied Skills (ML Focus)",
    introduction: "Focuses on implementing basic machine learning algorithms using SciKit-Learn and creating simple UIs.",
    topics: [
        "Building Simple ML Projects using SciKit-Learn (Workflow: Load/Prepare, Split, Choose Model, Train, Predict, Evaluate)",
        "Regression Example: Implementing Linear Regression",
        "Classification Example: Implementing Logistic Regression or Decision Tree",
        "Clustering Example: Implementing K-Means Clustering",
        "Creating a Simple UI/Frontend: Introduction to Streamlit",
        "Building a basic Streamlit app to interact with an ML model",
        "Alternative: Mention Tkinter for desktop GUI",
    ],
    exercises: [
        "Split your dataset into training/testing sets using SciKit-Learn.",
        "Train a Linear Regression model and make predictions.",
        "Train a Classification model and evaluate its accuracy.",
        "Apply K-Means clustering and visualize the clusters.",
        "Install Streamlit and create a basic \"Hello, World!\" app.",
    ],
    projectComponent: "Choose an ML task for your dataset. Implement the algorithm using SciKit-Learn. Evaluate performance. Create a simple Streamlit app for user interaction with your model.",
    icon: Target
  },
  {
    week: 6,
    title: "Advanced AI Concepts (LLMs, Agents, RAG)",
    introduction: "Introduces contemporary AI concepts like Large Language Models, AI agents, and Retrieval Augmented Generation.",
    topics: [
        "Large Language Models (LLMs): What are they? High-level workings, Capabilities (Text gen, translation, QA, etc.)",
        "Interaction with LLMs via Python (APIs: OpenAI, Anthropic, Gemini; SDKs)",
        "Examples of LLMs (Commercial: ChatGPT, Claude, Gemini; Open-source: Llama, Mistral, Ollama)",
        "AI Agents and Agentic Workflows (Definition, Components: Planning, Memory, Tools; Examples)",
        "Retrieval Augmented Generation (RAG): What, Why, How (Retrieval + Generation phases)",
        "Benefits of RAG (Accuracy, Grounding, Verifiability, Freshness)",
    ],
    exercises: [
        "List key capabilities of 3 different LLMs.",
        "Explain the difference between a simple chatbot and an AI agent.",
        "Describe a scenario where RAG would be beneficial.",
    ],
    projectComponent: "Explore documentation for one LLM API. Set up an API key (optional, be mindful of cost/security). Write a simple Python script to send a prompt to an LLM API and print the response.",
    icon: Sparkles // Using Sparkles to represent advanced AI/LLMs
  },
  {
    week: 7,
    title: "Advanced AI Tools (Frameworks, SDKs, Automation)",
    introduction: "Focuses on tools and frameworks for building complex AI applications and agentic workflows.",
    topics: [
        "Frameworks for Building Agents/LLM Apps (LangChain, LangGraph, CrewAI, Microsoft AutoGen - core concepts)",
        "Basic concepts of SDKs (Definition, Role in API/Framework interaction)",
        "Introduction to Automation Tools (No-Code/Low-Code: n8n, Make - features, comparison)",
        "How automation tools complement Python AI/ML projects",
        "Briefly touch upon A2A (Agent-to-Agent) interaction concepts",
        "Mention possibilities for integration with existing systems (APIs, Google Calendar, CRMs)",
        "Brief mention of cloud platforms (GCP, AWS) for hosting/scaling",
    ],
    exercises: [
        "Research core components of LangChain.",
        "Explore documentation for one agentic framework.",
        "Compare features of n8n and Make.",
        "Think about using an automation tool to trigger a Python script.",
    ],
    projectComponent: "Install LangChain and experiment with a simple chain. (Optional) Explore a simple workflow in n8n or Make using an HTTP request.",
    icon: Settings // Using Settings to represent frameworks/tools
  },
  {
    week: 8,
    title: "Progress Assessment & Career Path",
    introduction: "Consolidates learning, plans for the future, and focuses on professional application of skills.",
    topics: [
        "Strategies for assessing learning progress (Self-assessment, Projects, Quizzes, Feedback)",
        "Building a Portfolio of Projects (Importance, Content, GitHub for hosting)",
        "Understanding the AI/ML Job Market (Roles: ML Engineer, Data Scientist, etc.; In-demand skills)",
        "Tips for Preparing for Technical Interviews (Concepts, Coding practice, Project discussion, SQL)",
        "Continuous Learning in AI/ML (Importance, Resources: Courses, Blogs, Papers, Conferences)",
        "Exploring Potential Career Paths and Work Environments",
        "Discussion: Skills for Training Contracts, SME Integration, VA Roles in AI Projects",
        "Next Steps (Deepening knowledge, Complex projects, Networking)",
    ],
    exercises: [
        "Reflect on your learning journey: identify strengths and areas for improvement.",
        "Outline 3-5 potential portfolio project ideas.",
        "Research AI/ML job descriptions and list required skills.",
        "Practice answering a common technical interview question.",
    ],
    projectComponent: "Refine the Streamlit app from Week 5. Ensure your GitHub repository is well-organized with clear READMEs. Start brainstorming your next AI/ML project.",
    icon: GraduationCap
  },
];


export const resources: Resource[] = [
  {
    title: "Learn the Basics of Python in 1 hour",
    description: "A concise tutorial covering Python fundamentals.",
    url: "https://www.howtogeek.com/learn-the-basics-of-python-in-one-hour/",
    type: "article", // Changed type to 'article'
    icon: LinkIcon, // Keep LinkIcon or change if more appropriate
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

// This content is now primarily loaded from the PDF via the API.
// Keep this here as a potential fallback or for testing if needed.
export const courseOverviewContent: string = `
**8-Week AI & Machine Learning Course: Beginner to Intermediate (Python Focus)**

Welcome to the AI & Machine Learning course! This program is designed to take you from foundational concepts to practical Python-based implementations, preparing you for roles in this exciting field. Over the next 8 weeks, we will blend theory with hands-on projects, focusing on building practical skills using Python and its powerful libraries.

**Target Audience:** Individuals with an engineering background and basic familiarity with AI, ML, and data engineering, aiming for employability, training contracts, SME integration projects, and VA roles.

**Course Objectives:** By the end of this course, you will be able to:
- Understand core AI/ML concepts and terminology.
- Write Python code for data handling, analysis, and automation.
- Implement basic machine learning algorithms.
- Utilize frameworks and tools for building AI applications and workflows.
- Prepare for roles in AI/ML, data engineering, and related fields.
- Understand how to leverage AI for automation, including agentic workflows.
`;

// Add a new section for resources mentioned at the end of the course content
export const furtherLearningResources: string = `
**Course Resources & Further Learning**

Throughout the course, leverage the following types of resources:
- Official Documentation: For Python, NumPy, Pandas, SciKit-Learn, LangChain, etc.
- Online Tutorials and Blogs: Many great free resources available.
- YouTube Channels: Look for channels covering Python, ML fundamentals, data science libraries, and AI news.
- Online Communities: Stack Overflow, Reddit communities (r/learnmachinelearning, r/datascience), Discord servers.
- Books: Classic textbooks and practical guides.
- Datasets: Kaggle, UCI Machine Learning Repository, government data portals.

Remember, the field of AI/ML is constantly evolving. Continuous learning and hands-on practice are key to success. Good luck!
`;
