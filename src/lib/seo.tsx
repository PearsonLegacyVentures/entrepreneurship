import { useEffect } from "react";
import { siteConfig } from "./site-config";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function Seo({ title, description, canonicalPath }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes("Pearson Legacy Ventures") ? title : `${title} | Pearson Legacy Ventures Founder Lab`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle);
    setMeta("og:description", description);

    if (canonicalPath) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = `${siteConfig.url}${canonicalPath}`;
    }
  }, [title, description, canonicalPath]);

  return null;
}
