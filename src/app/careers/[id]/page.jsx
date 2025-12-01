import React from 'react';
// use a plain <img> here to avoid next/image remote-domain issues that can break rendering
import ApplyForm from '../ApplyForm';
import { JOB_LISTINGS } from '../data';

export const metadata = {
  title: 'Job — Details',
};

export default function JobDetailPage({ params }) {
  const idParam = params.id;

  // slugify helper: make a stable slug from title (used for friendly URLs)
  function slugify(text = '') {
    return String(text)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  // Try several matching strategies so both numeric IDs and slug/title URLs work.
  const cleanedParam = typeof idParam === 'string' ? decodeURIComponent(idParam).trim() : String(idParam);
  const asNumber = Number(cleanedParam);

  const job = JOB_LISTINGS.find((j) => {
    // direct numeric match (id may be number)
    if (!Number.isNaN(asNumber) && Number(j.id) === asNumber) return true;
    // string match of id
    if (String(j.id) === cleanedParam) return true;
    // slugified title match
    if (slugify(j.title) === cleanedParam) return true;
    // allow matching by title substring as a last resort (case-insensitive)
    if (typeof cleanedParam === 'string' && j.title.toLowerCase().includes(cleanedParam.toLowerCase())) return true;
    return false;
  });

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Job not found</h2>
          <p className="text-gray-600 mt-2">The job you are looking for may have been filled or removed.</p>
        </div>
      </div>
    );
  }

  // Use structured job fields when available
  const responsibilities = job.responsibilities || [];
  const qualifications = job.requirements || [];
  const niceToHave = job.niceToHave || [];
  const offers = job.perks || [];

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <nav className="text-sm text-gray-500 mb-2">
                <a href="/careers" className="hover:underline">Careers</a>
                <span className="mx-2">/</span>
                <span className="text-gray-700">{job.title}</span>
              </nav>
              <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
              <p className="text-sm text-gray-600 mt-1">{job.department} • {job.location} • {job.type} • {job.seniority} • <span className="font-medium">{job.salary}</span></p>
              {job.postedAt && <p className="text-xs text-gray-500 mt-1">Posted: {job.postedAt}</p>}
            </div>
            <div className="mt-4 md:mt-0 w-full md:w-56 h-40 rounded-xl overflow-hidden">
              <img src="https://placehold.co/600x400/3B82F6/ffffff?text=Join+Our+Team" alt="job" width="600" height="400" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About the role</h3>
              <p className="text-gray-700">This role will work closely with cross-functional teams to design and implement products that delight customers. You&apos;ll be empowered to make technical decisions and own projects end-to-end.</p>

              <h4 className="text-md font-semibold text-gray-900 mt-6 mb-2">Responsibilities</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>

              <h4 className="text-md font-semibold text-gray-900 mt-6 mb-2">Requirements</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {qualifications.map((q, i) => <li key={i}>{q}</li>)}
              </ul>

              <h4 className="text-md font-semibold text-gray-900 mt-6 mb-2">Nice to have</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {niceToHave.map((n, i) => <li key={i}>{n}</li>)}
              </ul>

              <h4 className="text-md font-semibold text-gray-900 mt-6 mb-2">What we offer</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {offers.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply for this role</h3>
                <a href="#apply" className="text-sm bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">Apply</a>
              </div>
              <div id="apply" className="bg-gray-50 p-4 rounded-lg">
                <ApplyForm job={job} onSuccess={() => { /* could redirect or show message */ }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
