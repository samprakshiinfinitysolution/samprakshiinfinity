"use client";
import React from "react";
import Link from "next/link";

const RefundPolicy = () => {
  return (
    <main className="min-h-screen mt-16 py-12 px-6 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary">Refund Policy</h1>

        <p className="mb-4">Thank you for choosing Samprakshi Infinity Solution. We strive to provide top-notch services to our valued customers. Please read this refund policy carefully before making any purchases.</p>

        <h2 className="text-2xl font-semibold text-brand-deep mt-6 mb-2">No Refund Policy</h2>
        <p className="mb-4">At Samprakshi Infinity Solution, we do not offer refunds for most services. Once a service has been purchased, it is considered final. We evaluate exceptional cases on a case-by-case basis.</p>

        <h2 className="text-2xl font-semibold text-brand-deep mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">If you have concerns or believe your case warrants a review, please contact our support team and provide your order details. We will investigate and respond with next steps.</p>

        <h2 className="text-2xl font-semibold text-brand-deep mt-6 mb-2">Policy Updates</h2>
        <p className="mb-4">Samprakshi Infinity Solution reserves the right to update or modify this refund policy at any time without prior notice. Changes are effective upon posting.</p>

        <p className="mt-6">By using our services, you agree to the terms outlined in this refund policy.</p>

        <div className="mt-8">
          <Link href="/contact-us" className="text-brand-primary underline">Contact us</Link> to request a review.
        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;
