import { Project } from "@/app/_types/types";

export const theWildOasisBooking: Project = {
  id: "the-wild-oasis-booking",
  title: "The Wild Oasis - Booking",
  description: {
    en: "A customer-facing booking platform for The Wild Oasis hotel, allowing users to view and book cabins, manage their reservations, and update profiles with Google authentication.",
    ar: "منصة حجز للعملاء لفندق The Wild Oasis، تتيح للمستخدمين عرض وحجز الأكواخ وإدارة حجوزاتهم وتحديث ملفاتهم الشخصية باستخدام مصادقة Google.",
  },
  fullDescription: {
    en: "The Wild Oasis Booking is the customer version of the hotel management web app, providing a seamless booking experience for users. It features a comprehensive cabin booking system, user authentication via Google, booking management capabilities, and profile customization. Built with Next.js and utilizing modern technologies, this project demonstrates advanced web development techniques and responsive design principles.",
    ar: "The Wild Oasis Booking هو النسخة المخصصة للعملاء من تطبيق إدارة الفندق، يوفر تجربة حجز سلسة للمستخدمين. يتميز بنظام شامل لحجز الأكواخ، ومصادقة المستخدم عبر Google، وقدرات إدارة الحجوزات، وتخصيص الملف الشخصي. تم بناؤه باستخدام Next.js والتقنيات الحديثة، يوضح هذا المشروع تقنيات تطوير الويب المتقدمة ومبادئ التصميم المتجاوب.",
  },
  image: "/projects/project-3/pr3.png",
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Supabase",
    "NextAuth.js",
    "Date-fns",
    "Google Authentication",
  ],
  liveUrl: "https://the-wild-oasis-booking-alamin.vercel.app/",
  githubUrl: "https://github.com/Abdelaziz79/wild-oasis-website",
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
      "View available cabins with detailed descriptions and images",
      "Book cabins based on availability and guest count",
      "Google authentication integration for user management",
      "Personal booking management system",
      "Profile information updates",
      "Fully responsive design across all devices",
      "Integration with hotel management admin system",
    ],
    ar: [
      "عرض الأكواخ المتاحة مع أوصاف وصور تفصيلية",
      "حجز الأكواخ بناءً على التوفر وعدد الضيوف",
      "دمج مصادقة Google لإدارة المستخدمين",
      "نظام إدارة الحجوزات الشخصية",
      "تحديثات معلومات الملف الشخصي",
      "تصميم متجاوب بالكامل عبر جميع الأجهزة",
      "التكامل مع نظام إدارة الفندق الإداري",
    ],
  },

  screenshots: [
    "/projects/project-3/pr3-1.png",
    "/projects/project-3/pr3-2.png",
    "/projects/project-3/pr3-3.png",
  ],
  acknowledgment: {
    en: "This project is based on The Ultimate React Course by Jonas Schmedtmann on Udemy",
    ar: "هذا المشروع مبني على دورة React النهائية من Jonas Schmedtmann على Udemy",
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
  },
};
