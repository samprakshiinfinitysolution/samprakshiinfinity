// import React, { useState } from "react";
// import axios from "axios";

// export default function SubmitReviewPopup() {
//     const [showModal, setShowModal] = useState(true); // auto-open
//     const [form, setForm] = useState({ name: "", rating: 0, feedback: "" });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post("/api/reviews", { ...form });
//         alert("Review submitted for approval!");
//         setShowModal(false);
//         setForm({ name: "", rating: 0, feedback: "" });
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white w-full max-w-md rounded-lg p-6 relative shadow-lg">
//                         <button
//                             onClick={() => setShowModal(false)}
//                             className="absolute top-2 right-3 text-gray-600 text-xl"
//                         >
//                             &times;
//                         </button>

//                         <form onSubmit={handleSubmit} className="space-y-4">
//                             <h2 className="text-xl font-semibold text-center mb-2">
//                                 Submit Your Review
//                             </h2>
//                             <input
//                                 type="text"
//                                 placeholder="Your Name"
//                                 className="w-full border px-3 py-2 rounded"
//                                 value={form.name}
//                                 onChange={(e) =>
//                                     setForm({ ...form, name: e.target.value })
//                                 }
//                                 required
//                             />
//                             <textarea
//                                 placeholder="Your Feedback"
//                                 className="w-full border px-3 py-2 rounded"
//                                 value={form.feedback}
//                                 onChange={(e) =>
//                                     setForm({
//                                         ...form,
//                                         feedback: e.target.value,
//                                     })
//                                 }
//                                 required
//                             />
//                             <select
//                                 value={form.rating}
//                                 onChange={(e) =>
//                                     setForm({
//                                         ...form,
//                                         rating: parseInt(e.target.value),
//                                     })
//                                 }
//                                 className="w-full border px-3 py-2 rounded"
//                                 required
//                             >
//                                 <option value="">Select Rating</option>
//                                 {[1, 2, 3, 4, 5].map((r) => (
//                                     <option key={r} value={r}>
//                                         {r} Star{r > 1 ? "s" : ""}
//                                     </option>
//                                 ))}
//                             </select>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-600 text-white py-2 rounded"
//                             >
//                                 Submit Review
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
