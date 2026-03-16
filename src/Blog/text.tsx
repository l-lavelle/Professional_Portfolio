import { useState } from "react";

export default function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  };

  const cardContainerStyle = {
    perspective: "1000px",
    width: "300px",
    height: "400px",
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const cardFaceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    boxSizing: "border-box",
  };

  const cardFrontStyle = {
    ...cardFaceStyle,
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "white",
  };

  const cardBackStyle = {
    ...cardFaceStyle,
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "white",
    transform: "rotateY(180deg)",
  };

  const contentStyle = {
    transition: "transform 0.6s",
    transform: isFlipped ? "translateZ(30px)" : "translateZ(0px)",
    transformStyle: "preserve-3d",
  };

  const iconStyle = {
    fontSize: "80px",
    marginBottom: "20px",
  };

  const headingStyle = {
    margin: "0 0 15px 0",
    fontSize: "28px",
  };

  const paragraphStyle = {
    margin: "0",
    textAlign: "center",
    lineHeight: "1.6",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "15px 40px",
    fontSize: "18px",
    fontWeight: "600",
    color: "white",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <div style={cardFrontStyle}>
            <div style={contentStyle}>
              <div style={iconStyle}>🎨</div>
              <h2 style={headingStyle}>Front Side</h2>
              <p style={paragraphStyle}>
                This is the front of the card. Click the button below to flip!
              </p>
            </div>
          </div>
          <div style={cardBackStyle}>
            <div style={contentStyle}>
              <div style={iconStyle}>✨</div>
              <h2 style={headingStyle}>Back Side</h2>
              <p style={paragraphStyle}>
                You've flipped the card! Click again to return to the front.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        style={buttonStyle}
        onClick={handleFlip}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        }}
      >
        Flip Card
      </button>
    </div>
  );
}
