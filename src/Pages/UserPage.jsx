import '../styles/AdminUserPage.css';

export default function UserPage() {
  return (
    <div className="user-page">
      <h1>👤 Welcome to Your HabiTude</h1>
      <p>Explore and manage your daily habits like cooking, praying, meditating, and more.</p>

      <section className="user-intro">
        <h2>Why Track Habits?</h2>
        <p>
          Building positive habits helps you stay consistent, productive, and mindful. Whether you're trying to improve your spiritual life, fitness, or personal wellness, HabitTracker gives you the tools to make it happen.
        </p>
      </section>

      <section className="user-benefits">
        <h2>What You Can Do Here</h2>
        <ul>
          <li>✅ View your current habits and progress</li>
          <li>➕ Add new custom habits with your own images and goals</li>
          <li>🗑️ Remove habits that no longer serve you</li>
          <li>🧘 Get inspired with default habits like meditation, exercise, and prayer</li>
        </ul>
      </section>

      <section className="user-cta">
        <h2>Ready to Begin?</h2>
        <p>Head back to the homepage and start tracking your growth — one habit at a time. Every day is a fresh start!</p>
      </section>
    </div>
  );
}
