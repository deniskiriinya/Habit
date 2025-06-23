import { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import '../styles/MeditationPage.css';

export default function MeditationPage() {
  const [sessionType, setSessionType] = useState('guided');
  const [backgroundSound, setBackgroundSound] = useState('rain');
  const [customTime, setCustomTime] = useState(600); 
  const [audio, setAudio] = useState(null);

  // Predefined sound URLs
  const soundUrls = {
    rain: '/sounds/rain.mp3',
    waves: '/sounds/ocean.mp3',
    forest: '/sounds/forest.mp3',
  };

  // Handle background audio playback
  useEffect(() => {
    if (audio) {
      audio.pause();
    }

    if (sessionType === 'guided' && backgroundSound !== 'none') {
      const newAudio = new Audio(soundUrls[backgroundSound]);
      newAudio.loop = true;
      newAudio.volume = 0.5;
      newAudio.play().catch((e) => console.log('Audio playback error:', e));
      setAudio(newAudio);

      return () => newAudio.pause();
    }
  }, [sessionType, backgroundSound]);

  return (
    <div className="meditation-page">
      <header className="meditation-header">
        <h1>Meditation Space</h1>
        <p>Find your calm and focus your mind</p>
      </header>

      <div className="meditation-controls">
        <div className="session-type">
          <h3>Session Type</h3>
          <div className="toggle-buttons">
            <button className={sessionType === 'guided' ? 'active' : ''} onClick={() => setSessionType('guided')}>
              Guided
            </button>
            <button className={sessionType === 'silent' ? 'active' : ''} onClick={() => setSessionType('silent')}>
              Silent
            </button>
          </div>
        </div>

        <div className="sound-options">
          <h3>Background Sound</h3>
          <select
            value={backgroundSound}
            onChange={(e) => setBackgroundSound(e.target.value)}
            disabled={sessionType !== 'guided'}
          >
            <option value="rain">🌧️ Rain</option>
            <option value="waves">🌊 Waves</option>
            <option value="forest">🌲 Forest</option>
            <option value="none">🚫 None</option>
          </select>
        </div>

        <div className="time-input">
          <h3>Set Meditation Time (minutes)</h3>
          <input
            type="number"
            min="1"
            value={customTime / 60}
            onChange={(e) => setCustomTime(Number(e.target.value) * 60)}
          />
        </div>
      </div>

      <div className="meditation-timer">
        <Timer
          initialTime={customTime}
          showControls={true}
          onComplete={() => alert('Meditation session complete!')}
        />
      </div>

      <div className="meditation-tips">
        <h3>Meditation Tips</h3>
        <ul>
          <li>Find a quiet and comfortable space</li>
          <li>Breathe slowly and focus on your breath</li>
          <li>Let go of distracting thoughts without judgment</li>
          <li>Let background sounds guide your relaxation</li>
        </ul>
      </div>
    </div>
  );
}
