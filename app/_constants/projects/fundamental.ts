import { Project } from "@/app/_types/types";

export const fundamental: Project = {
  id: "fundamental",
  title: "Fun & Mental",
  description: {
    en: "An innovative project that brings data structures and algorithms to life through interactive visualizations using React Flow and Monaco Editor.",
    ar: "مشروع مبتكر يجعل هياكل البيانات والخوارزميات حية من خلال التصورات التفاعلية باستخدام React Flow و Monaco Editor.",
  },
  fullDescription: {
    en: "Fun & Mental is an educational platform that makes learning data structures and algorithms interactive and intuitive. It leverages React Flow for dynamic visualizations and Monaco Editor for code editing, allowing users to create, visualize, and understand complex data structures and algorithms in real-time.",
    ar: "Fun & Mental هي منصة تعليمية تجعل تعلم هياكل البيانات والخوارزميات تفاعلياً وبديهياً. تستفيد من React Flow للتصورات الديناميكية و Monaco Editor لتحرير الكود، مما يتيح للمستخدمين إنشاء وتصور وفهم هياكل البيانات والخوارزميات المعقدة في الوقت الفعلي.",
  },
  image: "/projects/project-1/pr1-1.png",
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "React Flow",
    "Monaco Editor",
    "ELK Library",
    "Tailwind CSS",
    "Supabase",
  ],
  liveUrl: "https://fundamental-iota.vercel.app/",
  githubUrl: "https://github.com/Abdelaziz79/fundamental",
  duration: {
    en: "Ongoing development",
    ar: "التطوير مستمر",
  },
  team: {
    en: "Individual project",
    ar: "مشروع فردي",
  },
  features: {
    en: [
      "Interactive data structure visualizations",
      "Code editing with Monaco Editor",
      "Customizable components and layouts",
      "Pre-built data structures (BST, Stacks, Vectors, HashMaps, Tables)",
      "LeetCode problem visualizations",
      "Custom node and edge types",
      "Integrated layout management with ELK library",
    ],
    ar: [
      "تصورات تفاعلية لهياكل البيانات",
      "تحرير الكود باستخدام Monaco Editor",
      "مكونات وتخطيطات قابلة للتخصيص",
      "هياكل بيانات مبنية مسبقاً (BST, Stacks, Vectors, HashMaps, Tables)",
      "تصورات لمشاكل LeetCode",
      "أنواع مخصصة للعقد والحواف",
      "إدارة التخطيط المتكاملة باستخدام مكتبة ELK",
    ],
  },

  screenshots: [
    "/projects/project-1/pr1-1.png",
    "/projects/project-1/pr1-2.png",
    "/projects/project-1/pr1-3.png",
    "/projects/project-1/pr1-4.png",
    "/projects/project-1/pr1-5.png",
    "/projects/project-1/pr1-6.png",
    "/projects/project-1/pr1-7.png",
  ],
};
