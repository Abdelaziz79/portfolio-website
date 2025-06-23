import { Project } from "@/app/_types/types";

export const qr: Project = {
  id: "qr-code-reader",
  title: "📱 QR Code Reader & Generator",
  description: {
    en: "A simple QR code reader and generator built with Next.js. This web app allows users to generate QR codes, scan QR codes using a camera, and save generated QR codes in local storage for future use.",
    ar: "قارئ ومولد رمز QR بسيط مبني باستخدام Next.js. يتيح هذا التطبيق للمستخدمين إنشاء رموز QR، ومسح رموز QR باستخدام الكاميرا، وحفظ الرموز المولدة في التخزين المحلي للاستخدام المستقبلي.",
  },
  fullDescription: {
    en: "A web application that combines QR code generation and scanning capabilities. Users can create QR codes from text input, scan existing QR codes using their device's camera, and maintain a history of generated QR codes through local storage. The project emphasizes user experience with a responsive design suitable for both desktop and mobile users.",
    ar: "تطبيق ويب يجمع بين إمكانيات إنشاء ومسح رموز QR. يمكن للمستخدمين إنشاء رموز QR من المدخلات النصية، ومسح رموز QR الموجودة باستخدام كاميرا الجهاز، والاحتفاظ بسجل الرموز المولدة من خلال التخزين المحلي. يركز المشروع على تجربة المستخدم مع تصميم سريع الاستجابة مناسب لأجهزة سطح المكتب والهواتف المحمولة.",
  },
  image: "/projects/project-7/pr7-1.png",
  technologies: [
    "Next.js",
    "React",
    "react-qr-reader-es6",
    "qrcode.react",
    "TypeScript",
  ],
  liveUrl: "https://qr-iota-six.vercel.app",
  githubUrl: "https://github.com/Abdelaziz79/qr.git",
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
      "Generate QR codes from text input",
      "Scan QR codes using a camera",
      "Save generated QR codes to local storage",
      "Responsive and user-friendly interface",
    ],
    ar: [
      "إنشاء رموز QR من المدخلات النصية",
      "مسح رموز QR باستخدام الكاميرا",
      "حفظ رموز QR المولدة في التخزين المحلي",
      "واجهة سريعة الاستجابة وسهلة الاستخدام",
    ],
  },
  screenshots: [
    "/projects/project-7/pr7-1.png",
    "/projects/project-7/pr7-2.png",
    "/projects/project-7/pr7-3.png",
  ],
  challenges: {
    en: [
      "Implementing real-time QR code scanning",
      "Managing camera permissions and access",
      "Handling local storage for QR code history",
    ],
    ar: [
      "تنفيذ مسح رموز QR في الوقت الفعلي",
      "إدارة أذونات الكاميرا والوصول إليها",
      "التعامل مع التخزين المحلي لسجل رموز QR",
    ],
  },
  solutions: {
    en: [
      "Utilized react-qr-reader-es6 for efficient QR code scanning",
      "Implemented dynamic imports for better performance",
      "Used local storage API for persistent data storage",
      "Deployed on Vercel for reliable hosting and quick updates",
    ],
    ar: [
      "استخدام react-qr-reader-es6 للمسح الفعال لرموز QR",
      "تطبيق الاستيراد الديناميكي لتحسين الأداء",
      "استخدام واجهة برمجة التطبيقات للتخزين المحلي للتخزين الدائم للبيانات",
      "النشر على Vercel لاستضافة موثوقة وتحديثات سريعة",
    ],
  },
};
