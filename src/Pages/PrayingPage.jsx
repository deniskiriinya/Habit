import { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import '../styles/PrayingPage.css';

export default function PrayingPage() {
  const [prayerType, setPrayerType] = useState('personal');
  const [prayerTime, setPrayerTime] = useState(300); 
  const [reminder, setReminder] = useState(true);
  
  const [prayerHistory, setPrayerHistory] = useState([]);
  

  const prayerConfig = {
    personal: {
      label: 'Personal Prayer',
      defaultTime: 300,
      message: 'Speak from your heart. Share your thoughts, gratitude, and requests.',
    },
    scripture: {
      label: 'Scripture Reading',
      defaultTime: 600,
      message: 'Read slowly and reflect on each verse. Let the words speak to you.',
    },
    contemplative: {
      label: 'Contemplative Prayer',
      defaultTime: 900,
      message: 'Be still and listen. Focus on your breathing and God\'s presence.',
    },
    intercessory: {
      label: 'Intercessory Prayer',
      defaultTime: 600,
      message: 'Pray for others. Lift up their needs before God.',
    },
  };

  useEffect(() => {
    setPrayerTime(prayerConfig[prayerType].defaultTime);
  }, [prayerType]);

  const logPrayer = (completed = true) => {
    const newEntry = {
      type: prayerType,
      
      completed,
    };
    setPrayerHistory(prev => [newEntry, ...prev]);
    if (completed) alert('Prayer logged as completed 🙏');
  };

  
  

  return (
    <div className="praying-page">
      <div className="prayer-header">
        <h1>Sacred Prayer Space</h1>
        <p>Enter your time of communion and reflection</p>
      </div>

     
      <div className="prayer-selection">
        <h3>Choose Your Prayer Type</h3>
        <div className="prayer-options">
          {Object.entries(prayerConfig).map(([key, value]) => (
            <button
              key={key}
              className={prayerType === key ? 'active' : ''}
              onClick={() => setPrayerType(key)}
            >
              {value.label}
            </button>
          ))}
        </div>
      </div>

      <div className="time-section">
        <h3>Prayer Duration (minutes)</h3>
        <input
          type="number"
          min="1"
          max="60"
          value={prayerTime / 60}
          onChange={(e) => setPrayerTime(Number(e.target.value) * 60)}
        />
        <div className="reminder-toggle">
          <label>
            <input
              type="checkbox"
              checked={reminder}
              onChange={() => setReminder(!reminder)}
            />
            Gentle reminder when time ends
          </label>
        </div>
      </div>

      <div className="prayer-timer-container">
        <Timer
          key={`${prayerType}-${prayerTime}`}
          initialTime={prayerTime}
          onComplete={() => {
            if (reminder) {
              alert('Your prayer time has completed. Amen.');
              logPrayer(true);
            }
          }}
        />
      </div>

      <div className="prayer-guidance">
        <h3>Prayer Guidance</h3>
        <p>{prayerConfig[prayerType].message}</p>
      </div>

      
    </div>
  );
}
