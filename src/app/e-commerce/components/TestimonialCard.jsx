import React from 'react';

export default function TestimonialCard({ initials, name, role, text }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex-none w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 grid place-items-center font-semibold">{initials}</div>
        <div>
          <div className="text-sm font-medium">{name}{role ? `, ${role}` : ''}</div>
          <div className="mt-2 text-gray-600 text-sm">{text}</div>
        </div>
      </div>
    </div>
  );
}
