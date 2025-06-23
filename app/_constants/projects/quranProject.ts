import { Project } from "@/app/_types/types";

export const quranProject: Project = {
  id: "quran-project",
  title: "📖 القرآن الكريم - Quran Project",
  description: {
    en: "A modern web application for reading, memorizing, and reviewing the Holy Quran, built with Next.js and React.",
    ar: "تطبيق ويب حديث لقراءة وحفظ ومراجعة القرآن الكريم، مبني باستخدام Next.js وReact.",
  },
  fullDescription: {
    en: "Quran Project is a feature-rich web application designed to make the Holy Quran accessible for reading and memorization. With support for audio recitations, bookmarks, spaced repetition memorization system, and PWA features, it's a powerful tool for both study and daily reading on any device.",
    ar: "Quran Project هو تطبيق ويب غني بالميزات يهدف إلى تسهيل الوصول إلى القرآن الكريم للقراءة والحفظ. مع دعم لتلاوات صوتية، وإشارات مرجعية، ونظام حفظ باستخدام التكرار المتباعد، وميزات تطبيقات الويب التقدمية، يعد أداة قوية للدراسة والقراءة اليومية على أي جهاز.",
  },
  image: "/projects/quran-project/icon.png",
  technologies: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Shadcn UI",
    "Lucide React",
    "Quran API",
    "PWA",
  ],
  liveUrl: "https://quran-website-app.vercel.app/",
  githubUrl: "https://github.com/Abdelaziz79/quran-app",
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
      "Browse and read all 114 surahs of the Quran",
      "High-quality audio recitation with repeat options",
      "Memorization system with spaced repetition lessons",
      "Bookmark favorite verses and reading position",
      "Ayah of the Day with translation",
      "Responsive design and PWA support",
      "Dark and light mode toggle",
      "Full Arabic typography support",
      "Progress tracking system",
    ],
    ar: [
      "تصفح وقراءة جميع سور القرآن الكريم",
      "تلاوة صوتية عالية الجودة مع خيارات تكرار",
      "نظام حفظ باستخدام دروس التكرار المتباعد",
      "حفظ الآيات المفضلة ومكان التوقف",
      "آية اليوم مع الترجمة",
      "تصميم متجاوب ودعم PWA",
      "الوضع المظلم والفاتح",
      "دعم كامل للطباعة العربية",
      "نظام تتبع التقدم",
    ],
  },
  challenges: {
    en: [
      "Implementing accurate Arabic text rendering and typography",
      "Integrating audio playback with verse-level repetition control",
      "Designing an intuitive memorization workflow",
      "Ensuring smooth PWA offline experience",
    ],
    ar: [
      "تنفيذ عرض دقيق للنص العربي والطباعة",
      "دمج تشغيل الصوت مع تحكم في تكرار الآيات",
      "تصميم تجربة حفظ سهلة وبديهية",
      "ضمان تجربة سلسة لتطبيق PWA في وضع عدم الاتصال",
    ],
  },
  solutions: {
    en: [
      "Used TailwindCSS and custom fonts for clean Arabic text",
      "Built a reusable audio player with repeat logic",
      "Designed lesson-based memorization with spaced repetition model",
      "Utilized Next.js PWA plugins for offline and installable experience",
    ],
    ar: [
      "استخدام TailwindCSS وخطوط مخصصة لنص عربي واضح",
      "بناء مشغل صوتي قابل لإعادة الاستخدام مع منطق التكرار",
      "تصميم دروس حفظ تعتمد على التكرار المتباعد",
      "استخدام إضافات Next.js لدعم وضع عدم الاتصال والتثبيت",
    ],
  },
  screenshots: [
    "/projects/quran-project/preview-1.png",
    "/projects/quran-project/preview-2.png",
    "/projects/quran-project/preview-3.png",
    "/projects/quran-project/preview-4.png",
  ],
};
