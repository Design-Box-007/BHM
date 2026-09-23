import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "Forgeon — High-performance structural welding, metal fabrication, and engineering solutions.",
  keywords = "welding, metal fabrication, structural welding, pipe welding, industrial fabrication, Forgeon",
}) => {
  useEffect(() => {
    document.title = `${title} | Forgeon Precision Welding`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }, [title, description, keywords]);

  return null;
};
