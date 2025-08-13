import { useState, useRef, useEffect } from "react";


export interface UseStopwatch {
  time: number;
  isRunning: boolean;
  laps: number[];
  start: () => void;
  stop: () => void;
  reset: () => void;
  lap: () => void;
}
export default function useStopwatch(): UseStopwatch {
  const [time, setTime] = useState<number>(0); 
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  
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
  } else if (intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, [isRunning]);


  return { time, isRunning, laps, start, stop, reset, lap };
}
