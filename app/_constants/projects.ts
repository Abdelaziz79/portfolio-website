import { Project } from "@/app/_types/types";
import { alhedab } from "./projects/alhedab";
import { aora } from "./projects/aora";
import { codeRoad } from "./projects/codeRoad";
import { fullStackCMS } from "./projects/fullStackCMS";
import { patientManagementSystem } from "./projects/fullStackPMS";
import { fundamental } from "./projects/fundamental";
import { maintainX } from "./projects/maintainx";
import { maze } from "./projects/maze";
import { medical } from "./projects/medical";
import { natours } from "./projects/natours";
import { qr } from "./projects/qr";
import { quranProject } from "./projects/quranProject";
import { smartBot } from "./projects/smartBot";
import { taskManagement } from "./projects/taskManagement";
import { theWildOasis } from "./projects/theWildOasis";
import { theWildOasisBooking } from "./projects/theWildOasisBooking";
import { videoBot } from "./projects/videoBot";

export const projects: Project[] = [
  quranProject,
  patientManagementSystem,
  fundamental,
  theWildOasis,
  theWildOasisBooking,
  codeRoad,
  natours,
  videoBot,
  smartBot,
  maintainX,
  qr,
  taskManagement,
  aora,
  maze,
  medical,
  fullStackCMS,
  alhedab,
];
