import { useEffect } from "react";
import { buildCanonicalUrl, DEFAULT_OG_IMAGE } from "./seo";

export default function HeadMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalPath = "/",
  robots,
  jsonLd,
}) {
  useEffect(() => {
    const ensureTag = (selector, createTag, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement(createTag);
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
      return el;
    };

    if (title) {
      document.title = title;
      ensureTag('meta[property="og:title"]', "meta", {
        property: "og:title",
        content: ogTitle || title,
      });
      ensureTag('meta[name="twitter:title"]', "meta", {
        name: "twitter:title",
        content: ogTitle || title,
      });
    }

    if (description) {
      ensureTag('meta[name="description"]', "meta", {
        name: "description",
        content: description,
      });
      ensureTag('meta[property="og:description"]', "meta", {
        property: "og:description",
        content: ogDescription || description,
      });
      ensureTag('meta[name="twitter:description"]', "meta", {
        name: "twitter:description",
        content: ogDescription || description,
      });
    }

    const canonicalUrl = buildCanonicalUrl(canonicalPath);
    ensureTag('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: canonicalUrl,
    });
    ensureTag('meta[property="og:url"]', "meta", {
      property: "og:url",
      content: canonicalUrl,
    });
    ensureTag('meta[name="twitter:url"]', "meta", {
      name: "twitter:url",
      content: canonicalUrl,
    });

    ensureTag('meta[property="og:image"]', "meta", {
      property: "og:image",
      content: ogImage || DEFAULT_OG_IMAGE,
    });
    ensureTag('meta[name="twitter:image"]', "meta", {
      name: "twitter:image",
      content: ogImage || DEFAULT_OG_IMAGE,
    });

    if (robots) {
      ensureTag('meta[name="robots"]', "meta", {
        name: "robots",
        content: robots,
      });
    }

    const jsonLdScripts = [];
    if (jsonLd) {
      const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      entries.forEach((entry) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = typeof entry === "string" ? entry : JSON.stringify(entry);
        document.head.appendChild(script);
        jsonLdScripts.push(script);
      });
    }

    return () => {
      jsonLdScripts.forEach((script) => script.remove());
    };
  }, [
    title,
    description,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalPath,
    robots,
    jsonLd,
  ]);

  return null;
}
