export default function Laps({ laps }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {laps.length === 0 ? (
        <p>No laps yet</p>
      ) : (
        <ul>
          {laps.map((lap, index) => {
            const ms = Math.floor((lap % 1000) / 10);
            const sec = Math.floor((lap / 1000) % 60);
            const min = Math.floor((lap / (1000 * 60)) % 60);
            return (
              <li key={index}>
                Lap {index + 1}: {String(min).padStart(2, "0")}:
                {String(sec).padStart(2, "0")}.{String(ms).padStart(2, "0")}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
