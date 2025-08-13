import { useState, useRef, useEffect } from "react";

export default function useStopwatch() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

 
  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

 
  const reset = () => {
    if (!isRunning) {
      setTime(0);
      setLaps([]);
    }
  };

  
  const lap = () => {
    if (isRunning) {
      setLaps((prev) => [...prev, time]);
    }
  };

  
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10); 
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return { time, isRunning, laps, start, stop, reset, lap };
}
