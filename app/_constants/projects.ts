import { Project } from "@/app/_types/types";
import { aora } from "./projects/aora";
import { codeRoad } from "./projects/codeRoad";
import { fullStackCMS } from "./projects/fullStackCMS";
import { fundamental } from "./projects/fundamental";
import { maintainX } from "./projects/maintainx";
import { maze } from "./projects/maze";
import { medical } from "./projects/medical";
import { natours } from "./projects/natours";
import { qr } from "./projects/qr";
import { taskManagement } from "./projects/taskManagement";
import { theWildOasis } from "./projects/theWildOasis";
import { theWildOasisBooking } from "./projects/theWildOasisBooking";

export const projects: Project[] = [
  fundamental,
  theWildOasis,
  theWildOasisBooking,
  codeRoad,
  natours,
  maintainX,
  qr,
  taskManagement,
  aora,
  maze,
  medical,
  fullStackCMS,
];
