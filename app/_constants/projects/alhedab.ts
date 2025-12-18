import { Project } from "@/app/_types/types";

export const alhedab: Project = {
  id: "alhedab-corporate-website",
  title: "Alhedab - Corporate Website",
  description: {
    en: "A modern bilingual corporate portfolio website for Alhedab, a leading Egyptian company in general contracting and investment, built with Next.js 15 and Tailwind CSS.",
    ar: "موقع احترافي حديث متعدد اللغات لشركة الهضاب، وهي شركة مصرية رائدة في المقاولات العامة والاستثمار، مبني باستخدام Next.js 15 و Tailwind CSS.",
  },
  fullDescription: {
    en: "This is the official website for Alhedab, showcasing the company's services, values, projects, and leadership. Built with a modern tech stack including Next.js 15, Tailwind CSS, Shadcn/UI, and Framer Motion, the site provides bilingual support, responsive design, SEO optimization, dark/light themes, and dynamic interactive sections.",
    ar: "هذا هو الموقع الرسمي لشركة الهضاب، يعرض خدمات الشركة، وقيمها، ومشاريعها، وفريق القيادة. مبني باستخدام تقنيات حديثة مثل Next.js 15 و Tailwind CSS و Shadcn/UI و Framer Motion، ويدعم تعدد اللغات، وتصميم متجاوب، وتحسين محركات البحث، والوضعين الداكن والفاتح، وأقسام تفاعلية ديناميكية.",
  },
  image: "/projects/alhedab/preview-1.png",
  technologies: [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "Framer Motion",
    "Lucide React",
    "React Context",
    "Vercel",
  ],
  liveUrl: "https://alhedab-portfolio.vercel.app",
  team: {
    en: "Individual Project",
    ar: "مشروع فردي",
  },
  duration: {
    en: "Completed project",
    ar: "مشروع مكتمل",
  },
  features: {
    en: [
      "Bilingual interface with RTL (Arabic) and LTR (English) support",
      "Dark and light theme toggle with system preference detection",
      "Responsive design for mobile, tablet, and desktop",
      "Modern UI with animated transitions using Framer Motion",
      "Modular React architecture with reusable Shadcn/UI components",
      "SEO optimized with Open Graph and Twitter Card metadata",
      "Dynamic sections: About, Services, Projects, Values, Leadership, and Contact",
      "Embedded map with contact form integration",
      "Optimized performance with Turbopack and next/image",
    ],
    ar: [
      "واجهة متعددة اللغات مع دعم RTL (العربية) و LTR (الإنجليزية)",
      "تبديل بين الوضع الداكن والفاتح مع احترام تفضيل النظام",
      "تصميم متجاوب للهواتف والأجهزة اللوحية وأجهزة سطح المكتب",
      "واجهة مستخدم حديثة مع انتقالات متحركة باستخدام Framer Motion",
      "بنية React معيارية بمكونات قابلة لإعادة الاستخدام من Shadcn/UI",
      "تحسين لمحركات البحث مع بيانات Open Graph و Twitter Card",
      "أقسام ديناميكية: من نحن، الخدمات، المشاريع، القيم، القيادة، تواصل معنا",
      "دمج خريطة مدمجة مع نموذج تواصل",
      "أداء محسن باستخدام Turbopack و next/image",
    ],
  },
  screenshots: [
    "/projects/alhedab/preview-1.png",
    "/projects/alhedab/preview-2.png",
    "/projects/alhedab/preview-3.png",
  ],
};
