

import AppDevelopmentClient from "./AppDevelopmentClient";

export const metadata = {
  title: "Mobile & App Development Services - Samprakshi Infinity Solution",
  description:
    "We build fast, maintainable, and secure mobile applications tailored to your audience. From native apps to cross-platform solutions, we focus on performance and delightful user experience.",
  keywords: [
    "mobile app development",
    "ios app development",
    "android app development",
    "react native",
    "flutter",
    "wearable apps",
    "top trending: mobile app developer jobs",
  ],
  alternates: {
    canonical: "https://www.samprakshiinfinitysolution.com/app-development",
  },
  openGraph: {
    title: "Mobile & App Development Services - Samprakshi Infinity Solution",
    description:
      "We build fast, maintainable, and secure mobile applications tailored to your audience. From native apps to cross-platform solutions, we focus on performance and delightful user experience.",
    url: "https://www.samprakshiinfinitysolution.com/app-development",
    siteName: "Samprakshi Infinity Solution",
    images: [
      {
        url: "https://www.samprakshiinfinitysolution.com/assets/ANDROIDAPP.png",
        width: 1200,
        height: 630,
        alt: "Mobile app services",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function Page() {
  return <AppDevelopmentClient />;
}
