export interface LearnerProgress {
  completedLessonIds: string[];
  lastVisitedRoute?: string;
  lastVisitedLessonRoute?: string;
}

const STORAGE_KEY = "openclaw-tutorial-progress";

const defaultProgress: LearnerProgress = {
  completedLessonIds: []
};

export function readLearnerProgress(): LearnerProgress {
  if (typeof window === "undefined") {
    return defaultProgress;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;

    const parsed = JSON.parse(raw) as Partial<LearnerProgress>;

    return {
      completedLessonIds: Array.isArray(parsed.completedLessonIds)
        ? parsed.completedLessonIds.filter((value): value is string => typeof value === "string")
        : [],
      lastVisitedRoute:
        typeof parsed.lastVisitedRoute === "string" ? parsed.lastVisitedRoute : undefined,
      lastVisitedLessonRoute:
        typeof parsed.lastVisitedLessonRoute === "string"
          ? parsed.lastVisitedLessonRoute
          : undefined
    };
  } catch {
    return defaultProgress;
  }
}

export function writeLearnerProgress(progress: LearnerProgress) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getResumeRoute(progress: LearnerProgress) {
  return progress.lastVisitedLessonRoute ?? progress.lastVisitedRoute ?? "/learn";
}

export function toggleLessonCompletion(progress: LearnerProgress, lessonId: string) {
  const completedLessonIds = progress.completedLessonIds.includes(lessonId)
    ? progress.completedLessonIds.filter((id) => id !== lessonId)
    : [...progress.completedLessonIds, lessonId];

  return {
    ...progress,
    completedLessonIds
  };
}

export function markLessonComplete(progress: LearnerProgress, lessonId: string) {
  if (progress.completedLessonIds.includes(lessonId)) {
    return progress;
  }

  return {
    ...progress,
    completedLessonIds: [...progress.completedLessonIds, lessonId]
  };
}

export function setLastVisitedRoute(progress: LearnerProgress, route: string) {
  return {
    ...progress,
    lastVisitedRoute: route
  };
}

export function setLastVisitedLessonRoute(
  progress: LearnerProgress,
  lessonRoute: string
) {
  return {
    ...progress,
    lastVisitedRoute: lessonRoute,
    lastVisitedLessonRoute: lessonRoute
  };
}
