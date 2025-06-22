import { createContext, useContext, useState, useEffect } from 'react';

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const defaultHabits = [
    { id: 1, name: 'Cooking', description: 'Prepare healthy meals', image: '/image/cooking.jpg', link: '/cooking', isDefault: true },
    { id: 2, name: 'Exercising', description: 'Daily exercise', image: '/image/Exercise2.jpg', link: '/exercising', isDefault: true },
    { id: 3, name: 'Praying', description: 'Spiritual time', image: '/image/praying.jpg', link: '/praying', isDefault: true },
    { id: 4, name: 'Meditation', description: 'Mindfulness', image: '/image/meditation.avif', link: '/meditation', isDefault: true }
  ];

  const [customHabits, setCustomHabits] = useState([]);

  // ✅ Load from localStorage when app starts
  useEffect(() => {
    const savedHabits = localStorage.getItem('customHabits');
    if (savedHabits) {
      setCustomHabits(JSON.parse(savedHabits));
    }
  }, []);

  // ✅ Save to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem('customHabits', JSON.stringify(customHabits));
  }, [customHabits]);

  const addHabit = (habit) => {
    if (!habit.link.startsWith('/')) {
      habit.link = '/' + habit.link; // Ensure link starts with /
    }

    const newId = defaultHabits.length + customHabits.length + 1;
    const newHabit = { ...habit, id: newId, isDefault: false };
    setCustomHabits(prev => [...prev, newHabit]);
  };

  const deleteHabit = (id) => {
    setCustomHabits(prev => prev.filter(habit => habit.id !== id));
  };

  return (
    <HabitContext.Provider value={{ defaultHabits, customHabits, addHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);
