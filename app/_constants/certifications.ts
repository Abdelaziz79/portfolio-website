import { Certification } from "@/app/_types/types";

export const certifications: Certification[] = [
  {
    id: "1",
    title: {
      ar: "دورة React الشاملة 2024: React، Next.js، Redux والمزيد",
      en: "The Ultimate React Course 2024: React, Next.js, Redux, & More",
    },
    issuer: {
      ar: "يوديمي",
      en: "Udemy",
    },
    date: "2025",

    image: "/images/react.jpg",
  },
  {
    id: "2",
    title: {
      ar: "Node.js، Express، MongoDB والمزيد",
      en: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    },
    issuer: {
      ar: "يوديمي",
      en: "Udemy",
    },
    date: "2025",

    image: "/images/node-js.jpg",
  },
  {
    id: "3",
    title: {
      ar: "تطوير واجهات الويب باستخدام React",
      en: "Front-End Web Development with React",
    },
    issuer: {
      ar: "معهد تكنولوجيا المعلومات (ITI)",
      en: "Information Technology Institute (ITI)",
    },
    date: "2023",

    image: "/images/react-iti.png",
  },
  {
    id: "4",
    title: {
      ar: "شهادة تخرج في علوم الحاسب",
      en: "Graduate Certificate in Computer Science",
    },
    issuer: {
      ar: "جامعة المنوفية",
      en: "Menofia University",
    },
    date: "2024",

    image: "/images/graduation.png",
  },
];
