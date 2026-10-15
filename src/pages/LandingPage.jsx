function LandingPage({ onGetStarted }) {
  return (
    <section className="landing-page">

      <div className="hero">

        <div className="hero-content">

          <span className="feature-eyebrow">
            🚀 AI-POWERED CAREER INTELLIGENCE
          </span>

          <h1>
            Know exactly which skills stand between you
            and the job you want.
          </h1>

          <p className="hero-sub">
            SkillLens compares your current skillset
            against what employers in your target role
            actually ask for, then gives you a clear,
            prioritized plan to close the gap.
          </p>

          <button
            className="btn-primary hero-button"
            onClick={onGetStarted}
          >
            Get Started
            <span>→</span>
          </button>

          <div className="hero-trust">
            <span>✓ Skill Gap Analysis</span>
            <span>✓ Personalized Roadmap</span>
            <span>✓ Career Readiness</span>
          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-dashboard-card">

            <div className="mini-window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mini-dashboard-content">

              <span className="mini-label">
                YOUR SKILL MATCH
              </span>

              <div className="mini-score">
                <strong>68%</strong>
                <span>Match</span>
              </div>

              <div className="mini-progress">
                <div></div>
              </div>

              <div className="mini-skills">

                <div>
                  <span>🐍</span>
                  <strong>Python</strong>
                  <small>Strong</small>
                </div>

                <div>
                  <span>🗄️</span>
                  <strong>SQL</strong>
                  <small>Needed</small>
                </div>

                <div>
                  <span>🤖</span>
                  <strong>ML</strong>
                  <small>Needed</small>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="formula">

        <div className="formula-heading">
          <span className="feature-eyebrow">
            HOW IT WORKS
          </span>

          <h2>
            From confusion to a clear career path.
          </h2>
        </div>

        <div className="formula-row">

          <div className="formula-term">
            <span className="formula-number">01</span>
            <span className="formula-label">
              Industry Requirements
            </span>
            <p>
              Skills employers list for your target role.
            </p>
          </div>

          <span className="formula-op">+</span>

          <div className="formula-term">
            <span className="formula-number">02</span>
            <span className="formula-label">
              Professional Insights
            </span>
            <p>
              What actually matters in day-to-day work.
            </p>
          </div>

          <span className="formula-op">+</span>

          <div className="formula-term">
            <span className="formula-number">03</span>
            <span className="formula-label">
              Student Skills
            </span>
            <p>
              What you already know today.
            </p>
          </div>

          <span className="formula-op">=</span>

          <div className="formula-result">
            <span className="formula-number">04</span>
            <span className="formula-label">
              Personalized Career Direction
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default LandingPage;