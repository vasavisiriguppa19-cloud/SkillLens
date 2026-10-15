function Topbar({ page, student, setPage }) {
  const pageTitles = {
    dashboard: {
      title: 'Dashboard',
      subtitle: 'Your career intelligence overview',
    },
    skills: {
      title: 'My Skills',
      subtitle: 'Manage your current technical skills',
    },
    gap: {
      title: 'Skill Gap',
      subtitle: 'Discover the skills you need to develop',
    },
    roadmap: {
      title: 'Career Roadmap',
      subtitle: 'Your step-by-step career journey',
    },
    resources: {
      title: 'Learning Resources',
      subtitle: 'Resources selected for your learning journey',
    },
    progress: {
      title: 'My Progress',
      subtitle: 'Track your learning progress',
    },
    jobs: {
      title: 'Job Readiness',
      subtitle: 'See how prepared you are for opportunities',
    },
    profile: {
      title: 'My Profile',
      subtitle: 'Manage your career information',
    },
    setup: {
      title: 'Profile Setup',
      subtitle: 'Tell us about yourself',
    },
  };

  const currentPage = pageTitles[page] || {
    title: 'SkillLens',
    subtitle: 'Career Intelligence',
  };

  return (
    <header className="topbar">
      <div className="topbar-title">
        <h1>{currentPage.title}</h1>
        <p>{currentPage.subtitle}</p>
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="notification-button"
          aria-label="Notifications"
        >
          🔔
          <span className="notification-dot"></span>
        </button>

        <button
          type="button"
          className="topbar-user"
          onClick={() => setPage('profile')}
        >
          <div className="topbar-avatar">
            {student.name
              ? student.name.charAt(0).toUpperCase()
              : 'U'}
          </div>

          <div className="topbar-user-info">
            <strong>{student.name || 'Student'}</strong>

            <span>
              {student.targetRole || 'Career Explorer'}
            </span>
          </div>

          <span className="topbar-chevron">›</span>
        </button>
      </div>
    </header>
  );
}

export default Topbar;