import useStopwatch from "../hooks/useStopwatch";
import StopwatchTimer from "./StopwatchTimer";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import LapButton from "./LapButton";
import ResetButton from "./ResetButton";
import Laps from "./Laps";

export default function Stopwatch() {
  const { time, isRunning, laps, start, stop, reset, lap } = useStopwatch();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>React Stopwatch</h1>
      <StopwatchTimer time={time} />
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <StartButton onStart={start} />
        <StopButton onStop={stop} />
        <LapButton onLap={lap} />
        <ResetButton onReset={reset} disabled={isRunning} />
      </div>
      <Laps laps={laps} />
    </div>
  );
}
