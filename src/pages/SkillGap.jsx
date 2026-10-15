import {
  ALL_SKILLS,
  SKILL_PRIORITY,
} from '../data/skillsData';

function Dashboard({
  student,
  selectedSkills,
  setPage,
}) {
  const currentSkills = ALL_SKILLS.filter(
    (skill) => selectedSkills.includes(skill.id)
  );

  const gapSkills = ALL_SKILLS.filter(
    (skill) => !selectedSkills.includes(skill.id)
  );

  const totalSkills = ALL_SKILLS.length;

  const matchPercent =
    totalSkills === 0
      ? 0
      : Math.round(
          (selectedSkills.length / totalSkills) * 100
        );

  const priorityOrder = {
    High: 0,
    Medium: 1,
    Low: 2,
  };

  const sortedGaps = [...gapSkills].sort(
    (a, b) =>
      priorityOrder[SKILL_PRIORITY[a.id]] -
      priorityOrder[SKILL_PRIORITY[b.id]]
  );

  const highPriorityCount = gapSkills.filter(
    (skill) =>
      SKILL_PRIORITY[skill.id] === 'High'
  ).length;

  const matchMessage =
    matchPercent >= 80
      ? 'Excellent skill coverage!'
      : matchPercent >= 50
      ? 'Good start — keep building your skills.'
      : 'You have several important skills to develop.';

  const suggestions = [];

  if (sortedGaps.length > 0) {
    suggestions.push(
      `Start learning ${sortedGaps[0].name} because it is your highest-priority skill gap.`
    );
  }

  if (!selectedSkills.includes('python')) {
    suggestions.push(
      'Learn Python to build a strong foundation for data and machine learning roles.'
    );
  }

  if (!selectedSkills.includes('sql')) {
    suggestions.push(
      'Add SQL to your learning plan so you can work with real-world databases and data.'
    );
  }

  if (selectedSkills.length >= 3) {
    suggestions.push(
      'You already have a good foundation. Start building small projects to apply your skills.'
    );
  }

  if (gapSkills.length === 0) {
    suggestions.push(
      'You have covered all available skills. Focus on projects, internships and interview preparation.'
    );
  }

  return (
    <section className="dashboard-page">

      <div className="dashboard-welcome">

        <div>
          <span className="feature-eyebrow">
            📊 CAREER OVERVIEW
          </span>

          <h2>
            Welcome back, {student.name || 'Student'}! 👋
          </h2>

          <p>
            Here's a quick look at your progress toward
            becoming a{' '}
            <strong>
              {student.targetRole || 'your target role'}
            </strong>.
          </p>
        </div>

        <div className="dashboard-goal">
          <span>🎯</span>

          <div>
            <small>YOUR GOAL</small>
            <strong>
              {student.targetRole || 'Not selected'}
            </strong>
          </div>
        </div>

      </div>


      <div className="dashboard-overview-grid">

        <div className="overview-card">
          <div className="overview-icon">🧠</div>
          <div>
            <span>Skills Known</span>
            <strong>{selectedSkills.length}</strong>
          </div>
        </div>

        <div className="overview-card">
          <div className="overview-icon">🎯</div>
          <div>
            <span>Skills to Learn</span>
            <strong>{gapSkills.length}</strong>
          </div>
        </div>

        <div className="overview-card">
          <div className="overview-icon">🔴</div>
          <div>
            <span>High Priority Gaps</span>
            <strong>{highPriorityCount}</strong>
          </div>
        </div>

        <div className="overview-card">
          <div className="overview-icon">📈</div>
          <div>
            <span>Skill Match</span>
            <strong>{matchPercent}%</strong>
          </div>
        </div>

      </div>


      <div className="dashboard-main-grid">

        <div className="feature-card dashboard-match-card">

          <div className="feature-card-header">
            <div>
              <h3>Skill Match</h3>
              <p>
                Your current skills compared with the
                skills in the SkillLens database.
              </p>
            </div>
          </div>

          <div className="dashboard-match-content">

            <div
              className="dashboard-match-circle"
              style={{
                '--match': `${matchPercent * 3.6}deg`,
              }}
            >
              <div className="dashboard-match-inner">
                <strong>{matchPercent}%</strong>
                <span>Match</span>
              </div>
            </div>

            <div className="dashboard-match-info">

              <h3>{matchMessage}</h3>

              <p>
                You currently have{' '}
                <strong>{selectedSkills.length}</strong>{' '}
                out of <strong>{totalSkills}</strong>{' '}
                tracked skills.
              </p>

              <button
                type="button"
                className="dashboard-text-button"
                onClick={() => setPage('gap')}
              >
                View Skill Gap →
              </button>

            </div>

          </div>

        </div>


        <div className="feature-card">

          <div className="feature-card-header">
            <div>
              <h3>Top Skill Gaps</h3>
              <p>
                Skills you should focus on first.
              </p>
            </div>
          </div>

          {sortedGaps.length === 0 ? (

            <div className="dashboard-empty">
              <span>🎉</span>
              <p>
                You have no remaining skill gaps!
              </p>
            </div>

          ) : (

            <div className="dashboard-gap-list">

              {sortedGaps.slice(0, 4).map((skill) => (

                <div
                  key={skill.id}
                  className="dashboard-gap-row"
                >

                  <div className="dashboard-gap-icon">
                    {skill.icon}
                  </div>

                  <div className="dashboard-gap-info">
                    <strong>{skill.name}</strong>
                    <span>
                      {SKILL_PRIORITY[skill.id]} priority
                    </span>
                  </div>

                  <span
                    className={`priority-tag priority-${
                      SKILL_PRIORITY[
                        skill.id
                      ].toLowerCase()
                    }`}
                  >
                    {SKILL_PRIORITY[skill.id]}
                  </span>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>


      <div className="feature-card">

        <div className="feature-card-header">

          <div>
            <h3>Your Current Skills</h3>
            <p>
              Skills you've selected as already known.
            </p>
          </div>

          <span className="skill-count">
            {currentSkills.length} skills
          </span>

        </div>

        {currentSkills.length === 0 ? (

          <div className="dashboard-empty">
            <span>🧠</span>
            <p>
              You haven't selected any skills yet.
            </p>
          </div>

        ) : (

          <div className="dashboard-current-skills">

            {currentSkills.map((skill) => (

              <div
                key={skill.id}
                className="dashboard-skill-chip"
              >

                <span>{skill.icon}</span>
                <strong>{skill.name}</strong>

                <span className="skill-check-mark">
                  ✓
                </span>

              </div>

            ))}

          </div>
        )}

      </div>


      <div className="feature-card dashboard-suggestions">

        <div className="feature-card-header">

          <div>
            <h3>💡 Smart Suggestions</h3>
            <p>
              Personalized suggestions based on your
              current skill profile.
            </p>
          </div>

        </div>

        <div className="dashboard-suggestion-list">

          {suggestions.slice(0, 4).map(
            (suggestion, index) => (

              <div
                key={index}
                className="dashboard-suggestion"
              >

                <div className="dashboard-suggestion-number">
                  {index + 1}
                </div>

                <p>{suggestion}</p>

              </div>

            )
          )}

        </div>

      </div>


      <div className="feature-card">

        <div className="feature-card-header">

          <div>
            <h3>⚡ Quick Actions</h3>
            <p>
              Jump directly to the tools you need.
            </p>
          </div>

        </div>

        <div className="dashboard-actions">

          <button
            type="button"
            className="dashboard-action"
            onClick={() => setPage('gap')}
          >
            <span>🎯</span>

            <div>
              <strong>Analyze Skill Gap</strong>
              <small>Find your missing skills</small>
            </div>

            <b>→</b>
          </button>


          <button
            type="button"
            className="dashboard-action"
            onClick={() => setPage('roadmap')}
          >
            <span>🗺️</span>

            <div>
              <strong>View Roadmap</strong>
              <small>Follow your career path</small>
            </div>

            <b>→</b>
          </button>


          <button
            type="button"
            className="dashboard-action"
            onClick={() => setPage('resources')}
          >
            <span>📚</span>

            <div>
              <strong>Explore Resources</strong>
              <small>Find resources to learn</small>
            </div>

            <b>→</b>
          </button>


          <button
            type="button"
            className="dashboard-action"
            onClick={() => setPage('jobs')}
          >
            <span>💼</span>

            <div>
              <strong>Check Job Readiness</strong>
              <small>See how prepared you are</small>
            </div>

            <b>→</b>
          </button>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;