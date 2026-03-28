"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLearnerProgress } from "@/components/progress/useLearnerProgress";

export function RouteProgressTracker() {
  const pathname = usePathname();
  const { isReady, rememberRoute } = useLearnerProgress();

  useEffect(() => {
    if (!isReady || !pathname) {
      return;
    }

    rememberRoute(pathname);
  }, [isReady, pathname, rememberRoute]);

  return null;
}
