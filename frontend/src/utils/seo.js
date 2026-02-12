export const SITE_URL = "https://centrum-heights.onrender.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/android-chrome-512x512.png`;

export const buildCanonicalUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};
