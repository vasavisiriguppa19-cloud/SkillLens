function Roadmap({ student, selectedSkills }) {
  const steps = [
    {
      number: '01',
      icon: '🎯',
      title: 'Understand Your Target Role',
      description:
        `Learn what a ${student.targetRole || 'target'} role actually requires and understand the skills employers look for.`,
      status: 'Start Here',
    },
    {
      number: '02',
      icon: '🧠',
      title: 'Build Your Missing Skills',
      description:
        selectedSkills.length > 0
          ? 'Strengthen your existing skills and focus on the skills identified in your Skill Gap.'
          : 'Identify the skills you need and start building your technical foundation.',
      status: 'Next',
    },
    {
      number: '03',
      icon: '🛠️',
      title: 'Practice With Projects',
      description:
        'Apply what you learn by building small practical projects that demonstrate your technical abilities.',
      status: 'Build',
    },
    {
      number: '04',
      icon: '📁',
      title: 'Build Your Portfolio',
      description:
        'Organize your projects, skills and achievements into a portfolio that you can show to recruiters.',
      status: 'Showcase',
    },
    {
      number: '05',
      icon: '💬',
      title: 'Prepare for Interviews',
      description:
        'Practice technical questions, problem solving and role-specific interview questions.',
      status: 'Prepare',
    },
    {
      number: '06',
      icon: '💼',
      title: 'Apply for Opportunities',
      description:
        'Start applying for internships and entry-level jobs that match your skills and career goal.',
      status: 'Launch',
    },
  ];

  return (
    <section className="roadmap-page">

      <div className="feature-header">

        <div>
          <span className="feature-eyebrow">
            🗺️ CAREER PLANNER
          </span>

          <h2>Your Career Roadmap</h2>

          <p>
            A simple step-by-step path from where you
            are today to your career goal.
          </p>
        </div>

        <div className="roadmap-goal-card">

          <span className="roadmap-goal-icon">
            🎯
          </span>

          <div>
            <span>YOUR TARGET</span>
            <strong>
              {student.targetRole || 'Set your goal'}
            </strong>
          </div>

        </div>

      </div>


      <div className="roadmap-progress-card">

        <div className="roadmap-progress-info">

          <div>
            <span className="roadmap-progress-label">
              Career Journey
            </span>

            <h3>
              You're building your path 🚀
            </h3>
          </div>

          <strong>0%</strong>

        </div>

        <div className="roadmap-progress-bar">
          <div className="roadmap-progress-fill"></div>
        </div>

        <p>
          Complete each step to move closer to your
          career goal.
        </p>

      </div>


      <div className="career-roadmap">

        {steps.map((step, index) => (

          <div
            key={step.number}
            className="career-step"
          >

            <div className="career-step-line">
              {index !== steps.length - 1 && (
                <span></span>
              )}
            </div>

            <div className="career-step-number">
              {step.number}
            </div>

            <div className="career-step-card">

              <div className="career-step-top">

                <div className="career-step-icon">
                  {step.icon}
                </div>

                <span className="career-step-status">
                  {step.status}
                </span>

              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <button
                type="button"
                className="roadmap-action"
              >
                View Step
                <span>→</span>
              </button>

            </div>

          </div>

        ))}

      </div>


      <div className="roadmap-tip">

        <span className="roadmap-tip-icon">
          💡
        </span>

        <div>
          <strong>Remember</strong>

          <p>
            You don't need to learn everything at once.
            Follow the roadmap step by step and focus
            on consistent progress.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Roadmap;