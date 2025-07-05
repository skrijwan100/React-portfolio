import React, { useEffect, useMemo } from 'react';
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
// Simple fade-in animation on scroll
function attachScrollFadeIn(ref) {
  const node = ref.current;
  if (!node) return;
  const handleScroll = () => {
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      node.style.opacity = 1;
      node.style.transform = "translateY(0)";
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}

const certificates = [
  { 
    img: c1, 
    title: "Web Development Certification", 
    desc: "Advanced certification in modern web technologies including React, Node.js, and cloud deployment" 
  },
  { 
    img: c2, 
    title: "Data Science Certificate", 
    desc: "Comprehensive training in machine learning, data analysis, and statistical modeling techniques" 
  },
  { 
    img: c1, 
    title: "Cloud Architecture", 
    desc: "Expert-level certification in cloud infrastructure design and implementation" 
  },
];

export default function Certificate({ navhide }) {
  // Create refs for each certificate card
  const cardRefs = useMemo(
    () => certificates.map(() => React.createRef()),
    []
  );

  // Attach fade-in effect to each ref after mount
  useEffect(() => {
    const cleanups = cardRefs.map(ref => attachScrollFadeIn(ref));
    return () => {
      cleanups.forEach(cleanup => {
        if (typeof cleanup === "function") cleanup();
      });
    };
  }, [cardRefs]);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        minHeight: "100vh",
        paddingTop: "70px",
        paddingBottom: "50px",
        color: "white",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(245, 186, 9, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          zIndex: 0
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(100, 200, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
          zIndex: 0
        }}
      />

      <div
        style={{
          marginLeft: navhide ? "80px" : "202px",
          transition: "margin-left 0.4s ease-in-out",
          color: "white",
          fontSize: "2.8rem",
          fontWeight: "700",
          letterSpacing: "1px",
          marginBottom: "50px",
          textAlign: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f5ba09 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "0 4px 20px rgba(245, 186, 9, 0.3)",
          zIndex: 1,
          position: "relative"
        }}
      >
        Professional Certifications
      </div>

      <div
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "90%",
          maxWidth: "1200px",
          zIndex: 1,
          position: "relative"
        }}
      >
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            ref={cardRefs[idx]}
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.8),
                0 8px 16px -8px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 0 0 1px rgba(245, 186, 9, 0.1)
              `,
              overflow: "hidden",
              width: "350px",
              minHeight: "460px",
              margin: "20px 0",
              opacity: 0,
              transform: "translateY(60px)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = `
                0 35px 70px -12px rgba(0, 0, 0, 0.9),
                0 12px 20px -8px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                0 0 0 1px rgba(245, 186, 9, 0.3),
                0 0 30px rgba(245, 186, 9, 0.2)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = `
                0 25px 50px -12px rgba(0, 0, 0, 0.8),
                0 8px 16px -8px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 0 0 1px rgba(245, 186, 9, 0.1)
              `;
            }}
          >
            {/* Shimmer effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                animation: "shimmer 3s infinite",
                pointerEvents: "none"
              }}
            />
            
            <div
              style={{
                width: "100%",
                height: "240px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <img
                src={cert.img}
                alt={cert.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease"
                }}
              />
              {/* Overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.4))"
                }}
              />
            </div>
            
            <div style={{ 
              padding: "30px 24px 24px", 
              textAlign: "center",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                margin: "0 0 16px",
                color: "#f5ba09",
                letterSpacing: "0.5px",
                fontWeight: 600,
                textShadow: "0 2px 8px rgba(245, 186, 9, 0.3)",
                lineHeight: 1.3
              }}>{cert.title}</h3>
              <p style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.9)",
                margin: 0,
                lineHeight: 1.6,
                textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)"
              }}>{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}