import { Project } from "@/app/_types/types";

export const patientManagementSystem: Project = {
  id: "patient-management-system",
  title: "⚕️ Patient Management System",
  description: {
    en: "A full-stack patient management application featuring robust role-based access, dynamic data templates, and AI-powered report generation using Google Gemini.",
    ar: "تطبيق متكامل لإدارة المرضى يتميز بنظام صلاحيات قوي قائم على الأدوار، وقوالب بيانات ديناميكية، وإنشاء تقارير مدعومة بالذكاء الاصطناعي باستخدام Google Gemini.",
  },
  fullDescription: {
    en: "A powerful and fully integrated Full-Stack Patient Management System built for modern healthcare environments. The backend, developed with Node.js and MongoDB, ensures robust, secure, and role-based access control along with a comprehensive data API. On the frontend, a sleek Next.js interface delivers a seamless experience for managing patient records, scheduling appointments, and handling dynamic medical forms. What sets this system apart is its advanced integration with the Google Gemini API, enabling AI-powered analysis of patient histories, automatic generation of detailed clinical reports, and intelligent suggestions to assist healthcare professionals in decision-making. To explore the system, you can use the following test credentials: Email: test@example.com, Password: 123456.",
    ar: "نظام إدارة مرضى متكامل وقوي مصمم خصيصًا لقطاع الرعاية الصحية الحديثة. يعتمد النظام في الخلفية على Node.js وMongoDB لتوفير إدارة مستخدمين آمنة تعتمد على الأدوار، بالإضافة إلى واجهة برمجة تطبيقات شاملة للبيانات. الواجهة الأمامية مبنية باستخدام Next.js وتوفر تجربة استخدام سلسة لإدارة سجلات المرضى، وحجز المواعيد، وإنشاء النماذج الطبية الديناميكية. ما يميز هذا النظام هو تكامله المتقدم مع واجهة Google Gemini API، مما يتيح تحليلاً ذكيًا لتاريخ المريض، وتوليد تقارير سريرية مفصلة بشكل تلقائي، وتقديم اقتراحات مدعومة بالذكاء الاصطناعي لمساعدة مقدمي الرعاية الصحية في اتخاذ القرار. لتجربة النظام، يمكنك استخدام بيانات الدخول التالية: البريد الإلكتروني: test@example.com، كلمة المرور: 123456.",
  },
  image: "/projects/pms/preview-1.png", // Using a generic path as per the example structure
  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "TypeScript",
    "MongoDB",
    "Tailwind CSS",
    "Shadcn/UI",
    "TanStack Query",
    "Zod",
    "Google Gemini API",
    "JWT",
  ],
  liveUrl: "https://patient-card-system.vercel.app/", // Add the live URL when available
  //   githubUrl: "https://github.com/abdelmoumen-soukehal/patient-sys", // Inferred from image URL
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
      "AI Analysis: Utilizes Google Gemini to analyze patient events, notes, and history to provide concise summaries and insights.",
      "AI Report Generation: Automatically generates detailed clinical reports from patient data, significantly reducing administrative workload.",
      "AI Treatment Suggestions: Offers intelligent, data-driven treatment suggestions based on patterns in patient records.",
      "AI Template Generation: Creates dynamic patient data forms and templates automatically from simple natural language prompts.",
      "Secure Role-Based Access: Multi-tiered access control for Admins, Doctors, and Staff with JWT authentication.",
      "Dynamic Template Engine: Allows admins to create and customize patient data collection forms without writing code.",
      "Comprehensive Patient & User Management: Full CRUD operations for patients, users, appointments, and system-wide notifications.",
      "Data Backup & Restore: Admins can create and restore manual or automatic database backups.",
    ],
    ar: [
      "التحليل بالذكاء الاصطناعي: يستخدم Google Gemini لتحليل أحداث المرضى والملاحظات والتاريخ لتقديم ملخصات ورؤى موجزة.",
      "إنشاء التقارير بالذكاء الاصطناعي: يولد تلقائيًا تقارير سريرية مفصلة من بيانات المرضى، مما يقلل بشكل كبير من العبء الإداري.",
      "اقتراحات العلاج بالذكاء الاصطناعي: يقدم اقتراحات علاجية ذكية ومبنية على البيانات استنادًا إلى الأنماط في سجلات المرضى.",
      "إنشاء القوالب بالذكاء الاصطناعي: ينشئ نماذج وقوالب بيانات المرضى ديناميكيًا من خلال أوامر بسيطة باللغة الطبيعية.",
      "صلاحيات آمنة قائمة على الأدوار: تحكم في الوصول متعدد المستويات للمسؤولين والأطباء والموظفين مع مصادقة JWT.",
      "محرك قوالب ديناميكي: يسمح للمسؤولين بإنشاء وتخصيص نماذج جمع بيانات المرضى بدون كتابة أي كود.",
      "إدارة شاملة للمرضى والمستخدمين: عمليات CRUD كاملة للمرضى والمستخدمين والمواعيد والإشعارات على مستوى النظام.",
      "النسخ الاحتياطي واستعادة البيانات: يمكن للمسؤولين إنشاء واستعادة نسخ احتياطية يدوية أو تلقائية لقاعدة البيانات.",
    ],
  },
  challenges: {
    en: [
      "Crafting effective prompts for the Google Gemini API to ensure the generated reports and insights are clinically relevant and accurate.",
      "Implementing a complex, multi-layered authorization system that handles user roles and subscription statuses.",
      "Designing a flexible database schema that accommodates custom fields defined by user-created templates.",
      "Ensuring patient data is handled securely across the full stack, from API endpoints to the database.",
    ],
    ar: [
      "صياغة أوامر فعالة لـ Google Gemini API لضمان أن التقارير والرؤى المُنشأة ذات صلة إكلينيكية ودقيقة.",
      "تنفيذ نظام صلاحيات معقد ومتعدد الطبقات يتعامل مع أدوار المستخدمين وحالات الاشتراك.",
      "تصميم مخطط قاعدة بيانات مرن يستوعب الحقول المخصصة المحددة بواسطة قوالب أنشأها المستخدم.",
      "ضمان التعامل مع بيانات المرضى بشكل آمن عبر المكدس الكامل، من واجهات برمجة التطبيقات إلى قاعدة البيانات.",
    ],
  },
  solutions: {
    en: [
      "Built a dedicated AI service layer to centralize interactions with the Google Gemini API, managing prompt engineering and response parsing.",
      "Developed a chain of custom Express middleware (`protect`, `restrictTo`, `checkSubscription`) to enforce security rules at the API level.",
      "Utilized MongoDB's flexible schema with Mongoose Maps to dynamically store data from the custom template engine.",
      "Leveraged TanStack Query on the Next.js frontend for efficient server state management and a responsive user interface.",
    ],
    ar: [
      "بناء طبقة خدمة مخصصة للذكاء الاصطناعي لمركزية التفاعلات مع Google Gemini API، وإدارة هندسة الأوامر وتحليل الاستجابات.",
      "تطوير سلسلة من برمجيات Express الوسيطة المخصصة (`protect`, `restrictTo`, `checkSubscription`) لفرض قواعد الأمان على مستوى الواجهة البرمجية.",
      "استخدام مخطط MongoDB المرن مع Mongoose Maps لتخزين البيانات ديناميكيًا من محرك القوالب المخصص.",
      "الاستفادة من TanStack Query في واجهة Next.js الأمامية لإدارة حالة الخادم بكفاءة وواجهة مستخدم متجاوبة.",
    ],
  },
  screenshots: [
    "/projects/pms/preview-1.png",
    "/projects/pms/preview-2.png",
    "/projects/pms/preview-3.png",
    "/projects/pms/preview-4.png",
    "/projects/pms/preview-5.png",
    "/projects/pms/preview-6.png",
  ],
};
