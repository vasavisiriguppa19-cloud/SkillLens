import {
  ALL_SKILLS,
  SKILL_PRIORITY,
} from '../data/skillsData';

function SkillsPage({
  selectedSkills,
  setSelectedSkills,
  onAnalyze,
  isSetup = false,
}) {
  const toggleSkill = (id) => {
    setSelectedSkills((prev) =>
      prev.includes(id)
        ? prev.filter((skill) => skill !== id)
        : [...prev, id]
    );
  };

  const knownSkills = ALL_SKILLS.filter(
    (skill) => selectedSkills.includes(skill.id)
  );

  const skillsToLearn = ALL_SKILLS.filter(
    (skill) => !selectedSkills.includes(skill.id)
  );

  return (
    <section className="skills-page">

      <div className="feature-header">

        <div>

          <span className="feature-eyebrow">
            🧠 SKILL PROFILE
          </span>

          <h2>
            {isSetup
              ? 'What skills do you have?'
              : 'My Skills'}
          </h2>

          <p>
            {isSetup
              ? 'Select the technical skills you already know.'
              : 'Manage your current skills and see which ones you still need to learn.'}
          </p>

        </div>

        {!isSetup && (
          <div className="skills-summary-card">
            <span className="skills-summary-number">
              {selectedSkills.length}
            </span>

            <span className="skills-summary-label">
              Skills Known
            </span>
          </div>
        )}

      </div>


      <div className="feature-card">

        <div className="feature-card-header">

          <div>
            <h3>
              {isSetup
                ? 'Select Your Skills'
                : 'Your Current Skills'}
            </h3>

            <p>
              {isSetup
                ? 'Choose all the skills that you already have experience with.'
                : 'Click a skill to add or remove it from your profile.'}
            </p>
          </div>

          <span className="skill-count">
            {selectedSkills.length} selected
          </span>

        </div>


        <div className="skills-grid">

          {ALL_SKILLS.map((skill) => {

            const isSelected =
              selectedSkills.includes(skill.id);

            return (
              <button
                key={skill.id}
                type="button"
                className={`skill-card ${
                  isSelected
                    ? 'skill-card-selected'
                    : ''
                }`}
                onClick={() =>
                  toggleSkill(skill.id)
                }
              >

                <span className="skill-icon">
                  {skill.icon}
                </span>

                <span className="skill-name">
                  {skill.name}
                </span>

                <span className="skill-priority-small">
                  {SKILL_PRIORITY[skill.id]} priority
                </span>

                <span className="skill-check">
                  {isSelected ? '✓' : ''}
                </span>

              </button>
            );
          })}

        </div>


        {isSetup && (
          <button
            className="btn-primary"
            disabled={selectedSkills.length === 0}
            onClick={onAnalyze}
          >
            Analyze My Skills
            <span>→</span>
          </button>
        )}

      </div>


      {!isSetup && (
        <div className="skills-status-grid">

          <div className="feature-card">

            <div className="feature-card-header">

              <div>
                <h3>✅ Skills You Know</h3>
                <p>
                  Skills you've marked as already known.
                </p>
              </div>

              <span className="skill-count">
                {knownSkills.length}
              </span>

            </div>


            {knownSkills.length === 0 ? (

              <div className="skills-empty">
                <span>🧠</span>
                <p>No skills selected yet.</p>
              </div>

            ) : (

              <div className="skills-status-list">

                {knownSkills.map((skill) => (

                  <div
                    key={skill.id}
                    className="skills-status-item"
                  >

                    <span className="skills-status-icon">
                      {skill.icon}
                    </span>

                    <div>
                      <strong>{skill.name}</strong>
                      <span>Currently known</span>
                    </div>

                    <span className="skills-status-check">
                      ✓
                    </span>

                  </div>

                ))}

              </div>
            )}

          </div>


          <div className="feature-card">

            <div className="feature-card-header">

              <div>
                <h3>🎯 Skills to Learn</h3>
                <p>
                  Skills you haven't selected yet.
                </p>
              </div>

              <span className="skill-count">
                {skillsToLearn.length}
              </span>

            </div>


            {skillsToLearn.length === 0 ? (

              <div className="skills-empty">
                <span>🎉</span>
                <p>
                  You've selected all available skills!
                </p>
              </div>

            ) : (

              <div className="skills-status-list">

                {skillsToLearn.map((skill) => (

                  <div
                    key={skill.id}
                    className="skills-status-item"
                  >

                    <span className="skills-status-icon">
                      {skill.icon}
                    </span>

                    <div>
                      <strong>{skill.name}</strong>
                      <span>
                        {SKILL_PRIORITY[skill.id]} priority
                      </span>
                    </div>

                    <button
                      type="button"
                      className="skills-add-button"
                      onClick={() =>
                        toggleSkill(skill.id)
                      }
                    >
                      + Add
                    </button>

                  </div>

                ))}

              </div>
            )}

          </div>

        </div>
      )}

    </section>
  );
}

export default SkillsPage;