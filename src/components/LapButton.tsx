interface LapButtonProps {
  onLap: () => void;
}
export default function LapButton({ onLap }: LapButtonProps) {
  return <button onClick={onLap}>Lap</button>;
}