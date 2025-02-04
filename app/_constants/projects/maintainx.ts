import { Project } from "@/app/_types/types";

export const maintainX: Project = {
  id: "maintainx",
  title: "MaintainX",
  description: {
    en: "A comprehensive mobile application built with Expo/React Native for tracking and managing vehicle maintenance tasks. Keep your vehicle in top condition by monitoring maintenance schedules, costs, and history.",
    ar: "تطبيق شامل للهاتف المحمول مبني باستخدام Expo/React Native لتتبع وإدارة مهام صيانة المركبات. حافظ على مركبتك في أفضل حالة من خلال مراقبة جداول الصيانة والتكاليف والسجل.",
  },
  fullDescription: {
    en: "MaintainX is a sophisticated vehicle maintenance tracking application that helps users manage maintenance tasks, monitor costs, and maintain detailed vehicle histories. Built with Expo/React Native, it features comprehensive task management, analytics dashboard, bilingual support, and advanced organization capabilities to ensure vehicles stay in optimal condition.",
    ar: "ميانتنكس هو تطبيق متطور لتتبع صيانة المركبات يساعد المستخدمين على إدارة مهام الصيانة، ومراقبة التكاليف، والاحتفاظ بسجلات مفصلة للمركبات. مبني باستخدام Expo/React Native، يتميز بإدارة شاملة للمهام، ولوحة تحليلات، ودعم ثنائي اللغة، وقدرات تنظيمية متقدمة لضمان بقاء المركبات في حالة مثالية.",
  },
  image: "/projects/project-6/pr6.jpeg",
  technologies: [
    "Expo/React Native",
    "TypeScript",
    "NativeWind",
    "Expo Router",
    "AsyncStorage",
  ],
  liveUrl: "https://maintainx-azeez.vercel.app/en",
  githubUrl: "https://github.com/Abdelaziz79/car",
  team: {
    en: "Individual project",
    ar: "مشروع فردي",
  },
  duration: {
    en: "Completed project",
    ar: "مشروع مكتمل",
  },
  features: {
    en: [
      "Create and manage custom maintenance tasks with time and distance-based tracking",
      "Comprehensive dashboard showing upcoming tasks and vehicle statistics",
      "Detailed cost analysis and maintenance history tracking",
      "Interactive maintenance heatmap and data visualization",
      "Advanced tag-based categorization system with dual view modes",
      "Complete maintenance history with CSV export/import",
      "Bilingual interface (English and Arabic) with RTL support",
      "Dark/light theme support with customizable preferences",
      "Statistical breakdowns by maintenance type, tags, and time periods",
      "Detailed task completion records and odometer tracking",
    ],
    ar: [
      "إنشاء وإدارة مهام صيانة مخصصة مع تتبع قائم على الزمن والمسافة",
      "لوحة متابعة شاملة تعرض المهام القادمة وإحصائيات المركبة",
      "تحليل مفصل للتكاليف وتتبع سجل الصيانة",
      "خريطة حرارية تفاعلية للصيانة وتصور البيانات",
      "نظام تصنيف متقدم قائم على الوسوم مع وضعي عرض مزدوجين",
      "سجل صيانة كامل مع تصدير/استيراد CSV",
      "واجهة ثنائية اللغة (الإنجليزية والعربية) مع دعم اتجاه اليمين إلى اليسار",
      "دعم المظهر الداكن/الفاتح مع تفضيلات قابلة للتخصيص",
      "تحليلات إحصائية حسب نوع الصيانة والوسوم والفترات الزمنية",
      "سجلات مفصلة لإكمال المهام وتتبع عداد المسافة",
    ],
  },
  challenges: {
    en: [
      "Implementing bilingual support with RTL layout",
      "Creating an efficient local data storage system",
      "Building responsive and intuitive UI components",
      "Developing comprehensive analytics visualizations",
    ],
    ar: [
      "تنفيذ الدعم الثنائي اللغة مع تخطيط من اليمين إلى اليسار",
      "إنشاء نظام تخزين محلي فعال",
      "بناء مكونات واجهة مستخدم سريعة الاستجابة وبديهية",
      "تطوير تصورات تحليلية شاملة",
    ],
  },
  solutions: {
    en: [
      "Utilized NativeWind for consistent cross-platform styling",
      "Implemented AsyncStorage for efficient local data management",
      "Created custom hooks for shared functionality",
      "Used Expo Router for seamless file-based navigation",
    ],
    ar: [
      "استخدام NativeWind للتنسيق المتناسق عبر المنصات",
      "تطبيق AsyncStorage لإدارة البيانات المحلية بكفاءة",
      "إنشاء خطافات مخصصة للوظائف المشتركة",
      "استخدام Expo Router للتنقل السلس القائم على الملفات",
    ],
  },
  screenshots: [
    "/projects/project-6/pr6-1.jpeg",
    "/projects/project-6/pr6-2.jpeg",
    "/projects/project-6/pr6-3.jpeg",
  ],
};
