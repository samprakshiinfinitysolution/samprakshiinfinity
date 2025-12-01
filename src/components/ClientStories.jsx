import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import clientImage from "../images/ourclientbg.jpg"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Amit Verma",
    position: "CEO, VermaTech",
    story: "Samprakshi Infinity Solution helped us launch our product in record time with flawless design and development.",
    image: clientImage,
    rating: 5,
  },
  {
    name: "Priya Singh",
    position: "Marketing Head, BrightWave",
    story: "Their digital marketing team drove 200% more leads in just 2 months. Exceptional work!",
    image: clientImage,
    rating: 4,
  },
  {
    name: "John Martin",
    position: "Founder, SmartWare",
    story: "Working with Samprakshi Infinity Solution was a smooth experience — clear communication and expert delivery.",
    image: clientImage,
    rating: 5,
  },
  {
    name: "Ashish Sharma",
    position: "Founder, Shri Jyotish",
    story: "Samprakshi Infinity Solution played a crucial role in enhancing our workflows. Their team was professional and transparent.",
    image: clientImage,
    rating: 5,
  },
];

const settings = {
  dots: false,

  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  // pauseOnHover: true,
  speed: 500,
  arrows: false,
  draggable: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const ClientStories = () => {
  return (
    <section
    className="mt-20"
  >
    <div className="bg-[url('/ourclientbg2.jpg')]  bg-cover bg-center bg-no-repeat bg-white/80 backdrop-blur-sm max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
        Stories From Our Clients
      </h2>
  
      <Slider {...settings}>
        {testimonials.map((client, idx) => (
          <div key={idx} className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative p-[6px] border-2 border-[#046AC8] rounded-xl group hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300" >
                <div className="bg-white backdrop-blur-xl rounded-xl h-full p-8 overflow-hidden">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <p className="text-gray-700 text-base italic leading-relaxed">
                      “{client.story}”
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#2B7BF4] transition">
                        {client.name}
                      </h4>
                      <p className="text-sm text-[#2B7BF4]">{client.position}</p>
                      <div className="flex justify-center mt-2">
                        {Array.from({ length: client.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  );
};

export default ClientStories;
