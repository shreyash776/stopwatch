
interface StopButtonProps {
  onStop: () => void;
}
export default function StopButton({ onStop }: StopButtonProps) {
  return <button onClick={onStop}>Stop</button>;
}