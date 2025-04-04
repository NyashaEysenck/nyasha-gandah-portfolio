
import React from "react";
import { 
  Code, Database, BrainCircuit, Server, Globe, 
  LineChart, Cpu, GitBranch, Monitor, PenTool,
  Users, Lightbulb, MessageSquare, BookOpen
} from "lucide-react";
import { Skill, SkillCategory } from "./types";

export const categories: SkillCategory[] = [
  { id: "all", name: "All" },
  { id: "languages", name: "Languages" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "data", name: "Data Science" },
  { id: "ml", name: "Machine Learning" },
  { id: "tools", name: "Tools" },
  { id: "soft", name: "Soft Skills" },
];

export const skills: Skill[] = [
  {
    name: "Python",
    level: "Expert",
    description: "My favorite snake that doesn't bite. Used extensively in my AI Career Guidance Tool.",
    categories: ["languages", "backend", "data", "ml"],
    icon: <Code />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    description: "Making websites do things they shouldn't. Key in building the Dual Online/Offline Payment System.",
    categories: ["languages", "frontend", "backend"],
    icon: <Code />,
  },
  {
    name: "C++",
    level: "Intermediate",
    description: "For when Python is too slow to fail. Used in selected algorithm-heavy coursework.",
    categories: ["languages"],
    icon: <Code />,
  },
  {
    name: "HTML/CSS",
    level: "Expert",
    description: "Making things pretty since 2022. The foundation of my freelance web development projects.",
    categories: ["frontend"],
    icon: <PenTool />,
  },
  {
    name: "React",
    level: "Advanced",
    description: "Virtual DOM: the relationship counselor for HTML and JS. Used in my AI Career guidance tool and Dual Online/Offline Payment System.",
    categories: ["frontend"],
    icon: <Monitor />,
  },
  {
    name: "Django",
    level: "Advanced",
    description: "Python's way of saying 'I can do web too'. Powering my ongoing Resource Exchange project.",
    categories: ["backend"],
    icon: <Server />,
  },
  {
    name: "Flask",
    level: "Advanced",
    description: "For when Django is overkill. Used in multiple university course projects.",
    categories: ["backend"],
    icon: <Server />,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    description: "JavaScript everywhere (for better or worse). Applied in my payment system backend.",
    categories: ["backend"],
    icon: <Server />,
  },
  {
    name: "MongoDB",
    level: "Advanced",
    description: "NoSQL: where schemas go to retire. Database of choice for most of my online projects.",
    categories: ["backend", "data"],
    icon: <Database />,
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    description: "SQL with an elephant mascot, because why not. Backing my Resource Exchange project.",
    categories: ["backend", "data"],
    icon: <Database />,
  },
  {
    name: "MySQL",
    level: "Advanced",
    description: "The database that's not 'YourSQL'. Used in my university database coursework.",
    categories: ["backend", "data"],
    icon: <Database />,
  },
  {
    name: "TensorFlow",
    level: "Advanced",
    description: "Teaching computers to think, what could go wrong? Core of my Deep learning projects.",
    categories: ["ml", "data"],
    icon: <BrainCircuit />,
  },
  {
    name: "PyTorch",
    level: "Intermediate",
    description: "When you want your neural networks to be flexible.",
    categories: ["ml", "data"],
    icon: <BrainCircuit />,
  },
  {
    name: "Scikit-Learn",
    level: "Advanced",
    description: "Machine learning for people who value sleep. Applied in my Course Recommender System.",
    categories: ["ml", "data"],
    icon: <BrainCircuit />,
  },
  {
    name: "Pandas",
    level: "Expert",
    description: "Not the black and white bears, sadly. Essential in my SpaceX Launch Success analysis.",
    categories: ["data"],
    icon: <LineChart />,
  },
  {
    name: "NumPy",
    level: "Advanced",
    description: "Making arrays faster than you can say 'vectorization'. Used in all my ML projects.",
    categories: ["data", "ml"],
    icon: <LineChart />,
  },
  {
    name: "Git",
    level: "Advanced",
    description: "Saving code from the void since forever. Version control for all my projects.",
    categories: ["tools"],
    icon: <GitBranch />,
  },
  {
    name: "Docker",
    level: "Intermediate",
    description: "Because 'it works on my machine' isn't good enough. Helps me prepare all my applications for deployment.",
    categories: ["tools", "backend"],
    icon: <Cpu />,
  },
  {
    name: "RESTful APIs",
    level: "Advanced",
    description: "Making computers talk to each other politely. Implemented in my offline payment system.",
    categories: ["backend"],
    icon: <Globe />,
  },
  {
    name: "Computer Vision",
    level: "Intermediate",
    description: "Teaching computers to see (but not judge). Core of my Vehicle Recognition System.",
    categories: ["ml"],
    icon: <BrainCircuit />,
  },
  {
    name: "NLP",
    level: "Advanced",
    description: "Making computers understand humans (still working on it). Used in my AI Career Guidance Tool.",
    categories: ["ml"],
    icon: <BrainCircuit />,
  },
  // Soft Skills
  {
    name: "Problem Solving",
    level: "Advanced",
    description: "Finding solutions when Stack Overflow is down. Applied in all my technical projects.",
    categories: ["soft"],
    icon: <Lightbulb />,
  },
  {
    name: "Teamwork",
    level: "Expert",
    description: "Successfully collaborating with others without plotting their downfall. A vital skill in my group projects and hackathons.
",
    categories: ["soft"],
    icon: <Users />,
  },
  {
    name: "Communication",
    level: "Advanced",
    description: "Explaining technical concepts without making people cry. Key in my freelance work.",
    categories: ["soft"],
    icon: <MessageSquare />,
  },
  {
    name: "Adaptability",
    level: "Expert",
    description: "Rolling with the punches when the requirements change for the 5th time today.",
    categories: ["soft"],
    icon: <BookOpen />,
  },
];
