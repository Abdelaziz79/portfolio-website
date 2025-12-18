import { Project } from "@/app/_types/types";

export const maze: Project = {
  id: "maze-solver",
  title: "Maze Solver",
  description: {
    en: "A web-based maze solver application developed using React and Bootstrap. The application allows users to create and interact with a maze, set start and end points, add obstacles, and solve the maze using either Breadth-First Search (BFS) or Depth-First Search (DFS) algorithms.",
    ar: "تطبيق ويب لحل المتاهات تم تطويره باستخدام React و Bootstrap. يتيح التطبيق للمستخدمين إنشاء والتفاعل مع المتاهة، وتحديد نقاط البداية والنهاية، وإضافة العوائق، وحل المتاهة باستخدام خوارزميات البحث بالعرض أو البحث بالعمق.",
  },
  fullDescription: {
    en: `A comprehensive web application for creating and solving mazes using graph traversal algorithms. Users can interact with the maze through an intuitive clicking system to set source points, targets, and obstacles. The application features customizable maze dimensions and solver speeds, making it both educational and practical for understanding pathfinding algorithms. The interface is built with React and Bootstrap, ensuring a responsive and user-friendly experience across different devices.`,
    ar: `تطبيق ويب شامل لإنشاء وحل المتاهات باستخدام خوارزميات اجتياز الرسم البياني. يمكن للمستخدمين التفاعل مع المتاهة من خلال نظام نقر بديهي لتعيين نقاط المصدر والأهداف والعقبات. يتميز التطبيق بأبعاد متاهة قابلة للتخصيص وسرعات حل، مما يجعله تعليميًا وعمليًا لفهم خوارزميات إيجاد المسار. تم بناء الواجهة باستخدام React و Bootstrap، مما يضمن تجربة متجاوبة وسهلة الاستخدام عبر الأجهزة المختلفة.`,
  },
  image: "/projects/project-10/pr10.png",
  technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
  liveUrl: "https://azeez-app-maze-solver.surge.sh/",
  githubUrl: "https://github.com/Abdelaziz79/maze-solver.git",
  features: {
    en: [
      "Interactive maze creation with customizable dimensions (rows and columns)",
      "Multi-click functionality for setting maze elements (source, target, obstacles)",
      "Random generation of source points, targets, and obstacles",
      "Implementation of both Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms",
      "Adjustable solver speed for visualization purposes",
      "Responsive design supporting various screen sizes",
      "Intuitive user interface with clear visual feedback",
    ],
    ar: [
      "إنشاء متاهة تفاعلية بأبعاد قابلة للتخصيص (صفوف وأعمدة)",
      "وظيفة النقر المتعدد لتعيين عناصر المتاهة (المصدر، الهدف، العوائق)",
      "التوليد العشوائي لنقاط المصدر والأهداف والعوائق",
      "تنفيذ كل من خوارزميات البحث بالعرض والبحث بالعمق",
      "سرعة حل قابلة للتعديل لأغراض التصور",
      "تصميم متجاوب يدعم أحجام الشاشات المختلفة",
      "واجهة مستخدم بديهية مع تغذية مرتدة بصرية واضحة",
    ],
  },
  team: {
    en: "Individual project",
    ar: "مشروع فردي",
  },
  duration: {
    en: "Completed project",
    ar: "مشروع مكتمل",
  },
  screenshots: [
    "/projects/project-10/pr10-1.png",
    "/projects/project-10/pr10-2.png",
  ],
};
