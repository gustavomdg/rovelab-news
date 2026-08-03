import { useEffect } from "react";

const BASE_TITLE = "RoveLab News";
const BASE_URL = "https://aiprompt.news";
const DEFAULT_IMAGE = "https://aiprompt.news/logo.png";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  schema?: Record<string, any>;
}

const setMetaTag = (attr: "name" | "property", key: string, value: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
};

export const useSEO = ({
  title,
  description = "Resumindo a década de avanços que rolam em IA toda semana. Ferramentas, prompts, novidades e modelos direto no seu inbox, for free.",
  image = DEFAULT_IMAGE,
  url = "/",
  type = "website",
  schema,
}: SEOProps = {}) => {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${BASE_TITLE}`
      : `${BASE_TITLE} - Sua newsletter de Inteligência Artificial`;

    document.title = fullTitle;

    setMetaTag("name", "description", description);

    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", image.startsWith("http") ? image : `${BASE_URL}${image}`);
    setMetaTag("property", "og:url", `${BASE_URL}${url}`);
    setMetaTag("property", "og:type", type);

    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image.startsWith("http") ? image : `${BASE_URL}${image}`);
    setMetaTag("name", "twitter:card", "summary_large_image");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${url}`;

    // Manage JSON-LD Schema
    let scriptEl = document.querySelector('script[id="json-ld-schema"]') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "json-ld-schema";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.innerHTML = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      document.title = `${BASE_TITLE} - Sua newsletter de Inteligência Artificial`;
      const currentScript = document.querySelector('script[id="json-ld-schema"]');
      if (currentScript) currentScript.remove();
    };
  }, [title, description, image, url, type, schema]);
};
