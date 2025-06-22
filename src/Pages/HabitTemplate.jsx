import { useLocation } from 'react-router-dom';
import { useHabits } from '../HabitContext';
import Timer from '../components/Timer';
import '../styles/HabitTemplate.css';

export default function HabitTemplate() {
  const location = useLocation();
  const { customHabits } = useHabits();

  const habit = customHabits.find(h => h.link === location.pathname);

  if (!habit) {
    return (
      <div className="habit-template">
        <h2>Habit Not Found</h2>
        <p>This habit does not exist or was not loaded properly.</p>
      </div>
    );
  }

  return (
    <div className="habit-template">
      <div className="habit-banner">
        {habit.image && <img src={habit.image} alt={habit.name} className="habit-image" />}
        <h1>{habit.name}</h1>
        <p className="short-description">{habit.description}</p>
      </div>

      <div className="habit-body">
        {habit.detailedDescription && (
          <div className="habit-section">
            <h3>📘 What It's About</h3>
            <p>{habit.detailedDescription}</p>
          </div>
        )}

        {habit.goal && (
          <div className="habit-section">
            <h3>🎯 Goal</h3>
            <p>{habit.goal}</p>
          </div>
        )}

        <div className="habit-section">
          <h3>⏱ Timer</h3>
          <Timer
            key={habit.id}
            initialTime={habit.duration || 600}
            onComplete={() => alert('Great job completing your session! 👏')}
          />
        </div>
      </div>
    </div>
  );
}


