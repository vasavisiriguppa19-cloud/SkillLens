function JobReadiness({ student, selectedSkills }) {
  const totalSkills = 6;
  const completedSkills = selectedSkills.length;

  const skillScore = Math.round(
    (completedSkills / totalSkills) * 60
  );

  const profileScore =
    student.name && student.targetRole ? 15 : 5;

  const projectScore = 0;

  const interviewScore = 0;

  const totalScore =
    skillScore +
    profileScore +
    projectScore +
    interviewScore;

  const readinessLevel =
    totalScore >= 80
      ? 'Job Ready'
      : totalScore >= 60
      ? 'Almost Ready'
      : totalScore >= 40
      ? 'Building'
      : 'Getting Started';

  const checklist = [
    {
      icon: '👤',
      title: 'Complete Your Profile',
      description:
        'Add your name and choose your target career role.',
      completed:
        student.name !== '' &&
        student.targetRole !== '',
    },
    {
      icon: '🧠',
      title: 'Build Your Technical Skills',
      description:
        'Develop the important skills required for your target role.',
      completed: completedSkills >= 4,
    },
    {
      icon: '🛠️',
      title: 'Build Real Projects',
      description:
        'Create practical projects that demonstrate what you can do.',
      completed: false,
    },
    {
      icon: '📁',
      title: 'Create Your Portfolio',
      description:
        'Showcase your projects, skills and achievements.',
      completed: false,
    },
    {
      icon: '💬',
      title: 'Prepare for Interviews',
      description:
        'Practice technical and behavioral interview questions.',
      completed: false,
    },
  ];

  return (
    <section className="job-readiness-page">

      {/* Header */}

      <div className="feature-header">

        <div>
          <span className="feature-eyebrow">
            💼 CAREER READINESS
          </span>

          <h2>Job Readiness</h2>

          <p>
            See how prepared you are for internships and
            entry-level opportunities.
          </p>
        </div>

        <div className="readiness-level-card">

          <span className="readiness-level-icon">
            🚀
          </span>

          <div>
            <span>YOUR STATUS</span>
            <strong>{readinessLevel}</strong>
          </div>

        </div>

      </div>


      {/* Score */}

      <div className="readiness-overview">

        <div className="readiness-score-card">

          <div
            className="readiness-circle"
            style={{
              '--score': `${totalScore * 3.6}deg`,
            }}
          >
            <div className="readiness-circle-inner">

              <strong>
                {totalScore}%
              </strong>

              <span>
                Ready
              </span>

            </div>
          </div>

          <div className="readiness-score-content">

            <span className="small-label">
              OVERALL SCORE
            </span>

            <h3>
              {readinessLevel}
            </h3>

            <p>
              Your score is based on your current skills,
              profile completion, projects and interview
              preparation.
            </p>

          </div>

        </div>


        {/* Score Breakdown */}

        <div className="readiness-breakdown">

          <h3>
            Score Breakdown
          </h3>

          <div className="score-row">

            <span>
              🧠 Technical Skills
            </span>

            <strong>
              {skillScore}/60
            </strong>

          </div>

          <div className="score-row">

            <span>
              👤 Profile
            </span>

            <strong>
              {profileScore}/15
            </strong>

          </div>

          <div className="score-row">

            <span>
              🛠️ Projects
            </span>

            <strong>
              {projectScore}/15
            </strong>

          </div>

          <div className="score-row">

            <span>
              💬 Interview Preparation
            </span>

            <strong>
              {interviewScore}/10
            </strong>

          </div>

        </div>

      </div>


      {/* Checklist */}

      <div className="feature-card readiness-checklist">

        <div className="feature-card-header">

          <div>

            <h3>
              Job Readiness Checklist
            </h3>

            <p>
              Complete these steps to improve your
              readiness score.
            </p>

          </div>

        </div>


        <div className="readiness-list">

          {checklist.map((item) => (

            <div
              key={item.title}
              className={`readiness-item ${
                item.completed
                  ? 'readiness-item-complete'
                  : ''
              }`}
            >

              <div className="readiness-item-icon">
                {item.completed
                  ? '✓'
                  : item.icon}
              </div>

              <div className="readiness-item-content">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

              <span
                className={`readiness-status ${
                  item.completed
                    ? 'status-complete'
                    : 'status-pending'
                }`}
              >
                {item.completed
                  ? 'Completed'
                  : 'Pending'}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* Next Action */}

      <div className="readiness-next-action">

        <div className="next-action-icon">
          🎯
        </div>

        <div>

          <span className="small-label">
            RECOMMENDED NEXT STEP
          </span>

          <h3>
            {completedSkills < 4
              ? 'Focus on building your technical skills'
              : 'Start building real-world projects'}
          </h3>

          <p>
            {completedSkills < 4
              ? 'Learn the important skills identified in your Skill Gap before moving to advanced preparation.'
              : 'Use your skills to create projects that you can add to your portfolio and resume.'}
          </p>

        </div>

      </div>

    </section>
  );
}

export default JobReadiness;