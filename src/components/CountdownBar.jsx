import { useEffect, useState } from "react";

const CountdownBar = ({ handleExceedTimeLimit }) => {
  const [timeLeft, setTimeLeft] = useState(15000); // 15 seconds in milliseconds

  useEffect(() => {
    const interval = 100; // Update the progress bar every 100 milliseconds
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - interval);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleExceedTimeLimit();
      setTimeLeft(15000);
    }
  }, [timeLeft]);

  const progressPercent = ((timeLeft / 15000) * 100).toFixed(2);

  return (
    <div className="w-full h-2 bg-gray-200 rounded">
      <div
        style={{ width: `${progressPercent}%` }}
        className="h-full bg-yellow-300 rounded"
      ></div>
    </div>
  );
};

export default CountdownBar;
