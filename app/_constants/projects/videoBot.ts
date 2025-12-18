import { Project } from "@/app/_types/types";

export const videoBot: Project = {
  id: "video-creator-bot",
  title: "Telegram Video Creator Bot",
  description: {
    en: "A Telegram bot that automates short video creation using Gemini AI, ElevenLabs, Stability AI, and FFmpeg.",
    ar: "بوت تيليجرام يقوم بإنشاء فيديوهات قصيرة تلقائيًا باستخدام Gemini AI وElevenLabs وStability AI وFFmpeg.",
  },
  fullDescription: {
    en: "This bot streamlines the entire video production process through advanced AI. It generates scripts, narrates them using high-quality TTS, generates visuals, and compiles videos with FFmpeg. Designed for content creators, the bot also features queue management, usage analytics, and admin tools.",
    ar: "يقوم هذا البوت بأتمتة عملية إنتاج الفيديوهات باستخدام تقنيات الذكاء الاصطناعي المتقدمة. حيث يولد السكربتات، وينشئ صوتًا باستخدام تحويل النص إلى كلام عالي الجودة، ويصنع الصور، ثم يدمجها في فيديو باستخدام FFmpeg. مناسب لمنشئي المحتوى، ويتضمن إدارة الطابور، تحليلات الاستخدام، وأدوات تحكم إدارية.",
  },
  image: "/projects/video-bot/preview-1.png",
  technologies: [
    "Node.js",
    "Telegram Bot API",
    "FFmpeg",
    "Google Gemini AI",
    "ElevenLabs",
    "Stability AI",
    "dotenv",
  ],
  liveUrl: "",
  githubUrl: "https://github.com/Abdelaziz79/short_video_creator_bot",
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
      "Automated script generation using Gemini AI",
      "Text-to-speech narration with ElevenLabs",
      "Image generation with Stability AI",
      "Video compilation using FFmpeg",
      "Efficient video request queue management",
      "Usage statistics and analytics",
      "Admin commands for monitoring and control",
    ],
    ar: [
      "توليد السكربت تلقائيًا باستخدام Gemini AI",
      "تحويل النص إلى صوت باستخدام ElevenLabs",
      "إنشاء الصور باستخدام Stability AI",
      "دمج الفيديوهات باستخدام FFmpeg",
      "إدارة فعالة لطابور طلبات الفيديو",
      "إحصائيات وتحليلات الاستخدام",
      "أوامر إدارية للمراقبة والتحكم",
    ],
  },

  screenshots: [
    "/projects/video-bot/preview-1.png",
    "/projects/video-bot/preview-2.png",
    "/projects/video-bot/preview-3.png",
    "/projects/video-bot/preview-4.png",
  ],
};
