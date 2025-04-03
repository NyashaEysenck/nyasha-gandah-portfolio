import { 
  Code, ExternalLink, Github, 
  Cpu, BrainCircuit, LineChart, Globe, PenTool 
} from "lucide-react";
import { Project, ProjectCategory } from "./types";

// Reordering projects to show ongoing first, then completed
export const projects: Project[] = [
  {
    id: "resource-exchange",
    title: "Real-Time Compute Resource Exchange",
    description: "An internal auction system enabling teams to bid on idle computing resources in real-time, optimizing resource allocation.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    tags: ["Django", "React", "WebSockets", "PostgreSQL"],
    categories: ["web", "data"],
    links: {
      github: "#",
    },
    icon: <Cpu />,
    status: "ongoing",
  },
  {
    id: "tensorflow-techniques",
    title: "Advanced TensorFlow Techniques Repository",
    description: "Collection of advanced TensorFlow implementations including custom models, layers, loss functions, and distributed training examples.",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=600&q=80",
    tags: ["TensorFlow", "Deep Learning", "Custom Models", "Distributed Training"],
    categories: ["ml", "ai"],
    links: {
      github: "https://github.com/NyashaEysenck/Deep-Learning",
    },
    icon: <Code />,
    status: "ongoing",
  },
  {
    id: "ai-career-guidance",
    title: "AI Career Guidance Tool",
    description: "An AI-powered career recommendation and CV generation tool that helps job seekers with career choices and interview preparation.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "NLP", "ML", "Flask", "OpenAI"],
    categories: ["ai", "ml", "web"],
    links: {
      github: "https://github.com/TafaraMukarakate/Jobpal-Frontend/tree/main",
      live: "https://jobpal-frontend-production.up.railway.app/",
    },
    icon: <BrainCircuit />,
    status: "completed",
  },
  {
    id: "payment-system",
    title: "Dual Online/Offline Payment System",
    description: "A payment system supporting both online and offline QR transactions that sync when connectivity is restored, ensuring uninterrupted business operations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Node.js", "MongoDB", "QR Code"],
    categories: ["web"],
    links: {
      github: "https://github.com/NyashaEysenck/Dual-Online-Offline-Payment-System.git"
    },
    icon: <Globe />,
    status: "completed",
  },
  {
    id: "event-management",
    title: "Django Event Management App",
    description: "Web application for event management featuring sentiment analysis of reviews and AI-powered event description generation.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    tags: ["Django", "SQLite", "ML", "NLP", "Gemini AI"],
    categories: ["web", "ml", "ai"],
    links: {
      github: "https://github.com/NyashaEysenck/Event-Hub",

    },
    icon: <PenTool />,
    status: "completed",
  },
  {
    id: "vehicle-recognition",
    title: "Automatic Vehicle Recognition System",
    description: "Computer vision system for vehicle detection and classification using object detection techniques applicable for traffic monitoring and smart cities.",
    image: "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "TensorFlow", "Computer Vision", "OpenCV"],
    categories: ["ml", "ai"],
    links: {
      github: "https://github.com/NyashaEysenck/Automatic-Vehicle-Recognition",
    },
    icon: <BrainCircuit />,
    status: "completed",
  },
  {
    id: "course-recommender",
    title: "Course Recommender System",
    description: "A machine learning-based course recommendation system deployed as a Streamlit web app that suggests relevant courses based on user preferences.",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Streamlit", "Scikit-learn", "Recommendation System"],
    categories: ["ml", "data", "ai", "web"],
    links: {
      github: "https://github.com/NyashaEysenck/Course-Recommender-System"
    },
    icon: <LineChart />,
    status: "completed",
  },
  {
    id: "image-classification",
    title: "AI Capstone: Deep Learning for Image Classification",
    description: "Implemented and compared ResNet and VGG architectures for image classification, achieving 98%+ accuracy on test data.",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Tensorflow", "Deep Learning", "CNN", "Transfer Learning"],
    categories: ["ml", "ai"],
    links: {
      github: "https://github.com/NyashaEysenck/AI-Capstone-Project-with-Deep-Learning",
    },
    icon: <BrainCircuit />,
    status: "completed",
  },
  {
    id: "spacex-analysis",
    title: "SpaceX Launch Success Prediction",
    description: "Data science project analyzing SpaceX launch data and predicting launch success probabilities with interactive visualizations.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Pandas", "SQL", "Machine Learning", "Dash"],
    categories: ["data", "ml"],
    links: {
      github: "https://github.com/NyashaEysenck/Applied-Data-Science-Capstone",
    },
    icon: <LineChart />,
    status: "completed",
  },
  {
    id: "image-captioning",
    title: "Image Description Generation",
    description: "Computer Vision system for generating natural language descriptions from images to improve accessibility for visually impaired individuals.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "YOLO", "Ultralytics", "LLM", "NLP","Clustering"],
    categories: ["ml", "ai"],
    links: {
      github: "https://github.com/rorro6787/img-desc-visually-impaired.git",
    },
    icon: <BrainCircuit />,
    status: "completed",
  },
  {
    id: "stock-analysis",
    title: "Stock Market Data Analysis",
    description: "Time series analysis of stock market data for pattern recognition and predictive modeling to identify market trends.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Pandas", "Time Series", "Data Visualization", "Statistical Analysis"],
    categories: ["data"],
    links: {
      github: "https://github.com/NyashaEysenck/ML-Projects",
    },
    icon: <LineChart />,
    status: "completed",
  },
];

export const categories = [
  { id: "all" as ProjectCategory, name: "All" },
  { id: "web" as ProjectCategory, name: "Web Dev" },
  { id: "ml" as ProjectCategory, name: "Machine Learning" },
  { id: "data" as ProjectCategory, name: "Data Science" },
  { id: "ai" as ProjectCategory, name: "AI" },
];
