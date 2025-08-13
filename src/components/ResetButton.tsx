interface ResetButtonProps {
  onReset: () => void;
  disabled: boolean;
}
export default function ResetButton({ onReset, disabled }: ResetButtonProps) {
  return <button onClick={onReset} disabled={disabled}>Reset</button>;
}