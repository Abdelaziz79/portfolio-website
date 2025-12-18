import { Project } from "@/app/_types/types";
import { alhedab } from "./projects/alhedab";
import { aora } from "./projects/aora";
import { codeRoad } from "./projects/codeRoad";
import { fullStackCMS } from "./projects/fullStackCMS";
import { fullstackEcommerce } from "./projects/fullstackEcommerce";
import { patientManagementSystem } from "./projects/fullStackPMS";
import { fundamental } from "./projects/fundamental";
import { lunaswiss } from "./projects/lunaswiss";
import { maintainX } from "./projects/maintainx";
import { maze } from "./projects/maze";
import { medical } from "./projects/medical";
import { natours } from "./projects/natours";
import { primaswiss } from "./projects/primaswiss";
import { qr } from "./projects/qr";
import { quranProject } from "./projects/quranProject";
import { smartBot } from "./projects/smartBot";
import { taskManagement } from "./projects/taskManagement";
import { taskmasterAI } from "./projects/taskmaster";
import { theWildOasis } from "./projects/theWildOasis";
import { theWildOasisBooking } from "./projects/theWildOasisBooking";
import { videoBot } from "./projects/videoBot";
import { zuriauto } from "./projects/zuriauto";

export const projects: Project[] = [
  fullstackEcommerce,
  patientManagementSystem,
  taskmasterAI,
  theWildOasisBooking,
  theWildOasis,
  natours,
  // ========================
  zuriauto,
  primaswiss,
  maintainX,
  aora,
  taskManagement,
  fullStackCMS,
  // ========================
  fundamental,
  quranProject,
  codeRoad,
  medical,
  lunaswiss,
  alhedab,
  // ========================
  qr,
  videoBot,
  smartBot,
  maze,
];
