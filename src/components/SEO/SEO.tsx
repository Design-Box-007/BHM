import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "BHMI — Your all-in-one structural bonding and metal fabrication partner.",
  keywords = "bonding, structural bonding, metal fabrication, structural welding, industrial fabrication, BHMI",
}) => {
  useEffect(() => {
    document.title = `${title} | BHMI Structural Bonding`;

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
