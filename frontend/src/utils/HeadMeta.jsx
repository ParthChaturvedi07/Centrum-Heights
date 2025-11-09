import React, { useEffect } from 'react';

export default function HeadMeta({ title, description, ogTitle, ogDescription, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;

    const ensureMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.keys(attrs).forEach((k) => el.setAttribute(k, attrs[k]));
        document.head.appendChild(el);
      } else {
        Object.keys(attrs).forEach((k) => el.setAttribute(k, attrs[k]));
      }
      return el;
    };

    if (description) {
      ensureMeta('meta[name="description"]', { name: 'description', content: description });
    }

    if (ogTitle) {
      ensureMeta('meta[property="og:title"]', { property: 'og:title', content: ogTitle });
    }

    if (ogDescription) {
      ensureMeta('meta[property="og:description"]', { property: 'og:description', content: ogDescription });
    }

    // JSON-LD injection (if provided)
    let jsonLdScript = null;
    if (jsonLd) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.text = typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      // Note: we don't remove basic meta tags (they may be shared across pages),
      // but we will remove any JSON-LD script we added.
      if (jsonLdScript && jsonLdScript.parentNode) jsonLdScript.parentNode.removeChild(jsonLdScript);
    };
  }, [title, description, ogTitle, ogDescription, jsonLd]);

  return null;
}
