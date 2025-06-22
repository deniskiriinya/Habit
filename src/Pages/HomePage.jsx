import { useNavigate } from 'react-router-dom';
import { useHabits } from '../HabitContext';
import HabitCard from '../components/HabitCard';
import '../styles/HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();
  const { defaultHabits, customHabits, deleteHabit } = useHabits();

  return (
    <div className="home-page">
      <section className="welcome-section">
        <h1>Welcome to HabiTude</h1>
        <p>Build better habits one day at a time</p>
      </section>

      <section className="habits-section">
        <h2>Your Daily Habits</h2>
        <div className="habits-grid">
          {[...defaultHabits, ...customHabits].map(habit => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onDelete={!habit.isDefault ? deleteHabit : undefined}
            />
          ))}
        </div>
      </section>

      <section className="add-habit">
        <h2>Add New Habit</h2>
        <button className="add-btn" onClick={() => navigate('/add')}>
          + Create Custom Habit
        </button>
      </section>

      {/* ✅ New About Section */}
      <section className="about-section">
        <h2>About HabiTude</h2>
        <p>
          HabiTude is your personalized companion on the journey to self-improvement and well-being.
          Our mission is to help you stay focused, consistent, and motivated as you build habits that
          positively transform your life.
        </p>
        <ul>
          <li><strong>🎯 Track:</strong> Create and monitor habits like cooking, exercising, meditating, and more.</li>
          <li><strong>⏰ Stay on Time:</strong> Use built-in timers and reminders to maintain consistency.</li>
          <li><strong>📝 Reflect:</strong> Log your progress and reflect on your journey daily.</li>
          <li><strong>🎵 Personalize:</strong> Choose background sounds, motivational quotes, and more!</li>
        </ul>
        <p>
          Whether you’re trying to be more mindful, spiritually grounded, healthier, or simply more productive,
          HabiTude gives you the tools to make small, powerful changes every day. Start today and create a future you're proud of!
        </p>
        <p><em>“Your habits determine your future.” — Jack Canfield</em></p>
      </section>
    </div>
  );
}
