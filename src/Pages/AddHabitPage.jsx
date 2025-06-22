import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHabits } from '../HabitContext';
import '../styles/AddHabitPage.css'; // optional, for styling

export default function AddHabitPage() {
  const [habit, setHabit] = useState({
    name: '',
    description: '',
    detailedDescription: '',
    goal: '',
    image: '',
    link: '',
    duration: 600 // default: 10 minutes
  });

  const navigate = useNavigate();
  const { addHabit } = useHabits();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabit({ ...habit, [name]: value });
  };

  const handleSubmit = () => {
    if (!habit.name || !habit.link) {
      alert('Name and Link are required');
      return;
    }

    // Ensure link starts with /
    if (!habit.link.startsWith('/')) {
      habit.link = '/' + habit.link;
    }

    addHabit(habit);
    navigate(habit.link); // redirect directly to new habit page
  };

  return (
    <div className="add-habit-page">
      <h2>Create a New Habit</h2>

      <input
        type="text"
        name="name"
        placeholder="Habit Name"
        value={habit.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="description"
        placeholder="Short Description"
        value={habit.description}
        onChange={handleChange}
      />

      <textarea
        name="detailedDescription"
        placeholder="Detailed Habit Description"
        value={habit.detailedDescription}
        onChange={handleChange}
      />

      <input
        type="text"
        name="goal"
        placeholder="What is your goal with this habit?"
        value={habit.goal}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={habit.image}
        onChange={handleChange}
      />

      <input
        type="text"
        name="link"
        placeholder="Link (e.g. /reading)"
        value={habit.link}
        onChange={handleChange}
      />

      <input
        type="number"
        name="duration"
        placeholder="Duration (seconds)"
        value={habit.duration}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Add Habit</button>
    </div>
  );
}
