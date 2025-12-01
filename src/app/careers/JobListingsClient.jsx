"use client";
import React, { useMemo, useState } from 'react';
import JobModal from './JobModal';
import Link from 'next/link';

export default function JobListingsClient({ jobs = [] }) {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('All');
  const [selected, setSelected] = useState(null);

  function slugify(text = '') {
    return String(text).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  const departments = useMemo(() => {
    const setS = new Set(jobs.map((j) => j.department));
    return ['All', ...Array.from(setS)];
  }, [jobs]);

  const filtered = jobs.filter((j) => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || j.title.toLowerCase().includes(q) || (j.location || '').toLowerCase().includes(q);
    const matchesDept = department === 'All' || j.department === department;
    return matchesQuery && matchesDept;
  });

  return (
    <section id="openings" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">Current <span className="text-blue-700">Openings</span></h2>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search job title or keyword..."
            aria-label="Search job title or keyword"
            className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition bg-white"
          >
            {departments.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div role="list" className="space-y-6">
          {filtered.map((job) => {
            return (
              <article key={job.id} role="listitem" aria-labelledby={`job-${job.id}-title`} className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="md:flex md:justify-between md:items-start">
                  <div>
                    <h3 id={`job-${job.id}-title`} className="text-xl font-bold text-gray-900">
                      <Link href={`/careers/${job.id}`} className="hover:text-blue-600">{job.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{job.department} • {job.location} • {job.type} • {job.seniority}</p>
                    {job.salary && <p className="text-sm text-gray-700 mt-2 font-medium">{job.salary}</p>}
                    {job.description && <p className="text-sm text-gray-600 mt-3">{job.description}</p>}
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <Link href={`/careers/${slugify(job.title)}`} className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-50 transition">View Details</Link>
                      <Link href={`/careers/${slugify(job.title)}#apply`} className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">Apply Now</Link>
                      <button type="button" onClick={() => setSelected(job)} className="inline-block bg-gray-100 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-200 transition">Quick Apply</button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <div className="p-8 text-center bg-gray-100 rounded-xl">
              <p className="text-lg text-gray-700">No positions match your filter.</p>
            </div>
          )}
        </div>

      {selected && <JobModal job={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
}
