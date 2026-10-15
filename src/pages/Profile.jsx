function Profile({ student, setStudent }) {
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const profileCompletion =
    student.name && student.targetRole
      ? 100
      : student.name || student.targetRole
      ? 50
      : 0;

  return (
    <section className="profile-dashboard-page">
      <div className="feature-header">
        <div>
          <span className="feature-eyebrow">
            ⚙️ ACCOUNT SETTINGS
          </span>

          <h2>My Profile</h2>

          <p>
            Manage your career information and keep your
            SkillLens profile up to date.
          </p>
        </div>

        <div className="profile-role-card">
          <span className="profile-role-icon">
            🎯
          </span>

          <div>
            <span>TARGET ROLE</span>

            <strong>
              {student.targetRole || 'Not selected'}
            </strong>
          </div>
        </div>
      </div>

      <div className="profile-layout">
        <div className="feature-card profile-main-card">
          <div className="feature-card-header">
            <div>
              <h3>Personal Information</h3>

              <p>
                Tell us a little about yourself.
              </p>
            </div>
          </div>

          <div className="profile-avatar-section">
            <div className="profile-large-avatar">
              {student.name
                ? student.name.charAt(0).toUpperCase()
                : 'U'}
            </div>

            <div>
              <h3>
                {student.name || 'Student'}
              </h3>

              <p>
                Career Explorer
              </p>
            </div>
          </div>

          <div className="profile-form-grid">
            <label className="profile-field">
              <span>Full Name</span>

              <input
                name="name"
                value={student.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </label>

            <label className="profile-field">
              <span>Target Role</span>

              <select
                name="targetRole"
                value={student.targetRole}
                onChange={handleChange}
              >
                <option value="">
                  Select a role
                </option>

                <option value="Data Scientist">
                  Data Scientist
                </option>

                <option value="Data Analyst">
                  Data Analyst
                </option>

                <option value="Machine Learning Engineer">
                  Machine Learning Engineer
                </option>

                <option value="Software Engineer">
                  Software Engineer
                </option>
              </select>
            </label>
          </div>

          <div className="profile-info-note">
            <span>💡</span>

            <p>
              Your target role is used by SkillLens to
              personalize your skill gap analysis,
              roadmap and career recommendations.
            </p>
          </div>
        </div>

        <div className="feature-card profile-completion-card">
          <span className="small-label">
            PROFILE COMPLETION
          </span>

          <div className="profile-completion-number">
            {profileCompletion}%
          </div>

          <div className="profile-completion-bar">
            <div
              className="profile-completion-fill"
              style={{
                width: `${profileCompletion}%`,
              }}
            ></div>
          </div>

          <p>
            Complete your profile to get more
            personalized recommendations.
          </p>

          <div className="profile-checks">
            <div>
              <span>
                {student.name ? '✓' : '○'}
              </span>

              <p>Name added</p>
            </div>

            <div>
              <span>
                {student.targetRole ? '✓' : '○'}
              </span>

              <p>Target role selected</p>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-card career-goal-card">
        <div className="feature-card-header">
          <div>
            <h3>🎯 Your Career Goal</h3>

            <p>
              SkillLens uses this goal to guide your
              learning journey.
            </p>
          </div>
        </div>

        <div className="career-goal-content">
          <div className="career-goal-icon">
            🚀
          </div>

          <div>
            <span className="small-label">
              TARGET CAREER
            </span>

            <h3>
              {student.targetRole ||
                'Choose your target role'}
            </h3>

            <p>
              {student.targetRole
                ? `Your SkillLens journey is currently focused on becoming a ${student.targetRole}.`
                : 'Select a target role above to start building your personalized career path.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;