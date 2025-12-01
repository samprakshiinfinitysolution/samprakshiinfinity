// import { Helmet } from "react-helmet";
// import React, { useState } from "react";
// import "./SecondSection.css";

// import ai from "../../images/coding_11184180.gif";

// import iot from "../../images/technological_17556503.gif";

// import dm from "../../images/social-marketing_17675700.gif";

// import office from "../../images/work-table_16677971.gif";

// import phone from "../../images/mobile-phone_17122604.gif";

// import coding from "../../images/icons8-web-design.gif";
// import laptop from "../../assets/laptop.png";

// const dummyData = [
//     {
//         id: 1,
//         imgSrc: coding,
//         title: "Web Development Services",
//         para: "Boost your online presence with innovative web development solutions. At Infinity Solution, we specialize in creating responsive, dynamic, and user-friendly websites that connect your business with its target audience. Our web development strategies are tailored to help brands of all sizes gain a competitive edge in today’s digital landscape.",
//     },
//     {
//         id: 2,
//         imgSrc: iot,
//         title: "IoT Solutions for Businesses",
//         para: "Unlock the power of the Internet of Things (IoT) with cutting-edge solutions designed to optimize your business processes. At Infinity Solution, we help you implement IoT technology to streamline operations, enhance connectivity, and drive efficiency. Prepare your business for the future with our IoT solutions and stay ahead as an industry leader.",
//     },
//     {
//         id: 3,
//         imgSrc: ai,
//         title: "Artificial Intelligence & Machine Learning",
//         para: "Automate your business operations with AI and machine learning solutions. Infinity Solution provides intelligent systems that optimize processes, minimize errors, and provide valuable data insights. Our AI services help you improve business efficiency and decision-making, delivering custom solutions for your unique organizational needs.",
//     },
//     {
//         id: 4,
//         imgSrc: dm,
//         title: "Digital Marketing Services",
//         para: "Increase your brand’s visibility and engagement with powerful, results-driven digital marketing strategies. Our team of experts uses advanced tools and techniques to develop and execute SEO, SEM, social media campaigns, and more. We position your brand to resonate with your audience and drive measurable growth through digital marketing excellence.",
//     },
//     {
//         id: 5,
//         imgSrc: office,
//         title: "Back Office Support Services",
//         para: "Streamline your operations with comprehensive back office services. Infinity Solution offers professional support, including data entry, virtual assistance, and administrative services, allowing you to focus on core business activities. Our tailored solutions ensure efficiency and relieve you from time-consuming tasks.",
//     },
//     {
//         id: 6,
//         imgSrc: phone,
//         title: "Mobile App Design & Development",
//         para: "Create dynamic, feature-rich mobile apps with Infinity Solution. Our mobile app development team delivers custom solutions for both iOS and Android platforms, designed to enhance user experience and drive brand loyalty. Let us bring your app idea to life with intuitive design and seamless functionality across all devices.",
//     },
// ];

// function SecondSection() {
//     const [selectedData, setSelectedData] = useState({
//         title: dummyData[0].title,
//         para: dummyData[0].para,
//     });

//     return (
//         <div className="secondSection">
//             <Helmet>
//                 <title>{selectedData.title} - Infinity Solution</title>
//                 <meta name="description" content={selectedData.para} />
//                 <meta name="robots" content="index, follow" />
//                 <meta property="og:title" content={selectedData.title} />
//                 <meta property="og:description" content={selectedData.para} />
//                 <meta property="og:image" content={laptop} />
//                 <meta
//                     property="og:url"
//                     content="https://www.infinitysolution.org"
//                 />
//                 <meta
//                     name="keywords"
//                     content="web development, IOT solutions, artificial intelligence, mobile app development, digital marketing, back office services"
//                 />
//                 <meta name="author" content="Infinity Solution" />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:site_name" content="Infinity Solution" />
//                 <meta property="og:locale" content="en_US" />
//                 <meta
//                     property="og:image:alt"
//                     content="Infinity Solution Services"
//                 />
//                 <meta property="og:image:type" content="image/png" />
//                 <meta property="og:image:width" content="1200" />
//                 <meta property="og:image:height" content="630" />
//             </Helmet>
//             <div className="secondSection-container">
//                 <div className="secondSection-left-wrapper">
//                     <div className="secondSection-cards">
//                         {dummyData.map((item) => (
//                             <div
//                                 className="secondSection-card"
//                                 key={item.id}
//                                 onClick={() =>
//                                     setSelectedData({
//                                         title: item.title,
//                                         para: item.para,
//                                     })
//                                 } // Update title & para
//                             >
//                                 <img
//                                     className="secondSection-icon"
//                                     src={item.imgSrc}
//                                     alt={item.title}
//                                 />
//                                 <h3 className="secondSection-card-h3">
//                                     {item.title}
//                                 </h3>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="secondSection-right-wrapper">
//                     <div className="secondSection-hover">
//                         <div className="image-container">
//                             <img className="device" src={laptop} alt="Laptop" />
//                             <div className="secondSection-screen">
//                                 <h3 className="laptop-h5">
//                                     {selectedData.title}
//                                 </h3>{" "}
//                                 {/* Display selected title */}
//                                 <div className="secondSection-underline"></div>
//                                 <p className="laptop-p">
//                                     {selectedData.para}
//                                 </p>{" "}
//                                 {/* Display selected paragraph */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SecondSection;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     id: 1,
//     title: "Custom Software Development",
//     description: "We engineer scalable, secure, and custom software tailored to your business.",
//     color: "#6366F1", // Indigo
//   },
//   {
//     id: 2,
//     title: "Cloud Infrastructure & DevOps",
//     description: "Optimize your operations with cloud-native architecture and automation.",
//     color: "#EC4899", // Pink
//   },
//   {
//     id: 3,
//     title: "AI & Data Analytics",
//     description: "Turn data into actionable insights using machine learning & AI solutions.",
//     color: "#F59E0B", // Amber
//   },
//   {
//     id: 4,
//     title: "Cybersecurity Solutions",
//     description: "Protect your systems with proactive threat detection and compliance.",
//     color: "#10B981", // Emerald
//   },
//   {
//     id: 5,
//     title: "Mobile App Development",
//     description: "Build beautiful mobile experiences on both Android and iOS platforms.",
//     color: "#3B82F6", // Blue
//   },
//   {
//     id: 6,
//     title: "IT Strategy & Consulting",
//     description: "Bridge tech with business goals to maximize innovation and ROI.",
//     color: "#EF4444", // Red
//   },
// ];

// const typingTexts = [
//   "Secure. Scalable. Smart.",
//   "Cloud-Native to AI-Driven.",
//   "We Build the Future of Tech.",
// ];

// export default function ModernAnimatedServices() {
//   const [textIndex, setTextIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const fullText = typingTexts[textIndex];
//       if (charIndex < fullText.length) {
//         setDisplayText((prev) => prev + fullText[charIndex]);
//         setCharIndex((prev) => prev + 1);
//       } else {
//         setTimeout(() => {
//           setCharIndex(0);
//           setDisplayText("");
//           setTextIndex((prev) => (prev + 1) % typingTexts.length);
//         }, 2000);
//       }
//     }, 60);

//     return () => clearInterval(interval);
//   }, [charIndex, textIndex]);

//   return (
//     <section className="min-h-screen bg-white text-gray-800 px-6 py-20 md:px-20 lg:px-32 font-sans overflow-hidden">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient-slide"
//         >
//           Empower Your Business with IT Innovation
//         </motion.h1>
//         <motion.p
//           key={displayText}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-lg md:text-xl text-gray-600 font-medium h-8"
//         >
//           {displayText}
//           <span className="animate-pulse text-indigo-500">|</span>
//         </motion.p>
//       </div>

//       {/* Service Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {services.map((service, index) => (
//           <motion.div
//             key={service.id}
//             initial={{ opacity: 0, scale: 0.95, y: 30 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.15, type: "spring", stiffness: 70 }}
//             className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
//             style={{ borderTop: `4px solid ${service.color}` }}
//           >
//             <h2 className="text-xl font-bold mb-3" style={{ color: service.color }}>
//               {service.title}
//             </h2>
//             <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
//             <button
//               className="px-5 py-2 text-sm font-medium rounded-full text-white hover:opacity-90"
//               style={{
//                 backgroundColor: service.color,
//                 boxShadow: `0 0 10px ${service.color}55`,
//               }}
//             >
//               Learn More
//             </button>
//           </motion.div>
//         ))}
//       </div>

//       {/* Gradient Animation CSS */}
//       <style>{`
//         @keyframes gradient-slide {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient-slide {
//           background-size: 200% 200%;
//           animation: gradient-slide 5s ease infinite;
//         }
//       `}</style>
//     </section>
//   );
// }




import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "We engineer scalable, secure, and custom software tailored to your business.",
    color: "#2478E7", // Theme blue
  },
  {
    id: 2,
    title: "Cloud Infrastructure & DevOps",
    description: "Optimize your operations with cloud-native architecture and automation.",
    color: "#2478E7",
  },
  {
    id: 3,
    title: "AI & Data Analytics",
    description: "Turn data into actionable insights using machine learning & AI solutions.",
    color: "#2478E7",
  },
  {
    id: 4,
    title: "Cybersecurity Solutions",
    description: "Protect your systems with proactive threat detection and compliance.",
    color: "#2478E7",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build beautiful mobile experiences on both Android and iOS platforms.",
    color: "#2478E7",
  },
  {
    id: 6,
    title: "IT Strategy & Consulting",
    description: "Bridge tech with business goals to maximize innovation and ROI.",
    color: "#2478E7",
  },
];

const typingTexts = [
  "Secure. Scalable. Smart.",
  "Cloud-Native to AI-Driven.",
  "We Build the Future of Tech.",
];

export default function ModernAnimatedServices() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const fullText = typingTexts[textIndex];
      if (charIndex < fullText.length) {
        setDisplayText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setDisplayText("");
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }, 2000);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [charIndex, textIndex]);

  return (
    <section className="min-h-screen bg-white text-gray-900 px-6 py-20 md:px-20 lg:px-32 font-sans overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          style={{
            background:
              "linear-gradient(90deg, #2478E7 0%, #2C82E0 50%, #3B8AE3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Empower Your Business with IT Innovation
        </motion.h1>
        <motion.p
          key={displayText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl font-medium h-8"
        >
          {displayText}
          <span className="animate-pulse" style={{ color: "#2478E7" }}>
            |
          </span>
        </motion.p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 70 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
            style={{ borderTop: `4px solid ${service.color}` }}
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: service.color }}
            >
              {service.title}
            </h2>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              {service.description}
            </p>
            <button
              className="px-5 py-2 text-sm font-medium rounded-full text-white hover:opacity-90"
              style={{
                backgroundColor: service.color,
                boxShadow: `0 0 10px ${service.color}55`,
              }}
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
