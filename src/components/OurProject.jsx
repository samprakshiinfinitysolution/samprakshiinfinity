import React, { useRef, useEffect } from "react";

const projects = [
    {
        id: 1,
        title: "Samprakshi Infinity Solution Website",
        image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80",
        url: "https://infinitysolution.org",
    },
    {
        id: 2,
        title: "Car Booking System",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        url: "#",
    },
    {
        id: 3,
        title: "Blog System",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
        url: "#",
    },
    {
        id: 4,
        title: "Extra Project",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
        url: "#",
    },
    {
        id: 5,
        title: "Another Project",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        url: "#",
    },
];

const OurProject = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let frameId;
        let scrollAmount = 0;

        const scrollStep = () => {
            if (!scrollContainer) return;
            scrollAmount += 0.5;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
            frameId = requestAnimationFrame(scrollStep);
        };

        frameId = requestAnimationFrame(scrollStep);

        const handleMouseEnter = () => cancelAnimationFrame(frameId);
        const handleMouseLeave = () =>
            (frameId = requestAnimationFrame(scrollStep));

        scrollContainer.addEventListener("mouseenter", handleMouseEnter);
        scrollContainer.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(frameId);
            scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
            scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const projectsLoop = [...projects, ...projects];

    return (
    <section className="py-16 bg-linear-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <style>{`
        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-900  mb-14">
                    Explore Our Work
                </h2>

                <div
                    ref={scrollRef}
                    className="flex space-x-8 overflow-x-auto whitespace-nowrap no-scrollbar"
                    aria-label="Our Projects carousel"
                >
                    {projectsLoop.map(({ id, title, image, url }, index) => (
                        <a
                            key={`${id}-${index}`}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block min-w-[280px] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                            title={title}
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-110 rounded-xl"
                                loading="lazy"
                            />
                            {/* Title overlay on hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-30 rounded-xl transition-opacity duration-300">
                                <span className="text-white text-lg font-semibold px-4 py-2 bg-indigo-700 bg-opacity-80 rounded-lg">
                                    {title}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProject;
