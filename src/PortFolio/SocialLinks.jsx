import { BookOpen, Award, Building} from 'lucide-react';
import { 
  Layout, 
  Server, 
  GitBranch,
} from 'lucide-react';
export const socialLink = {
    github: "https://github.com/whorishabhverma",
    linkedin: "https://www.linkedin.com/in/rishabh-verma-2b5aa0185/",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://www.instagram.com/iam_rishabhverma/",
    facebook: "https://www.facebook.com/profile.php?id=100014192431878",
  };

export const education = [
    {
      period: "2022 - 2025",
      degree: "Master of Computer Applications",
      school: "NIT Allahabad",
      location: "Prayagraj",
      description: "Core focus on advanced software development, algorithms, data structures, and computational theory with practical application",
      achievements: ["8.0 CGPA", "Teaching Assistant for Mern"],
      icon: BookOpen
    },
    {
      period: "2017 - 2020",
      degree: "Bachelor of Computer Applications",
      school: "Dayanand Academy of Management Studies",
      location: "Kanpur",
      description: "Core focus on software development, algorithms, and data structures. Minor in Mathematics.",
      achievements: ["67%","Hackathon Winner"],
      icon: Award
    },
    {
      period: "2015 - 2017",
      degree: "Intermediate",
      school: "MNJIC",
      location: "Kannauj, Uttar Pradesh",
      description: "Core focus on general education with a specialization in science, commerce, or arts, preparing for higher studies.",
      achievements: ["85.8%","Perfect Attendance", "Programming Competition Winner"],
      icon: Building
    }
  ];  
  
  export const projects = [
    {
      title: "MNNIT_IGNOU",
      description: "A distance learning platform allowing students to manage assignments, track enrollment, and access resources, with administrative features for managing students and notifications",
      image: "/images/mnnit.png",  // Path to image in the public folder
      tags: ["React", "Node.js", "PostGreSQL", "ExpressJs", "TailwindCSS"],
      github: "https://github.com/whorishabhverma/mnnit-project",
      demo: "https://mnnit-ignou-study-center-client.vercel.app/",
      stats: {
        stars: 128,
        views: 1.2,
        forks: 34
      }
    },
    {
      title: "Bookish Baazar",
      description: "A MERN stack-based bookstore where admins upload books, customers can read them, and users can leave reviews, with secure authentication and PDF viewing capabilities.",
      image: "/images/book.png",  // Path to image in the public folder
      tags: ["Nodejs", "ExpressJs", "TailwindCSS", "React", "MongoDB"],
      github: "https://github.com/whorishabhverma/BookStore",
      demo: "#",
      stats: {
        stars: 89,
        views: 856,
        forks: 23
      }
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      image: "/images/task.png",  // Path to image in the public folder
      tags: ["NodeJs", "TailwindCSS", "React", "JavaScript", "localStorage"],
      github: "https://github.com/whorishabhverma/Task_Manager_App",
      demo: "https://taskmate-ib46.onrender.com/",
      stats: {
        stars: 245,
        views: 2.3,
        forks: 67
      }
    }
  ]; 
  
 export const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React.js", level: 70 },
        { name: "Next.js", level: 40 },
        { name: "TypeScript", level: 90 },
        { name: "TailwindCSS", level: 80 }
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "PostGreSQL", level: 85 }
      ],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Tools & Platforms",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 50 },
        { name: "AWS", level: 20 },
        { name: "Firebase", level: 70 }
      ],
      color: "from-purple-400 to-purple-600"
    }
  ];



