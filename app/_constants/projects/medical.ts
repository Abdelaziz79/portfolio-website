import { Project } from "@/app/_types/types";

export const medical: Project = {
  id: "medical-portfolio",
  title: "Medical Portfolio",
  description: {
    en: "A Next.js-based portfolio website for a medical professional, featuring a blog system, case management, and appointment locations.",
    ar: "موقع إلكتروني احترافي مبني على Next.js للمتخصصين في المجال الطبي، يتضمن نظام مدونة، وإدارة الحالات، ومواقع المواعيد.",
  },
  fullDescription: {
    en: "A comprehensive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Supabase, designed specifically for medical professionals. The platform includes advanced features like medical case management, a blog system for health articles, and location management for multiple clinics.",
    ar: "موقع شامل تم بناؤه باستخدام Next.js وTypeScript وTailwind CSS وSupabase، مصمم خصيصًا للمتخصصين في المجال الطبي. تتضمن المنصة ميزات متقدمة مثل إدارة الحالات الطبية، ونظام مدونة للمقالات الصحية، وإدارة المواقع للعيادات المتعددة.",
  },
  image: "/projects/project-11/pr11.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Supabase",
  ],
  liveUrl: "https://abdalla-zordok.vercel.app",
  features: {
    en: [
      "Medical Case Management with image support and detailed descriptions",
      "Blog System for medical articles and health tips",
      "Professional Certification Showcase with carousel display",
      "Location Management for multiple clinic locations",
      "Patient Feedback and testimonials system",
      "Dark Mode theme toggle",
      "Responsive Design for all devices",
      "Type-safe development architecture",
      "Image upload and management capabilities",
      "Content management system (CMS)",
      "RTL support for Arabic content",
    ],
    ar: [
      "إدارة الحالات الطبية مع دعم الصور والأوصاف التفصيلية",
      "نظام مدونة للمقالات الطبية ونصائح الصحة",
      "عرض الشهادات المهنية مع عرض متحرك",
      "إدارة المواقع للعيادات المتعددة",
      "نظام تعليقات وآراء المرضى",
      "تبديل الوضع المظلم",
      "تصميم متجاوب لجميع الأجهزة",
      "هيكل تطوير آمن النوع",
      "قدرات رفع وإدارة الصور",
      "نظام إدارة المحتوى",
      "دعم اللغة العربية والكتابة من اليمين إلى اليسار",
    ],
  },
  team: {
    en: "Individual Project",
    ar: "مشروع فردي",
  },
  duration: {
    en: "Completed project",
    ar: "مشروع مكتمل",
  },
  screenshots: [
    "/projects/project-11/pr11-1.png",
    "/projects/project-11/pr11-2.png",
    "/projects/project-11/pr11-3.png",
  ],
  challenges: {
    en: [
      "Implementing secure medical data management while ensuring HIPAA compliance",
      "Building a scalable system for handling multiple clinic locations",
      "Creating an efficient image management system for medical cases",
      "Ensuring responsive design across all device types",
      "Implementing bilingual support with RTL capabilities",
    ],
    ar: [
      "تنفيذ إدارة آمنة للبيانات الطبية مع ضمان الامتثال لمعايير HIPAA",
      "بناء نظام قابل للتوسع للتعامل مع مواقع العيادات المتعددة",
      "إنشاء نظام فعال لإدارة الصور للحالات الطبية",
      "ضمان تصميم متجاوب عبر جميع أنواع الأجهزة",
      "تنفيذ دعم ثنائي اللغة مع إمكانات الكتابة من اليمين إلى اليسار",
    ],
  },
  solutions: {
    en: [
      "Utilized Supabase's secure authentication and database systems",
      "Implemented a flexible location management system with custom mapping",
      "Integrated Supabase Storage for efficient image handling",
      "Used Tailwind CSS and shadcn/ui for responsive component design",
      "Implemented Next.js built-in internationalization features",
    ],
    ar: [
      "استخدام أنظمة المصادقة وقواعد البيانات الآمنة من Supabase",
      "تنفيذ نظام مرن لإدارة المواقع مع خرائط مخصصة",
      "دمج Supabase Storage للتعامل الفعال مع الصور",
      "استخدام Tailwind CSS و shadcn/ui لتصميم مكونات متجاوبة",
      "تنفيذ ميزات التدويل المدمجة في Next.js",
    ],
  },
};
