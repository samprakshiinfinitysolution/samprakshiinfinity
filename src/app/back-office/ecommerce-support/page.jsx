// Server wrapper: exports metadata and renders the client component
export const metadata = {
  title: 'Ecommerce Support — Samprakshi Infinity Solution',
  description: 'End-to-end ecommerce operations: listings, pricing, returns, and account management to keep your marketplaces converting and compliant.',
  openGraph: {
    title: 'Ecommerce Support — Samprakshi Infinity Solution',
    description: 'End-to-end ecommerce operations and marketplace support: listing optimization, pricing, returns, and account health.',
    url: 'https://samprakshiinfinitysolution.com/back-office/ecommerce-support',
    siteName: 'Samprakshi Infinity Solution',
  }
}

import EcommerceSupportClient from './EcommerceSupportClient'

export default function EcommerceSupportPage() {
  return <EcommerceSupportClient />
}

