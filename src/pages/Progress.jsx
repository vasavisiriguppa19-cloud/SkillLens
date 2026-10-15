function Progress({ selectedSkills }) {
  const totalSkills = 6;
  const completedSkills = selectedSkills.length;

  const skillProgress =
    totalSkills === 0
      ? 0
      : Math.round((completedSkills / totalSkills) * 100);

  const learningStats = [
    {
      icon: '🧠',
      value: completedSkills,
      label: 'Skills Known',
    },
    {
      icon: '📚',
      value: totalSkills - completedSkills,
      label: 'Skills to Learn',
    },
    {
      icon: '🛠️',
      value: 0,
      label: 'Projects Completed',
    },
    {
      icon: '🏆',
      value: 0,
      label: 'Goals Completed',
    },
  ];

  return (
    <section className="progress-page">

      {/* Header */}

      <div className="feature-header">

        <div>
          <span className="feature-eyebrow">
            📈 LEARNING TRACKER
          </span>

          <h2>My Progress</h2>

          <p>
            Track your learning journey and see how far
            you've come.
          </p>
        </div>

        <div className="progress-level-card">

          <span className="progress-level-icon">
            🚀
          </span>

          <div>
            <span>YOUR LEVEL</span>
            <strong>
              Career Explorer
            </strong>
          </div>

        </div>

      </div>


      {/* Stats */}

      <div className="progress-stats">

        {learningStats.map((stat) => (

          <div
            key={stat.label}
            className="progress-stat-card"
          >

            <div className="progress-stat-icon">
              {stat.icon}
            </div>

            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>

          </div>

        ))}

      </div>


      {/* Overall Progress */}

      <div className="feature-card overall-progress-card">

        <div className="progress-card-heading">

          <div>

            <span className="small-label">
              OVERALL PROGRESS
            </span>

            <h3>
              Your Skill Development
            </h3>

            <p>
              Keep learning and practicing to increase
              your career readiness.
            </p>

          </div>

          <div className="large-progress-number">
            {skillProgress}%
          </div>

        </div>


        <div className="large-progress-bar">

          <div
            className="large-progress-fill"
            style={{
              width: `${skillProgress}%`,
            }}
          ></div>

        </div>


        <div className="progress-bar-footer">

          <span>
            {completedSkills} of {totalSkills} skills
          </span>

          <span>
            {totalSkills - completedSkills} remaining
          </span>

        </div>

      </div>


      {/* Skill Progress */}

      <div className="feature-card">

        <div className="feature-card-header">

          <div>

            <h3>Skill Progress</h3>

            <p>
              Your current skill development status.
            </p>

          </div>

        </div>


        <div className="progress-skill-list">

          {[
            {
              id: 'python',
              icon: '🐍',
              name: 'Python',
            },
            {
              id: 'sql',
              icon: '🗄️',
              name: 'SQL',
            },
            {
              id: 'statistics',
              icon: '📊',
              name: 'Statistics',
            },
            {
              id: 'ml',
              icon: '🤖',
              name: 'Machine Learning',
            },
            {
              id: 'dl',
              icon: '🧠',
              name: 'Deep Learning',
            },
            {
              id: 'docker',
              icon: '🐳',
              name: 'Docker',
            },
          ].map((skill) => {

            const isKnown =
              selectedSkills.includes(skill.id);

            return (
              <div
                key={skill.id}
                className="progress-skill-row"
              >

                <div className="progress-skill-name">

                  <span className="progress-skill-icon">
                    {skill.icon}
                  </span>

                  <span>
                    {skill.name}
                  </span>

                </div>


                <div className="skill-progress-track">

                  <div
                    className={`skill-progress-fill ${
                      isKnown
                        ? 'skill-progress-complete'
                        : ''
                    }`}
                    style={{
                      width: isKnown ? '100%' : '15%',
                    }}
                  ></div>

                </div>


                <span
                  className={`progress-status ${
                    isKnown
                      ? 'progress-status-complete'
                      : 'progress-status-learning'
                  }`}
                >
                  {isKnown
                    ? 'Completed'
                    : 'To Learn'}
                </span>

              </div>
            );
          })}

        </div>

      </div>


      {/* Motivation */}

      <div className="progress-motivation">

        <div className="motivation-icon">
          🌱
        </div>

        <div>

          <h3>
            Keep going!
          </h3>

          <p>
            Every skill you learn brings you one step
            closer to your career goal. Consistency is
            more important than speed.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Progress;