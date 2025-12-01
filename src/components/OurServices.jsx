"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// No CTA links required; keep component focused on services visuals

const services = [
  {
    title: "Artificial Intelligence",
    image:
      "https://i.pinimg.com/736x/8d/e9/ce/8de9ceb839c818ff1bffd03c4d3439f7.jpg",
    description:
      "Our AI specialists harness the power of cutting-edge technologies like machine learning, natural language processing, and computer vision to build intelligent systems. These solutions automate workflows, uncover insights from big data, and provide highly personalized user experiences — revolutionizing industries ranging from healthcare and finance to retail and logistics.",
  },
  {
    title: "Mobile App Development",
    image:
      "https://i.pinimg.com/736x/84/a1/65/84a16506795a06dee7df4bb618e126e2.jpg",
    description:
      "We create user-first mobile applications tailored for iOS, Android, and cross-platform ecosystems using the latest technologies like Flutter and React Native. From sleek UI designs to backend API integrations, our apps are designed to scale, perform seamlessly, and deliver impactful experiences that align with your business goals.",
  },
  {
    title: "Web App Development",
    image:
      "https://i.pinimg.com/736x/15/0b/52/150b52326f8c15a8641656f541e20a79.jpg",
    description:
      "Our web development experts specialize in building scalable, high-performance applications using modern frameworks like React, Next.js, and Node.js. Whether it's a customer portal, SaaS platform, or enterprise dashboard, we ensure your web app is robust, secure, and optimized for speed, SEO, and user engagement..",
  },
  {
    title: "UI / UX Design",
    image:
      "https://i.pinimg.com/736x/92/f4/8a/92f48afa4df07bb5284f8db08017e7b9.jpg",
    description:
      "We blend creativity with usability to craft interfaces that not only look stunning but also guide users effortlessly through every interaction. From wireframing and prototyping to motion design and design systems, our UI/UX solutions are human-centric, adaptive, and engineered for engagement across all devices.",
  },
  {
    title: "Digital Marketing",
    image:
      "https://i.pinimg.com/736x/d9/c7/98/d9c798c0bb47e6140a6db45b27ecaf0c.jpg",
    description:
      "Our digital marketing team drives growth through tailored campaigns spanning SEO, SEM, content strategy, email automation, and performance analytics. We help you build a strong digital footprint, attract high-quality leads, and convert traffic into loyal customers using data-driven tactics and creative storytelling.",
  },
];

export default function OurServices() {
  const [hovered, setHovered] = useState(null);
  const [isLarge, setIsLarge] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsLarge(!!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    // detect whether the input supports hover (mouse)
    const hoverMq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const onHoverChange = () => setHoverCapable(!!hoverMq.matches);
    onHoverChange();
    hoverMq.addEventListener?.('change', onHoverChange);

    return () => {
      mq.removeEventListener?.("change", onChange);
      hoverMq.removeEventListener?.('change', onHoverChange);
    };
  }, []);

  // tuned sizes for a cleaner UI (use responsive flex-basis instead of fixed px)
  const COMPACT_BASIS = "12%"; // compact (non-hovered) flex-basis
  const EXPANDED_BASIS = "40%"; // expanded (hovered) flex-basis
  const DESKTOP_H = "68vh";
  const MOBILE_H = "48vh"; 

  // adapt card height to current layout size
  const cardHeight = isLarge ? DESKTOP_H : MOBILE_H;

  return (
    <section className="bg-[#F4F4F5] relative min-h-screen py-16 flex items-center" aria-label="Our Services">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">

          {/* Left label: horizontal on small screens, vertical on md+; accessible heading retained */}
          <div className="w-full lg:w-[150px] flex items-start lg:items-center justify-center relative lg:h-[68vh]">
            <h2 id="services-heading" className="sr-only">Samprakshi Services</h2>

            {/* Mobile & Tablet: left-aligned; hide on lg+ */}
            <div className="block lg:hidden  w-full text-left mb-4 pl-4 sm:pl-6">
              <span className="flex  justify-center ">
                <span aria-hidden className="text-4xl font-extrabold text-brand-primary tracking-tight">SAMPRAKSHI <span className="flex justify-center">Services</span></span>
              </span>

              
            </div>

            {/* Desktop: rotated vertical inside the left column (show on lg+) */}
            <div className="hidden lg:flex absolute inset-y-0 left-0 items-center justify-center lg:justify-start lg:-left-20">
              <span aria-hidden className="inline-block text-2xl lg:text-3xl xl:text-6xl font-bold text-brand-primary tracking-tight transform -rotate-90 origin-center text-center leading-none lg:-translate-x-6">
                <span className="block">SAMPRAKSHI</span>
                <span className="block text-3xl lg:text-5xl">Services</span>
              </span>
            </div>
          </div>
        
          {/* Right: services */}
          <div className="flex-1">
            <div role="list" aria-labelledby="services-heading" className="flex lg:flex-row flex-col items-stretch gap-6 overflow-visible justify-center lg:justify-end lg:flex-nowrap flex-wrap">
              {services.map((s, i) => {
                const isHovered = hovered === i;

                // Mobile: normal stacked card (image on top, content below)
                if (!isLarge) {
                  return (
                    <div key={s.title} className="w-full rounded-2xl overflow-hidden shadow-sm bg-white">
                        <div className="relative w-full" style={{ height: MOBILE_H }}>
                          <Image src={s.image} alt={s.title} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-brand-primary">{s.title}</h3>
                          <p className="text-sm mt-2 text-gray-700">{s.description}</p>
                        </div>
                      </div>
                  );
                }

                // Desktop: background-card with expansion
                const height = cardHeight;
                // responsive basis for flex layout (percent-based)
                const basis = isHovered ? EXPANDED_BASIS : COMPACT_BASIS;

                const style = {
                  width: 'auto',
                  // when hovered, take a larger fixed portion; otherwise allow grow/shrink
                  flex: isHovered ? `0 0 ${EXPANDED_BASIS}` : `1 1 ${COMPACT_BASIS}`,
                  minWidth: isHovered ? '220px' : '80px',
                  maxWidth: isLarge ? '60%' : '100%',
                  height,
                  transformOrigin: "right center",
                  // subtle scale + stronger shadow when expanded to make state obvious
                  transform: isHovered ? "scale(1.02)" : "scale(1)",
                  boxShadow: isHovered ? "0 22px 56px rgba(2,6,23,0.45)" : "0 8px 20px rgba(2,6,23,0.08)",
                  borderRadius: "12px",
                  // unified transition per request: slower, smooth ease-out
                  willChange: "flex, transform, box-shadow, opacity",
                  transition: "all 300ms ease-out",
                };

                return (
                  <div
                    key={s.title}
                    role="listitem"
                    aria-describedby={`${s.title.replace(/\s+/g, "-").toLowerCase()}-desc`}
                    onMouseEnter={hoverCapable ? () => setHovered(i) : undefined}
                    onMouseLeave={hoverCapable ? () => setHovered(null) : undefined}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    onClick={!hoverCapable ? () => setHovered((prev) => (prev === i ? null : i)) : undefined}
                    className="group relative shrink-0 rounded-2xl overflow-hidden focus:outline-none service-transition"
                    style={style}
                  >
                    {/* image layer (separate so blur/filter doesn't affect content) */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${s.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: isHovered ? 'blur(6px) brightness(0.6)' : 'blur(0px) brightness(0.76)',
                        transition: 'filter 600ms ease-out, transform 600ms ease-out',
                        zIndex: 0,
                      }}
                      aria-hidden
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent pointer-events-none" style={{ zIndex: 1 }} />

                    <div className={`absolute inset-0 flex  flex-col p-6 ${isHovered ? 'justify-center items-center text-center ' : 'justify-start items-start text-center '}`} style={{ zIndex: 2 }}>
                      <h3 className="text-white text-lg lg:text-xl font-semibold">{s.title}</h3>
                      <p
                        id={`${s.title.replace(/\s+/g, "-").toLowerCase()}-desc`}
                        className={`text-white text-sm mt-2 hidden lg:block`}
                        style={{
                          willChange: 'opacity, transform',
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                          transition: 'all 1s ease-out'
                        }}
                      >
                        {s.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
