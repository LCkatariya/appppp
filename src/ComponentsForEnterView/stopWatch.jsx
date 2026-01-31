import React, { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start / Stop timer
  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1); // every 10ms
      }, 1);
    }
    setIsRunning(!isRunning);
  };

//   const handleStart = () => {
//     // Set the start time to the current system time
//     startTimeRef.current = Date.now() - time; // Subtract `time` to resume from a paused value

//     // Start a new interval
//     intervalRef.current = setInterval(() => {
//         // **The crucial change:** Calculate time based on system clock
//         const elapsed = Date.now() - startTimeRef.current;
//         setTime(elapsed);
//     }, 10); // Update frequently (e.g., every 10ms) for a smooth display
// };

  // Reset timer
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Format time as mm:ss:ms
  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);
    return `${String(minutes).padStart(2, "0")}
    :${String(seconds).padStart(2,"0")}
    :${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        {formatTime(time)}
      </h1>

      <div>
        <button
          onClick={handleStartStop}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            background: isRunning ? "#ff4757" : "#2ed573",
            color: "white",
            cursor: "pointer",
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            background: "#1e90ff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}