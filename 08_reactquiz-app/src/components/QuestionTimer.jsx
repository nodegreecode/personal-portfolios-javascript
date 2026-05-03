import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("SETTING INTERVAL");
      setRemainingTime((prevValue) => prevValue - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-timer"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
