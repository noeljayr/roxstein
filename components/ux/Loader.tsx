import "@/css/loader.css";
import React from "react";

interface LoaderProps {
  variant?: "primary";
  className?: string;
  style?: React.CSSProperties;
}

function Loader({ variant, className, style }: LoaderProps) {
  const defaultStyle: React.CSSProperties = {
    height: "24px",
    width: "24px",
    ...style,
  };

  return (
    <div
      className={`spinner ${variant}-loader ${className}`}
      style={defaultStyle}
    ></div>
  );
}

export default Loader;
