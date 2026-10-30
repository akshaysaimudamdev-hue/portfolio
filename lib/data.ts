export const profile = {
  name: "Mudam Akshay Sai",
  email: "akshaysaimudham@gmail.com",
  location: "Huzurabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/mudam-akshay-sai-216425420",
  github: "https://github.com/akshaysaimudamdev-hue",
  resume: "/Akshay_Sai_Resume.pdf",
};

export const nav = ["About", "Skills", "Experience", "Projects", "Education", "Achievements", "Contact"];

export const skills: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"] },
  { title: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI"] },
  { title: "Backend", items: ["FastAPI", "Flask", "Node.js", "Express.js", "RESTful APIs"] },
  { title: "Databases", items: ["MongoDB", "MongoDB Atlas", "MySQL", "Vector stores"] },
  { title: "AI and LLM", items: ["RAG pipelines", "LangChain", "LlamaIndex", "FAISS", "ChromaDB", "Gemini / LLM APIs", "Vector embeddings"] },
  { title: "Tools and platforms", items: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "CI/CD workflows"] },
  { title: "CS fundamentals", items: ["Data structures and algorithms", "OOP", "Operating systems", "DBMS", "System design"] },
];

export const experience = [
  {
    company: "Cognifyz Technologies", role: "Web Development Intern", mode: "Remote",
    points: [
      "Built full-stack web modules with Node.js, Express.js and client-side rendering.",
      "Integrated RESTful endpoints for asynchronous data flow between client and server.",
      "Took part in code reviews and followed Git/GitHub version control workflows.",
    ],
    tech: ["Node.js", "Express.js", "REST APIs", "Git", "GitHub"],
  },
  {
    company: "Saiket Systems", role: "Front-End Development Intern", mode: "Remote",
    points: [
      "Built dynamic, responsive web interfaces with JavaScript and modern CSS.",
      "Reduced page load latency by optimizing rendering and asset bundling, and improved cross-browser compatibility.",
      "Worked with mentors to turn feature specs into modular, reusable UI components.",
    ],
    tech: ["JavaScript", "CSS3", "Responsive design"],
  },
];

export const project = {
  name: "Lumina AI Search & RAG Platform",
  status: "Deployed and open source",
  summary:
    "An AI search app that answers questions from your own documents and also works as a general-purpose chat, with streaming replies.",
  problem:
    "Answers from your own files and answers from a general chatbot usually live in separate tools. Lumina puts both in one search box and can also write, refactor and explain code.",
  features: [
    "Upload PDF and TXT files, split them into semantic chunks and index them in FAISS for low-latency search.",
    "Switch between document Q&A and general conversational search, with streaming responses.",
    "LLM prompt chains and agents that produce, refactor and explain code.",
    "Asynchronous FastAPI backend, deployed through Vercel and GitHub build pipelines.",
  ],
  tech: ["Python", "FastAPI", "LangChain", "LlamaIndex", "FAISS", "Google Gemini", "Vector embeddings", "Vercel", "Git"],
  // Add your real links here. A button appears automatically once a URL is set.
  liveUrl: "https://lumina-ai-rag.vercel.app/",
  repoUrl: "",
};

export const education = [
  {
    level: "B.Tech in Computer Science and Engineering",
    school: "Kamala Institute of Technology and Science (KITS), Huzurabad",
    detail: "CGPA: 7.6 / 10",
    status: "Currently studying. Expected graduation: 2028",
  },
  { level: "Intermediate", school: "SPR", detail: "", status: "Completed" },
  { level: "10th grade", school: "DAV", detail: "", status: "Completed" },
];

export const achievements = [
  { title: "NPTEL: Programming in Java", note: "Completed coursework" },
  { title: "NPTEL: Introduction to Internet of Things (IoT)", note: "Completed coursework" },
  { title: "Problem solving", note: "Solved algorithm and data structure problems on LeetCode and HackerEarth" },
];
