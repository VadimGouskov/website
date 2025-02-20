export function getCurrentUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "https://vadimgouskov.com";
}
