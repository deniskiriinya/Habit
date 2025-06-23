// src/Pages/ExercisingPage.jsx
import { useState } from 'react';
import Timer from '../components/Timer';
import '../styles/ExercisingPage.css';

const videos = [
  { title: "5 Min Morning Workout", url: "https://www.youtube.com/embed/1f8yoFFdkcY" },
  { title: "Quick Full Body", url: "https://www.youtube.com/embed/UBMk30rjy0o" },
  { title: "Stretch & Flex", url: "https://www.youtube.com/embed/sTANio_2E0Q" },
  { title: "Home Cardio", url: "https://www.youtube.com/embed/ml6cT4AZdqI" },
  { title: "Beginner Yoga", url: "https://www.youtube.com/embed/v7AYKMP6rOE" },
];

const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Fitness is not about being better than someone else… it’s about being better than you used to be.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Exercise not only changes your body, it changes your mind, your attitude and your mood.",
];



export default function ExercisingPage() {
  const [customTime, setCustomTime] = useState(600);

  return (
    <div className="exercise-page">
      <h1>🏋️ Exercise Tracker</h1>

      {/* Motivational Quote */}
      <div className="quote-box">
        <blockquote>{quotes[Math.floor(Math.random() * quotes.length)]}</blockquote>
      </div>

      {/* Timer Section */}
      <div className="timer-section">
        <h2>Set Your Workout Timer</h2>
        <input
          type="number"
          min="1"
          value={customTime / 60}
          onChange={(e) => setCustomTime(Number(e.target.value) * 60)}
          placeholder="Minutes"
        />
        <Timer initialTime={customTime} showControls={true} onComplete={() => alert("Well done! Session complete 🎉")} />
      </div>

      {}
      <h2>🎥 Workout Videos</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {/* Healthy Foods Section */}
      <div className="food-section">
        <h2>🥗 Eat Well, Stay Fit</h2>
        <div className="food-columns">
          <div>
            <h3>✅ Best Foods to Eat</h3>
            <ul>
              <li>Leafy greens (spinach, kale)</li>
              <li>Lean proteins (chicken, fish, eggs)</li>
              <li>Whole grains (brown rice, quinoa)</li>
              <li>Fruits (bananas, berries, apples)</li>
              <li>Healthy fats (avocados, nuts, olive oil)</li>
            </ul>
          </div>
          <div>
            <h3>❌ Foods to Avoid</h3>
            <ul>
              <li>Sugary snacks & soda</li>
              <li>Fried foods</li>
              <li>Processed meats</li>
              <li>Refined carbs (white bread, pastries)</li>
              <li>Alcohol in excess</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
