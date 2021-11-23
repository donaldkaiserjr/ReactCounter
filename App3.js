export default function App3() {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  return (
    <div>
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count: currentState.count + 250,
            count2: currentState.count2 + 1500
          }))
        }
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  );
}
