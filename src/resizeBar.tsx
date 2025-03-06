import { useState, useEffect } from "react";
import "./analogClock.css";

const ResizeBar = () => {
  const [size, setSize] = useState(300);

  useEffect(() => {
    document.documentElement.style.setProperty("--clock-size", `${size}px`);
  }, [size]);

  return (
    <div>
      <input
        type="range"
        min="80"
        max="500"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
    </div>
  );
};

export default ResizeBar;
