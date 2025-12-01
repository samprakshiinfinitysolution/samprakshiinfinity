import React from 'react';

const SITE_NAME = 'Samprakshi Infinity Solution';
const SITE_URL = 'https://samprakshiinfinitysolution.com';
const DEFAULT_TITLE = 'Samprakshi Infinity Solution — Omnichannel E‑Commerce & Quick Commerce';
const DEFAULT_DESCRIPTION = 'We help brands and sellers scale across Marketplaces, D2C stores and Quick Commerce platforms with end-to-end operations, catalog optimization and performance marketing.';

export default function Seo({ title, description, image }) {
  const metaTitle = title || DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const metaImage = image || `${SITE_URL}/og-image.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`
  };

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="theme-color" content="#0E57B8" />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <link rel="canonical" href={SITE_URL} />
      <link rel="sitemap" type="application/xml" href={`${SITE_URL}/sitemap.xml`} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
