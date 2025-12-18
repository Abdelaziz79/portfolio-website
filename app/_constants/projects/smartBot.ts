import { Project } from "@/app/_types/types";

export const smartBot: Project = {
  id: "smart-bot",
  title: "Multi-Purpose Telegram Bot",
  description: {
    en: "A feature-rich Telegram bot built with Node.js offering task management, reminders, notes, file storage, video downloads, and AI-powered chat.",
    ar: "بوت تيليجرام غني بالميزات مبني باستخدام Node.js يقدم إدارة المهام، التذكيرات، الملاحظات، تخزين الملفات، تحميل الفيديوهات، ودردشة مدعومة بالذكاء الاصطناعي.",
  },
  fullDescription: {
    en: "SmartBot is your personal assistant on Telegram, designed to simplify daily tasks. It offers powerful features like to-do lists, smart reminders, note management, file storage, content scraping, video downloading from popular platforms, and conversational AI via Google Gemini integration.",
    ar: "SmartBot هو مساعدك الشخصي على تيليجرام، مصمم لتبسيط المهام اليومية. يوفر ميزات قوية مثل قوائم المهام، التذكيرات الذكية، إدارة الملاحظات، تخزين الملفات، استخراج المحتوى، تحميل الفيديوهات من المنصات الشهيرة، وذكاء اصطناعي للمحادثة باستخدام Google Gemini.",
  },
  image: "/projects/smart-bot/preview-1.png",
  technologies: [
    "Node.js",
    "Telegram Bot API",
    "MongoDB",
    "Express",
    "Google Gemini API",
    "youtube-dl-exec",
    "FFmpeg",
    "dotenv",
    "node-cron",
  ],
  liveUrl: "",
  githubUrl: "https://github.com/Abdelaziz79/smart-bot",
  duration: {
    en: "Ongoing project",
    ar: "مشروع مستمر",
  },
  team: {
    en: "Solo project",
    ar: "مشروع فردي",
  },
  features: {
    en: [
      "Task creation, completion, and deletion",
      "Smart reminders with flexible time input",
      "Note creation, retrieval, and management",
      "Upload and retrieve files including photos and videos",
      "Scrape content from URLs",
      "Download videos from YouTube, TikTok, Instagram, and more",
      "AI conversation powered by Google Gemini",
      "Clean and structured project architecture",
    ],
    ar: [
      "إنشاء المهام، إتمامها، وحذفها",
      "تذكيرات ذكية مع إدخال مرن للوقت",
      "إنشاء الملاحظات واسترجاعها وإدارتها",
      "رفع واسترجاع الملفات بما في ذلك الصور والفيديوهات",
      "استخلاص المحتوى من الروابط",
      "تحميل الفيديوهات من YouTube وTikTok وInstagram وغيرها",
      "محادثة ذكاء اصطناعي مدعومة بـ Google Gemini",
      "هيكل مشروع نظيف ومنظم",
    ],
  },

  screenshots: [
    "/projects/smart-bot/preview-1.png",
    "/projects/smart-bot/preview-2.png",
    "/projects/smart-bot/preview-3.png",
    "/projects/smart-bot/preview-4.png",
    "/projects/smart-bot/preview-5.png",
  ],
};
