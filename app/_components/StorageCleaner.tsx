"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function StorageCleaner() {
  const pathname = usePathname();

  useEffect(() => {
    const isProjectRelatedPage = pathname.startsWith("/projects");

    if (!isProjectRelatedPage) {
      localStorage.removeItem("last_visited_project_id");
    }
  }, [pathname]);

  return null;
}
