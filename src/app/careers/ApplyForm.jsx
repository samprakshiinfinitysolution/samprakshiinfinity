"use client";
import React, { useState } from 'react';

export default function ApplyForm({ job, onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cover, setCover] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState(null);
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  function handleFile(e) {
    const file = e.target.files && e.target.files[0];
    if (file) setResumeFile(file);
  }

  function handleFileWithValidation(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return setResumeFile(null);
    if (file.size > MAX_FILE_SIZE) {
      setStatus({ type: 'error', message: 'Resume is too large. Max 5MB.' });
      e.target.value = '';
      return setResumeFile(null);
    }
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (file.type && !allowedTypes.includes(file.type)) {
      // allow by extension as fallback
      const ext = (file.name || '').split('.').pop()?.toLowerCase() || '';
      if (!['pdf', 'doc', 'docx'].includes(ext)) {
        setStatus({ type: 'error', message: 'Resume must be a PDF or DOC/DOCX file.' });
        e.target.value = '';
        return setResumeFile(null);
      }
    }
    setStatus(null);
    setResumeFile(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status?.type === 'pending') return; // prevent double submit
    if (!name || !email) {
      setStatus({ type: 'error', message: 'Please provide name and email.' });
      return;
    }

    // basic client-side email sanity check
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!emailOk) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('cover', cover || '');
    formData.append('jobId', job?.id ?? '');
  if (resumeFile) formData.append('resume', resumeFile);

  setStatus({ type: 'pending', message: 'Submitting application...' });

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: formData });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        setStatus({ type: 'error', message: err.message || 'Submission failed' });
        return;
      }

      const json = await res.json();
  setStatus({ type: 'success', message: json.message || 'Application submitted. We will be in touch!' });
      setName('');
      setEmail('');
      setCover('');
  setResumeFile(null);
      if (typeof onSuccess === 'function') onSuccess();
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Network error' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block" htmlFor="app-name">
          <span className="text-sm text-gray-700">Full name</span>
          <input
            id="app-name"
            name="name"
            className="mt-1 block w-full p-2 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
          />
        </label>
        <label className="block" htmlFor="app-email">
          <span className="text-sm text-gray-700">Email</span>
          <input
            id="app-email"
            name="email"
            type="email"
            className="mt-1 block w-full p-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-gray-700">Short message / cover letter</span>
        <textarea
          className="mt-1 block w-full p-2 border rounded-md min-h-[100px]"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          placeholder="Tell us why you'd be a great fit (optional)"
        />
      </label>

      <label className="block" htmlFor="app-resume">
        <span className="text-sm text-gray-700">Resume (PDF or DOC)</span>
        <input id="app-resume" name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFileWithValidation} className="mt-1" aria-describedby="resume-help" />
        {resumeFile && <p className="text-xs text-gray-500 mt-1">Selected: {resumeFile.name}</p>}
        <p id="resume-help" className="text-xs text-gray-400 mt-1">Max file size: 5MB. Accepted: PDF, DOC, DOCX.</p>
      </label>

      <div className="flex items-center justify-between">
        <button type="submit" disabled={status?.type === 'pending'} className="bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition">
          {status?.type === 'pending' ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>

      {status && (
        <div role="status" aria-live="polite" className={`p-3 rounded-md ${status.type === 'error' ? 'bg-red-100 text-red-800' : status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {status.message}
        </div>
      )}
    </form>
  );
}
