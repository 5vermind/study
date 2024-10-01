import { useEffect, useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
   
    useEffect(() => {
      const id = setInterval(() => {
        setCount(c => c + step);
      }, 1000);
      return () => clearInterval(id);
    }, [step]);
   
    return (
      <>
        <h1>{count}</h1>
        <input value={step} onChange={e => setStep(Number(e.target.value))} />
      </>
    );
  }