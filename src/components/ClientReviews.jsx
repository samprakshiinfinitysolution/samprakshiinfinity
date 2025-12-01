import React, { useEffect, useState, useRef } from 'react';
import { BASE_URL } from '../constants/urls';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

// Star rating input with single click = full star, double click = half star
const StarInput = ({ rating, onChange }) => {
  const lastClick = useRef({});

  return (
    <div className="flex gap-1 justify-center">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          type="button"
          aria-label={`Rate ${num} star${num > 1 ? 's' : ''}`}
          className={`transition-all duration-200 text-3xl ${
            rating >= num ? 'text-yellow-400 scale-110 drop-shadow-lg' : rating >= num - 0.5 ? 'text-yellow-400/80' : 'text-gray-300'
          }`}
          onClick={() => {
            const now = Date.now();
            if (
              lastClick.current[num] &&
              now - lastClick.current[num] < 300 // 300ms for double click
            ) {
              onChange(num - 0.5);
              lastClick.current[num] = 0;
            } else {
              onChange(num);
              lastClick.current[num] = now;
            }
          }}
        >
          {/* Show half star if needed */}
          {rating >= num ? (
            <Star className="w-7 h-7 fill-current" fill="currentColor" />
          ) : rating >= num - 0.5 ? (
            <span className="relative w-7 h-7 inline-block">
              <Star className="w-7 h-7 fill-current absolute left-0 top-0 text-yellow-400" fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              <Star className="w-7 h-7 absolute left-0 top-0 text-gray-300" />
            </span>
          ) : (
            <Star className="w-7 h-7 fill-current" fill="none" />
          )}
        </button>
      ))}
    </div>
  );
};

// Review card with half star display
const ReviewCard = ({ review }) => (
  <div className="bg-white/80 border border-gray-200 rounded-2xl shadow-xl p-6 min-w-[320px] max-w-xs mx-2 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all">
  <div className="w-14 h-14 rounded-full bg-linear-to-tr from-indigo-500 to-blue-400 flex items-center justify-center mb-3 shadow-lg border-2 border-white">
      <span className="text-white text-2xl font-bold">{review.name?.charAt(0).toUpperCase() || 'U'}</span>
    </div>
    <h4 className="font-semibold text-gray-900 text-base mb-1">{review.name}</h4>
    <div className="flex gap-0.5 mb-2">
      {[1, 2, 3, 4, 5].map((i) => {
        if (review.rating >= i) {
          // Full star
          return (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-yellow-400"
            />
          );
        } else if (review.rating >= i - 0.5) {
          // Half star
          return (
            <span key={i} className="relative w-5 h-5">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 absolute left-0 top-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              <Star className="w-5 h-5 text-gray-300 absolute left-0 top-0" />
            </span>
          );
        } else {
          // Empty star
          return (
            <Star
              key={i}
              className="w-5 h-5 text-gray-300"
            />
          );
        }
      })}
    </div>
    <p className="text-gray-700 text-sm text-center leading-relaxed font-medium">
      {review.feedback.length > 120 ? review.feedback.slice(0, 120) + '...' : review.feedback}
    </p>
  </div>
);

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', rating: 0, feedback: '' });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const sliderRef = useRef();

  // Fetch reviews with pagination
  useEffect(() => {
    setReviews([]);
    setPage(1);
    setHasMore(true);
    setLoading(true);
    fetchReviews(1, true);
    
    // eslint-disable-next-line
  }, []);

  const fetchReviews = async (pageNum = 1, reset = false) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/reviews?page=${pageNum}&limit=10`);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setReviews((prev) => (reset ? data : [...prev, ...data]));
        setHasMore(data.length === 10);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Infinite scroll for horizontal slider
  useEffect(() => {
    const handleScroll = () => {
      const el = sliderRef.current;
      if (!el || !hasMore || loading) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 100) {
        setPage((prev) => prev + 1);
      }
    };
    const el = sliderRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [hasMore, loading]);

  useEffect(() => {
    if (page > 1 && hasMore) fetchReviews(page);
    // eslint-disable-next-line
  }, [page]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!form.name.trim() || !form.feedback.trim() || form.rating < 0.5) return;
  try {
    const res = await fetch(`${BASE_URL}/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ name: '', rating: 0, feedback: '' });
      setShowModal(false);
      setPage(1);
      fetchReviews(1, true);
      // Show thank you message, then redirect
      setTimeout(() => {
        window.location.href = 'https://g.page/r/CVJwOC-JOM_UEAE/review';
      }, 1200);
      alert('Thank you for your review! Please consider leaving a public review on Google.');
    } else {
      alert('Failed to submit.');
    }
  } catch (err) {
    alert('Network error.');
  }
};
  // Always show reviews section (no button)
  return (
  <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 py-20 px-2 md:px-8 min-h-[60vh] flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-black text-gray-900 mb-12 tracking-tight"
      >
  <span className="inline-block bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
          What Our Clients Say
        </span>
      </motion.h2>
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x scroll-smooth no-scrollbar py-4 px-2 w-full"
        style={{ scrollBehavior: 'smooth', minHeight: 220 }}
      >
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        {reviews.length === 0 && !loading && (
          <div className="w-full flex justify-center items-center py-12">
            <p className="text-gray-400 italic text-base">No reviews yet.</p>
          </div>
        )}
        {reviews.map((r, i) => (
          <ReviewCard review={r} key={i} />
        ))}
        {loading && (
          <div className="w-full flex justify-center items-center py-12">
            <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></span>
          </div>
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowModal(true)}
          className="px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-semibold shadow-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-base"
        >
          ✍️ Leave a Review
        </motion.button>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white/95 border border-gray-200 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close Review Form"
                className="absolute top-4 right-5 text-gray-400 hover:text-red-500 text-3xl font-bold focus:outline-none"
              >
                &times;
              </button>
              <h3 className="text-xl font-extrabold mb-6 text-center text-gray-900 tracking-wide">
                Share Your Review
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 bg-white/80"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Your Feedback"
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 resize-y min-h-[70px] bg-white/80"
                  rows="3"
                  value={form.feedback}
                  onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                  required
                />
                <div className="text-center">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Your Rating</label>
                  <StarInput rating={form.rating} onChange={(r) => setForm({ ...form, rating: r })} />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-base"
                  disabled={form.rating < 0.5}
                >
                  ✅ Submit Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClientReviews;