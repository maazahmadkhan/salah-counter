import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem("counter");
    return stored ? parseInt(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>Salah Counter: {count}</h1>
      <button onClick={() => setCount((c) => c + 2)}>Increment</button>
      <button
        onClick={() => setCount((c) => c - 2)}
        style={{ marginLeft: "1rem" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
