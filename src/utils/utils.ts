export const detectMobileOS = (): "iOS" | "Android" | "Unknown" => {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (
    /iPad|iPhone|iPod/.test(userAgent) &&
    !(window as unknown as { MSStream?: unknown }).MSStream
  ) {
    return "iOS";
  }

  return "Unknown";
};
