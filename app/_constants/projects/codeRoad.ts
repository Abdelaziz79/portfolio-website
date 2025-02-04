import { Project } from "@/app/_types/types";

export const codeRoad: Project = {
  id: "code-road",
  title: "CodeRoad",
  description: {
    en: "A comprehensive coding education platform that offers interactive learning, quizzes, community engagement, and real-time code execution capabilities for multiple programming languages.",
    ar: "منصة تعليمية شاملة للبرمجة تقدم تعلمًا تفاعليًا واختبارات ومشاركة مجتمعية وقدرات تنفيذ الكود في الوقت الفعلي للعديد من لغات البرمجة.",
  },
  fullDescription: {
    en: "CodeRoad is your ultimate destination for learning and mastering coding skills. The platform caters to both beginners and experienced programmers, providing interactive learning materials, quiz systems, community features, and real-time code execution. With support for multiple programming languages and a robust admin system, CodeRoad creates an engaging environment for coding education.",
    ar: "CodeRoad هي وجهتك النهائية لتعلم وإتقان مهارات البرمجة. تخدم المنصة المبتدئين والمبرمجين ذوي الخبرة، وتوفر مواد تعليمية تفاعلية وأنظمة اختبارات وميزات مجتمعية وتنفيذ الكود في الوقت الفعلي. مع دعم للعديد من لغات البرمجة ونظام إداري قوي، تخلق CodeRoad بيئة جذابة لتعليم البرمجة.",
  },
  image: "/projects/project-4/pr4.png",
  technologies: [
    "React",
    "React Query",
    "Context API",
    "React Bootstrap",
    "Recharts",
    "Supabase",
    "LiveCodes",
  ],
  liveUrl: "https://code-road-seven.vercel.app",
  githubUrl: "https://github.com/Abdelaziz79/codeRoad",
  duration: {
    en: "Completed project",
    ar: "مشروع مكتمل",
  },
  team: {
    en: "Team project",
    ar: "مشروع جماعي",
  },
  features: {
    en: [
      "Markdown-based topic creation and exploration",
      "Interactive quiz system with result tracking",
      "Community post creation with CRUD operations",
      "Social features including likes, dislikes, and comments",
      "User account management system",
      "Advanced search functionality by level, title, or topic",
      "Admin dashboard for content and user management",
      "Real-time code execution for C++, JavaScript, and TypeScript",
      "Responsive UI with React Bootstrap",
      "Dynamic client-side routing",
    ],
    ar: [
      "إنشاء واستكشاف المواضيع باستخدام Markdown",
      "نظام اختبارات تفاعلي مع تتبع النتائج",
      "إنشاء منشورات مجتمعية مع عمليات CRUD",
      "ميزات اجتماعية تشمل الإعجابات وعدم الإعجاب والتعليقات",
      "نظام إدارة حسابات المستخدمين",
      "وظائف بحث متقدمة حسب المستوى والعنوان أو الموضوع",
      "لوحة تحكم المسؤول لإدارة المحتوى والمستخدمين",
      "تنفيذ الكود في الوقت الفعلي للغات ++C وJavaScript وTypeScript",
      "واجهة مستخدم متجاوبة مع React Bootstrap",
      "توجيه ديناميكي على جانب العميل",
    ],
  },
  challenges: {
    en: [
      "Implementing real-time code execution across multiple languages",
      "Building a comprehensive quiz system with result tracking",
      "Creating an efficient search system across multiple content types",
      "Managing two separate backend versions (Supabase and .NET)",
    ],
    ar: [
      "تنفيذ تنفيذ الكود في الوقت الفعلي عبر لغات متعددة",
      "بناء نظام اختبارات شامل مع تتبع النتائج",
      "إنشاء نظام بحث فعال عبر أنواع محتوى متعددة",
      "إدارة نسختين منفصلتين من الواجهة الخلفية (Supabase و.NET)",
    ],
  },
  solutions: {
    en: [
      "Integrated LiveCodes for multi-language code execution",
      "Utilized React Query for efficient data management",
      "Implemented Context API for state management",
      "Created separate branches for different backend implementations",
    ],
    ar: [
      "دمج LiveCodes لتنفيذ الكود متعدد اللغات",
      "استخدام React Query لإدارة البيانات بكفاءة",
      "تنفيذ Context API لإدارة الحالة",
      "إنشاء فروع منفصلة لتنفيذات الواجهة الخلفية المختلفة",
    ],
  },
  screenshots: [
    "/projects/project-4/pr4-1.png",
    "/projects/project-4/pr4-2.jpg",
    "/projects/project-4/pr4-3.png",
  ],
};
