"use client";

import { useCallback, useEffect, useState } from "react";
import {
  type LearnerProgress,
  markLessonComplete,
  readLearnerProgress,
  setLastVisitedLessonRoute,
  setLastVisitedRoute,
  toggleLessonCompletion,
  writeLearnerProgress
} from "@/lib/progress";

export function useLearnerProgress() {
  const [progress, setProgress] = useState<LearnerProgress>({ completedLessonIds: [] });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setProgress(readLearnerProgress());
    setIsReady(true);
  }, []);

  const updateProgress = useCallback((updater: (current: LearnerProgress) => LearnerProgress) => {
    setProgress((current) => {
      const next = updater(current);
      writeLearnerProgress(next);
      return next;
    });
  }, []);

  const toggleCompleted = useCallback(
    (lessonId: string) => {
      updateProgress((current) => toggleLessonCompletion(current, lessonId));
    },
    [updateProgress]
  );

  const completeLesson = useCallback(
    (lessonId: string) => {
      updateProgress((current) => markLessonComplete(current, lessonId));
    },
    [updateProgress]
  );

  const rememberRoute = useCallback(
    (route: string) => {
      updateProgress((current) => setLastVisitedRoute(current, route));
    },
    [updateProgress]
  );

  const rememberLessonRoute = useCallback(
    (route: string) => {
      updateProgress((current) => setLastVisitedLessonRoute(current, route));
    },
    [updateProgress]
  );

  return {
    progress,
    isReady,
    toggleCompleted,
    completeLesson,
    rememberRoute,
    rememberLessonRoute
  };
}
