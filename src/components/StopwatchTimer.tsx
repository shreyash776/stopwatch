interface StopwatchTimerProps {
  time: number;
}
export default function StopwatchTimer({ time }: StopwatchTimerProps) {
  const formatTime = (ms:number) => {
    const milliseconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
      {formatTime(time)}
    </div>
  );
}
