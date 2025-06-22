import '../styles/AdminUserPage.css';

export default function AdminPage() {
  const userData = JSON.parse(localStorage.getItem('habitTrackerUser'));

  return (
    <div className="admin-page">
      <h1>🔒 Admin Dashboard</h1>
      <p>Welcome, {userData?.email || 'Admin'}!</p>
      <p>You are logged in as an admin. Use this page to manage the application or view admin tools.</p>
    </div>
  );
}
