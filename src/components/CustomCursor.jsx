import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsMobile(true);
      return;
    }

    const cursor = cursorRef.current;

    const updateMouse = (e) => {
      const x = e.clientX - 15; // center the 30px cursor
      const y = e.clientY - 15;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", updateMouse);
    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "2px solid #007BFF",
        backgroundColor: "rgba(179, 31, 36, 0.05)",
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translate3d(0, 0, 0)", // initial position
      }}
    >
      {/* Dot */}
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#007BFF",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default CustomCursor;



// import React, { useEffect, useRef, useState } from "react";

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
//     if (isTouchDevice) {
//       setIsMobile(true);
//       return;
//     }

//     const cursor = cursorRef.current;

//     const updateMouse = (e) => {
//       const x = e.clientX - 15;
//       const y = e.clientY - 15;
//       cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
//     };

//     window.addEventListener("mousemove", updateMouse);
//     return () => {
//       window.removeEventListener("mousemove", updateMouse);
//     };
//   }, []);

//   if (isMobile) return null;

//   return (
//     <>
//       <style>{`
//         @keyframes colorCycle {
//           0% { border-color: #B31F24; background-color: rgba(179, 31, 36, 0.05); }
//           50% { border-color: #007BFF; background-color: rgba(0, 123, 255, 0.05); }
//           100% { border-color: #B31F24; background-color: rgba(179, 31, 36, 0.05); }
//         }

//         @keyframes dotColorCycle {
//           0% { background-color: #B31F24; }
//           50% { background-color: #007BFF; }
//           100% { background-color: #B31F24; }
//         }
//       `}</style>

//       <div
//         ref={cursorRef}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "30px",
//           height: "30px",
//           borderRadius: "50%",
//           border: "2px solid #B31F24",
//           animation: "colorCycle 4s infinite",
//           backgroundColor: "rgba(179, 31, 36, 0.05)",
//           pointerEvents: "none",
//           zIndex: 9999,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           transform: "translate3d(0, 0, 0)",
//         }}
//       >
//         <div
//           style={{
//             width: "10px",
//             height: "10px",
//             borderRadius: "50%",
//             backgroundColor: "#B31F24",
//             animation: "dotColorCycle 4s infinite",
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default CustomCursor;
