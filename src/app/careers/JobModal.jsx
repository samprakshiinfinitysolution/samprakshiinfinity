"use client";
import React from 'react';
import ApplyForm from './ApplyForm';
import Link from 'next/link';

export default function JobModal({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-xl shadow-2xl overflow-auto max-h-[90vh]">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{job.department} • {job.location} • {job.type}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/careers/${job.id}`} className="text-sm text-blue-600 hover:underline">View full details</Link>
              <button
                onClick={onClose}
                aria-label="Close"
                className="ml-2 inline-flex items-center justify-center h-9 w-9 rounded-full text-gray-600 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="mt-6 text-gray-700">
            <p>
              We are hiring for the role above. Use the form below to apply — attach a resume and a short message and we will review your application.
            </p>
          </div>

          <div className="mt-6">
            <ApplyForm job={job} onSuccess={() => { /* keep modal open so user reads confirmation */ }} />
          </div>
        </div>
      </div>
    </div>
  );
}
