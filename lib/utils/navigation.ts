export function moduleHref(moduleSlug: string) {
  return `/learn/${moduleSlug}`;
}

export function lessonHref(moduleSlug: string, lessonSlug: string) {
  return `/learn/${moduleSlug}/${lessonSlug}`;
}
