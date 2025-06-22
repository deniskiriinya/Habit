import { useEffect, useState, useRef } from 'react';
import '../styles/Timer.css'; // Ensure you have a CSS file for styling

export default function Timer({ initialTime, showControls = false, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const alertRef = useRef(null);

  useEffect(() => {
    setTimeLeft(initialTime); // reset time when initialTime changes
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }, [initialTime]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(intervalRef.current);
      playAlert();
      if (onComplete) onComplete();
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const playAlert = () => {
    if (alertRef.current) {
      alertRef.current.play().catch((err) => console.log('Alert sound error:', err));
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="timer-container">
      <h2>{formatTime(timeLeft)}</h2>
      {showControls && (
        <div className="timer-controls">
          <button onClick={() => setIsRunning(true)}>Start</button>
          <button onClick={() => setIsRunning(false)}>Pause</button>
          <button onClick={() => { setTimeLeft(initialTime); setIsRunning(false); }}>Reset</button>
        </div>
      )}
      {/* Hidden audio for alert */}
      <audio ref={alertRef} src="/sounds/alert.mp3" preload="auto" />
    </div>
  );
}
