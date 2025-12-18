import { Project } from "@/app/_types/types";

export const natours: Project = {
  id: "natours",
  title: "Natours",
  description: {
    en: "A comprehensive tour booking platform built with Node.js, featuring authentication, payment processing, tour management, and interactive maps.",
    ar: "منصة شاملة لحجز الرحلات السياحية مبنية باستخدام Node.js، تتميز بنظام المصادقة، ومعالجة المدفوعات، وإدارة الجولات، والخرائط التفاعلية.",
  },
  fullDescription: {
    en: "Natours is an advanced tour booking application that offers a complete solution for managing tours, bookings, user profiles, and payments. It features role-based access control, interactive tour maps, review systems, and secure payment processing through Stripe, all built on a robust Node.js backend.",
    ar: "ناتورز هو تطبيق متقدم لحجز الرحلات السياحية يقدم حلاً متكاملاً لإدارة الجولات والحجوزات وملفات المستخدمين والمدفوعات. يتميز بنظام تحكم قائم على الأدوار، وخرائط تفاعلية للجولات، وأنظمة المراجعات، ومعالجة آمنة للمدفوعات عبر Stripe، كل ذلك مبني على خلفية قوية من Node.js.",
  },
  image: "/projects/project-5/pr5.png",
  technologies: [
    "NodeJS",
    "Express",
    "MongoDB",
    "Mongoose",
    "Pug",
    "JWT",
    "Stripe",
    "Mailtrap",
  ],
  liveUrl: "https://natours.dev/",
  githubUrl: "https://github.com/Abdelaziz79/Nodejs",
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
      "Advanced authentication and authorization with role-based access",
      "User profile management with photo upload",
      "Comprehensive tour management system",
      "Secure booking and payment processing with Stripe",
      "Review and rating system for tours",
      "Favorite tours functionality",
      "Interactive tour maps with Mapbox",
      "Email notifications using Mailtrap and Sendgrid",
      "Complete API documentation",
      "Responsive design for all devices",
    ],
    ar: [
      "مصادقة وتفويض متقدم مع صلاحيات قائمة على الأدوار",
      "إدارة الملف الشخصي للمستخدم مع إمكانية رفع الصور",
      "نظام شامل لإدارة الجولات",
      "حجز آمن ومعالجة المدفوعات باستخدام Stripe",
      "نظام مراجعات وتقييم للجولات",
      "خاصية الجولات المفضلة",
      "خرائط تفاعلية للجولات باستخدام Mapbox",
      "إشعارات البريد الإلكتروني باستخدام Mailtrap و Sendgrid",
      "توثيق كامل لواجهة برمجة التطبيقات",
      "تصميم متجاوب لجميع الأجهزة",
    ],
  },

  screenshots: [
    "/projects/project-5/pr5-1.png",
    "/projects/project-5/pr5-2.png",
    "/projects/project-5/pr5-3.png",
  ],
  acknowledgment: {
    en: "This project is part of 'Node.js, Express, MongoDB & More: The Complete Bootcamp' course on Udemy. Special thanks to Jonas Schmedtmann for the comprehensive learning experience.",
    ar: "هذا المشروع هو جزء من دورة 'Node.js, Express, MongoDB والمزيد: المعسكر التدريبي الكامل' على منصة Udemy. شكر خاص لـ Jonas Schmedtmann على تجربة التعلم الشاملة.",
    link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
  },
};
