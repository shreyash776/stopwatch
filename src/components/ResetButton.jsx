export default function ResetButton({ onReset, disabled }) {
  return <button onClick={onReset} disabled={disabled}>Reset</button>;
}