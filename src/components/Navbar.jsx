function Navbar({
  theme,
  setTheme,
  page,
  setPage,
}) {
  const toggleTheme = () => {
    setTheme(
      theme === 'light'
        ? 'dark'
        : 'light'
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="navbar-mark">
          
        </span>

        <div>
          <span className="navbar-name">
            SkillLens
          </span>

          <span className="sidebar-brand-subtitle">
            Career Intelligence
          </span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="sidebar-section-title">
          MAIN
        </p>

        <button
          className={`sidebar-link ${
            page === 'dashboard'
              ? 'sidebar-link-active'
              : ''
          }`}
          onClick={() =>
            setPage('dashboard')
          }
        >
          <span>📊</span>
          <span>Dashboard</span>
        </button>

        <button
          className={`sidebar-link ${
            page === 'skills'
              ? 'sidebar-link-active'
              : ''
          }`}
          onClick={() =>
            setPage('skills')
          }
        >
          <span>🧠</span>
          <span>My Skills</span>
        </button>

        <button
          className={`sidebar-link ${
            page === 'gap'
              ? 'sidebar-link-active'
              : ''
          }`}
          onClick={() =>
            setPage('gap')
          }
        >
          <span>🎯</span>
          <span>Skill Gap</span>
        </button>

        <button
          className={`sidebar-link ${
            page === 'career'
              ? 'sidebar-link-active'
              : ''
          }`}
          onClick={() =>
            setPage('career')
          }
        >
          <span>🧠</span>
          <span>Career Intelligence</span>
        </button>

        <button
          className={`sidebar-link ${
            page === 'roadmap'
              ? 'sidebar-link-active'
              : ''
          }`}
          onClick={() =>
            setPage('roadmap')
          }
        >
          <span>🗺️</span>
          <span>Roadmap</span>
        </button>

        <p className="sidebar-section-title">
          LEARNING
        </p>

        <button
          className={`sidebar-link ${
            page === 'resources'
              ? 'sidebar-link-active'
              : ''
          }`}
          onClick={() =>
            setPage('resources')
          }
        >
          <span>📚</span>
          <span>Resources</span>
        </button>

        <button
          className={`sidebar-link ${
            page === 'progress'
              ? 'sidebar-link-active'
              : ''
          }`}
          onClick={() =>
            setPage('progress')
          }
        >
          <span>📈</span>
          <span>My Progress</span>
        </button>

        <p className="sidebar-section-title">
          CAREER
        </p>

        <button
          className={`sidebar-link ${
            page === 'jobs'
              ? 'sidebar-link-active'
              : ''
          }`}
          onClick={() =>
            setPage('jobs')
          }
        >
          <span>💼</span>
          <span>Job Readiness</span>
        </button>
      </nav>

      <div className="sidebar-bottom">
        <button
          className="sidebar-link"
          onClick={toggleTheme}
        >
          <span>
            {theme === 'light'
              ? '🌙'
              : '☀️'}
          </span>

          <span>
            {theme === 'light'
              ? 'Dark Mode'
              : 'Light Mode'}
          </span>
        </button>

        <button
          className="sidebar-link"
          onClick={() =>
            setPage('profile')
          }
        >
          <span>⚙️</span>
          <span>Profile</span>
        </button>

        <div className="sidebar-user">
          <div className="user-avatar">
            U
          </div>

          <div className="user-info">
            <strong>Student</strong>
            <span>
              Career Explorer
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;