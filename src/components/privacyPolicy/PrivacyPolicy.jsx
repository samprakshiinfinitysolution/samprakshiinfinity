import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-20 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
        Privacy Policy
      </h1>

      <p className="mb-6 text-base sm:text-lg">
        Samprakshi Infinity Solution respects and values the privacy of clients and
        visitors to our website. We ensure a safe online experience for all
        users. This Privacy Policy explains how we collect, use, and safeguard
        your personal information.
      </p>

      {/* Information Collection */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Information Collection
        </h2>

        <h3 className="text-xl font-medium mb-2 text-blue-600">Personally Identifiable Information:</h3>
        <p className="mb-4 text-base">
          We do not collect personal information unless you voluntarily submit
          it via forms or queries. This may include your name, email address,
          and contact number.
        </p>

        <h3 className="text-xl font-medium mb-2 text-blue-600">Non-Personally Identifiable Information:</h3>
        <p className="text-base">
          We may collect device-related data like browser type, IP address,
          location, time zone, web pages visited, and interaction data.
        </p>
      </section>

      {/* Use of Personal Info */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          How Do We Use Your Personal Information?
        </h2>
        <p className="mb-4 text-base">
          Your information is only shared with third parties for legitimate
          purposes, such as:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4 text-base">
          <li>Providing services or responding to your queries</li>
          <li>Using Google Analytics to analyze traffic and usage</li>
          <li>Complying with legal obligations or court orders</li>
          <li>Preventing fraud or illegal activities</li>
          <li>Business transfers of assets or mergers</li>
        </ul>
        <p className="text-base">
          Credit/Debit card details are never disclosed by Samprakshi Infinity Solution and
          are handled according to the standards of Visa, MasterCard, Discover,
          Amex, and PayPal.
        </p>
      </section>

      {/* Ad Preferences */}
      <section className="mb-8">
        <p className="mb-4 text-base">
          Learn more or opt out of targeted advertising:
        </p>
        <ul className="space-y-2 text-blue-500 text-base">
          <li>
            <a
              href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Network Advertising Initiative
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/settings/?tab=ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Facebook Ad Preferences
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/settings/ads/anonymous"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Google Ad Preferences
            </a>
          </li>
          <li>
            <a
              href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Bing Ad Preferences
            </a>
          </li>
        </ul>
      </section>

      {/* GDPR */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Privacy Rights (GDPR)
        </h2>
        <p className="mb-4 text-base">
          If you are a resident of the European Economic Area (EEA), you may
          have specific rights under GDPR, including access, correction, update,
          or deletion of your personal data.
        </p>
        <p className="text-base">
          We comply with US and EU data protection laws and only transfer data
          outside Europe as required for your project.
        </p>
      </section>

      {/* Data Retention */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Data Retention
        </h2>
        <p className="text-base">
          We retain your form submissions until you request deletion. Contact us
          if you’d like us to remove your data.
        </p>
      </section>

      {/* Policy Updates */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Changes to this Privacy Policy
        </h2>
        <p className="text-base">
          We may update this policy from time to time. We recommend checking
          this page regularly. If you disagree with any part of the policy,
          please refrain from using our services.
        </p>
      </section>

      {/* Contact Info */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Contact Us
        </h2>
        <p className="text-base">
          If you have any questions regarding this Privacy Policy, feel free to
          contact us at:
        </p>
        <a
          href="mailto:info@samprakshiinfinitysolution.com"
          className="text-blue-500 underline text-base"
        >
          info@samprakshiinfinitysolution.com
        </a>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
