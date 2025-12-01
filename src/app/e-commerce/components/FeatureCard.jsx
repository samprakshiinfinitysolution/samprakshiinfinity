import React from 'react';

export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-5 bg-white rounded-lg shadow-sm flex gap-4">
      <div className="flex items-start">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
