import { Project } from "@/app/_types/types";

export const theWildOasis: Project = {
  id: "the-wild-oasis",
  title: "The Wild Oasis",
  description: {
    en: "A full-featured React web application that allows hotel employees to manage cabins, bookings, and guests with real-time updates and comprehensive dashboard analytics.",
    ar: "تطبيق ويب متكامل مبني بـ React يتيح لموظفي الفندق إدارة الأكواخ والحجوزات والضيوف مع تحديثات فورية وتحليلات شاملة للوحة المعلومات.",
  },
  fullDescription: {
    en: "The Wild Oasis is a sophisticated hotel management system built with React and Supabase. It enables hotel staff to manage bookings, track guest information, handle check-ins/check-outs, and analyze business performance through an intuitive dashboard. The application implements advanced React patterns and features a dark mode for enhanced user experience.",
    ar: "The Wild Oasis هو نظام إدارة فندقي متطور مبني باستخدام React و Supabase. يمكّن موظفي الفندق من إدارة الحجوزات وتتبع معلومات الضيوف والتعامل مع عمليات تسجيل الدخول/الخروج وتحليل أداء الأعمال من خلال لوحة معلومات سهلة الاستخدام. يطبق التطبيق أنماط React المتقدمة ويتميز بالوضع المظلم لتحسين تجربة المستخدم.",
  },
  image: "/projects/project-2/pr2.png",
  technologies: [
    "React",
    "Supabase",
    "React Query",
    "Recharts",
    "Styled Components",
  ],
  liveUrl: "https://the-wild-oasis.vercel.app",
  githubUrl: "https://github.com/Abdelaziz79/the-wild-oasis",
  duration: {
    en: "Completed project",
    ar: "مشروع مكتمل",
  },
  team: {
    en: "Individual project",
    ar: "مشروع فردي",
  },
  features: {
    en: [
      "Secure employee-only access with authentication",
      "In-app user registration for hotel employees",
      "User profile management with avatar upload",
      "Cabin management with photo uploads",
      "Comprehensive booking management system",
      "Real-time booking status tracking",
      "Guest check-in/check-out functionality",
      "Detailed guest information management",
      "Interactive dashboard with statistics",
      "Customizable application settings",
      "Dark mode support",
    ],
    ar: [
      "وصول آمن للموظفين فقط مع المصادقة",
      "تسجيل المستخدمين للموظفين داخل التطبيق",
      "إدارة الملف الشخصي للمستخدم مع تحميل الصور الرمزية",
      "إدارة الأكواخ مع تحميل الصور",
      "نظام شامل لإدارة الحجوزات",
      "تتبع حالة الحجز في الوقت الفعلي",
      "وظائف تسجيل دخول/خروج الضيوف",
      "إدارة تفصيلية لمعلومات الضيوف",
      "لوحة معلومات تفاعلية مع إحصائيات",
      "إعدادات تطبيق قابلة للتخصيص",
      "دعم الوضع المظلم",
    ],
  },

  screenshots: [
    "/projects/project-2/pr2-1.png",
    "/projects/project-2/pr2-2.png",
    "/projects/project-2/pr2-3.png",
  ],
  acknowledgment: {
    en: "This project is based on The Ultimate React Course by Jonas Schmedtmann on Udemy",
    ar: "هذا المشروع مبني على دورة React النهائية من Jonas Schmedtmann على Udemy",
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
  },
};
