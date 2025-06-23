import { Project } from "@/app/_types/types";

export const taskManagement: Project = {
  id: "task-management-mobile-app",
  title: "📋 Task Management Mobile App",
  description: {
    en: "A React Native mobile application built with Expo for task and team management. The app features real-time notifications, team collaboration, and deadline tracking.",
    ar: "تطبيق للهاتف المحمول مبني باستخدام React Native و Expo لإدارة المهام والفرق. يتميز التطبيق بإشعارات فورية، وتعاون الفريق، وتتبع المواعيد النهائية.",
  },
  fullDescription: {
    en: "A comprehensive mobile task management solution built with React Native and Expo. The application provides a complete suite of features for managing tasks and teams, including real-time notifications, deadline tracking, and team collaboration. It implements a role-based access control system and supports modern mobile UI features like gesture handling and animations. The app utilizes Supabase for backend services and real-time data synchronization.",
    ar: "حل شامل لإدارة المهام على الهاتف المحمول مبني باستخدام React Native و Expo. يوفر التطبيق مجموعة كاملة من الميزات لإدارة المهام والفرق، بما في ذلك الإشعارات الفورية، وتتبع المواعيد النهائية، والتعاون الفريقي. يطبق نظام تحكم قائم على الأدوار ويدعم ميزات واجهة المستخدم الحديثة مثل معالجة الإيماءات والرسوم المتحركة. يستخدم التطبيق Supabase لخدمات الخلفية ومزامنة البيانات في الوقت الفعلي.",
  },
  image: "/projects/project-8/pr8.jpg",
  technologies: [
    "Expo",
    "React Native",
    "Supabase",
    "NativeWind",
    "Expo Router",
    "Expo Notifications",
    "TypeScript",
    "AsyncStorage",
  ],
  liveUrl:
    "https://drive.google.com/file/d/1c-JUiOy7Gy5MX_aOQHKdf0x95mud5By6/view?usp=sharing",
  githubUrl: "https://github.com/Abdelaziz79/task-app-expo",
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
      "Comprehensive user authentication system with role-based access control",
      "Advanced task management with image upload support and status tracking",
      "Team collaboration features including member management and team-specific tasks",
      "Real-time push notifications for task assignments and completions",
      "Deadline tracking with priority indicators and visual progress tracking",
      "Modern UI with dark theme support and gesture-based interactions",
      "Task statistics and analytics dashboard",
      "Persistent authentication using AsyncStorage",
    ],
    ar: [
      "نظام شامل للمصادقة بمراقبة الوصول القائمة على الأدوار",
      "إدارة متقدمة للمهام مع دعم رفع الصور وتتبع الحالة",
      "ميزات التعاون الفريقي بما في ذلك إدارة الأعضاء والمهام الخاصة بالفريق",
      "إشعارات دفع فورية لتعيينات المهام وإكمالها",
      "تتبع المواعيد النهائية مع مؤشرات الأولوية وتتبع التقدم البصري",
      "واجهة مستخدم حديثة مع دعم المظهر الداكن والتفاعلات القائمة على الإيماءات",
      "لوحة معلومات إحصائية وتحليلية للمهام",
      "مصادقة دائمة باستخدام AsyncStorage",
    ],
  },
  screenshots: [
    "/projects/project-8/pr8-1.jpg",
    "/projects/project-8/pr8-2.jpg",
    "/projects/project-8/pr8-3.jpg",
  ],
  challenges: {
    en: [
      "Implementing real-time synchronization across multiple users",
      "Managing complex state with team-based permissions",
      "Handling offline data persistence and synchronization",
      "Implementing cross-platform gesture handling and animations",
      "Managing push notifications across different platforms",
    ],
    ar: [
      "تنفيذ المزامنة الفورية عبر مستخدمين متعددين",
      "إدارة الحالة المعقدة مع أذونات قائمة على الفريق",
      "التعامل مع استمرارية البيانات دون اتصال والمزامنة",
      "تنفيذ معالجة الإيماءات والرسوم المتحركة عبر المنصات",
      "إدارة الإشعارات الدفعية عبر منصات مختلفة",
    ],
  },
  solutions: {
    en: [
      "Utilized Supabase for robust backend infrastructure and real-time subscriptions",
      "Implemented role-based access control for team management",
      "Used React Native Reanimated for smooth animations and gestures",
      "Integrated Expo Notifications for cross-platform push notifications",
      "Employed file-based routing with Expo Router for better navigation management",
      "Implemented NativeWind for consistent cross-platform styling",
    ],
    ar: [
      "استخدام Supabase للبنية التحتية الخلفية القوية والاشتراكات الفورية",
      "تنفيذ التحكم في الوصول القائم على الأدوار لإدارة الفريق",
      "استخدام React Native Reanimated للرسوم المتحركة والإيماءات السلسة",
      "دمج إشعارات Expo للإشعارات الدفعية عبر المنصات",
      "استخدام التوجيه القائم على الملفات مع Expo Router لإدارة التنقل بشكل أفضل",
      "تنفيذ NativeWind للتنسيق المتناسق عبر المنصات",
    ],
  },
};
