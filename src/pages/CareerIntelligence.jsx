import { useMemo, useState } from 'react';

const skillData = [
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    industry: 94,
    professional: 90,
    category: 'Programming',
    level: 'Beginner',
    prerequisites: [],
    description:
      'A core programming language used extensively in data science, analytics and machine learning.',
    advice:
      'Build a strong Python foundation before moving into advanced data science libraries.',
    resource: 'Python Fundamentals',
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: '🗄️',
    industry: 88,
    professional: 84,
    category: 'Database',
    level: 'Beginner',
    prerequisites: [],
    description:
      'Used to store, query, filter and analyze structured data in databases.',
    advice:
      'Practice writing queries regularly using real datasets.',
    resource: 'SQL & Databases',
  },
  {
    id: 'statistics',
    name: 'Statistics',
    icon: '📊',
    industry: 82,
    professional: 78,
    category: 'Data Science',
    level: 'Beginner',
    prerequisites: ['python'],
    description:
      'Helps you understand data, probability, distributions and relationships between variables.',
    advice:
      'Focus on probability, distributions, correlation and hypothesis testing.',
    resource: 'Statistics for Data Science',
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: '🤖',
    industry: 93,
    professional: 89,
    category: 'Artificial Intelligence',
    level: 'Intermediate',
    prerequisites: ['python', 'statistics'],
    description:
      'Allows computers to learn patterns from data and make predictions.',
    advice:
      'Learn the fundamentals and then build small ML projects.',
    resource: 'Machine Learning Fundamentals',
  },
  {
    id: 'dl',
    name: 'Deep Learning',
    icon: '🧠',
    industry: 76,
    professional: 72,
    category: 'Artificial Intelligence',
    level: 'Advanced',
    prerequisites: ['python', 'ml'],
    description:
      'Uses neural networks to solve complex problems involving large amounts of data.',
    advice:
      'Learn this after developing a strong ML foundation.',
    resource: 'Deep Learning Basics',
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    industry: 58,
    professional: 55,
    category: 'DevOps',
    level: 'Intermediate',
    prerequisites: [],
    description:
      'Used to package applications and their dependencies into portable containers.',
    advice:
      'Learn Docker after you are comfortable building and running applications.',
    resource: 'Docker Fundamentals',
  },
];

const jobData = [
  {
    title: 'Junior Data Scientist',
    company: 'Tech Analytics',
    location: 'Bengaluru',
    required: ['python', 'sql', 'statistics', 'ml'],
  },
  {
    title: 'Data Analyst',
    company: 'Data Insights',
    location: 'Bengaluru',
    required: ['python', 'sql', 'statistics'],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'AI Systems',
    location: 'Bengaluru',
    required: ['python', 'ml', 'statistics', 'docker'],
  },
  {
    title: 'AI / ML Intern',
    company: 'Innovation Labs',
    location: 'Remote',
    required: ['python', 'ml'],
  },
];

function CareerIntelligence({ selectedSkills, setSelectedSkills }) {
  const [activeTab, setActiveTab] = useState('insights');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [resumeText, setResumeText] = useState('');
  const [resumeResult, setResumeResult] = useState(null);
  const [simulationSkill, setSimulationSkill] = useState('');
  const [completedSkills, setCompletedSkills] =
    useState(selectedSkills);

  const getSkill = (id) =>
    skillData.find((skill) => skill.id === id);

  const prioritySkills = useMemo(() => {
    return skillData
      .filter((skill) => !selectedSkills.includes(skill.id))
      .map((skill) => ({
        ...skill,
        priority: Math.round(
          skill.industry * 0.6 +
            skill.professional * 0.4
        ),
      }))
      .sort((a, b) => b.priority - a.priority);
  }, [selectedSkills]);

  const averageIndustry = Math.round(
    skillData.reduce(
      (sum, skill) => sum + skill.industry,
      0
    ) / skillData.length
  );

  const averageProfessional = Math.round(
    skillData.reduce(
      (sum, skill) => sum + skill.professional,
      0
    ) / skillData.length
  );

  const toggleCompleted = (id) => {
    setCompletedSkills((previous) =>
      previous.includes(id)
        ? previous.filter((skillId) => skillId !== id)
        : [...previous, id]
    );
  };

  const analyzeResume = () => {
    const text = resumeText.toLowerCase();

    const detected = skillData.filter((skill) => {
      const keywords = [
        skill.name.toLowerCase(),
        ...(skill.id === 'ml'
          ? ['machine learning', 'machine-learning']
          : []),
        ...(skill.id === 'dl'
          ? ['deep learning', 'deep-learning']
          : []),
      ];

      return keywords.some((keyword) =>
        text.includes(keyword)
      );
    });

    const detectedIds = detected.map((skill) => skill.id);

    const missing = skillData.filter(
      (skill) => !detectedIds.includes(skill.id)
    );

    const match = Math.round(
      (detected.length / skillData.length) * 100
    );

    setResumeResult({
      detected,
      missing,
      match,
    });
  };

  const handleResumeFile = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (
      file.type === 'text/plain' ||
      file.name.endsWith('.txt') ||
      file.name.endsWith('.md')
    ) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setResumeText(e.target.result || '');
      };

      reader.readAsText(file);
    } else {
      alert(
        'For this prototype, please paste your resume text or upload a .txt file. PDF/DOCX parsing can be connected to the backend later.'
      );
    }
  };

  const getJobMatch = (job) => {
    const matched = job.required.filter((id) =>
      selectedSkills.includes(id)
    );

    return Math.round(
      (matched.length / job.required.length) * 100
    );
  };

  const simulatedMatch = Math.round(
    (selectedSkills.length /
      skillData.length) *
      100
  );

  const simulationResult = simulationSkill
    ? Math.round(
        ((selectedSkills.length + 1) /
          skillData.length) *
          100
      )
    : simulatedMatch;

  const roadmapSkills = prioritySkills.slice(0, 4);

  const tabs = [
    {
      id: 'insights',
      icon: '📊',
      label: 'Professional Insights',
    },
    {
      id: 'compare',
      icon: '🔍',
      label: 'Industry vs Me',
    },
    {
      id: 'priority',
      icon: '🎯',
      label: 'Smart Priority',
    },
    {
      id: 'roadmap',
      icon: '🗺️',
      label: 'Dynamic Roadmap',
    },
    {
      id: 'resume',
      icon: '📄',
      label: 'Resume Analyzer',
    },
    {
      id: 'jobs',
      icon: '💼',
      label: 'Job Matching',
    },
    {
      id: 'simulator',
      icon: '📈',
      label: 'Skill Simulator',
    },
    {
      id: 'progress',
      icon: '🏆',
      label: 'Skill Progress',
    },
  ];

  return (
    <section className="career-intelligence-page">

      <div className="feature-header">
        <div>
          <span className="feature-eyebrow">
            🧠 SKILL INTELLIGENCE
          </span>

          <h2>Career Intelligence Center</h2>

          <p>
            Understand what the industry needs, compare
            it with your current skills and discover what
            you should learn next.
          </p>
        </div>

        <div className="intelligence-score-card">
          <span>YOUR CURRENT MATCH</span>
          <strong>{simulatedMatch}%</strong>
          <small>
            {selectedSkills.length} of {skillData.length}{' '}
            skills
          </small>
        </div>
      </div>

      <div className="career-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={
              activeTab === tab.id
                ? 'career-tab career-tab-active'
                : 'career-tab'
            }
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'insights' && (
        <>
          <div className="intelligence-stats">
            <div className="intelligence-stat">
              <span>📊</span>
              <div>
                <strong>{averageIndustry}%</strong>
                <small>Average Industry Demand</small>
              </div>
            </div>

            <div className="intelligence-stat">
              <span>🧑‍💼</span>
              <div>
                <strong>{averageProfessional}%</strong>
                <small>Professional Recommendation</small>
              </div>
            </div>

            <div className="intelligence-stat">
              <span>🎯</span>
              <div>
                <strong>{prioritySkills.length}</strong>
                <small>Skills To Develop</small>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div>
                <h3>What Professionals Recommend</h3>
                <p>
                  Sample professional insights. These
                  values can later be calculated from your
                  survey responses.
                </p>
              </div>
            </div>

            <div className="insight-skill-list">
              {skillData
                .sort(
                  (a, b) =>
                    b.professional -
                    a.professional
                )
                .map((skill) => (
                  <div
                    key={skill.id}
                    className="insight-skill-row"
                  >
                    <div className="insight-skill-name">
                      <span>{skill.icon}</span>
                      <strong>{skill.name}</strong>
                    </div>

                    <div className="insight-bar">
                      <div
                        style={{
                          width: `${skill.professional}%`,
                        }}
                      ></div>
                    </div>

                    <strong>
                      {skill.professional}%
                    </strong>
                  </div>
                ))}
            </div>
          </div>

          <div className="professional-advice-grid">
            <div className="advice-card">
              <span>💡</span>
              <h3>Build projects</h3>
              <p>
                Professionals recommend applying
                concepts through real projects instead
                of only collecting certificates.
              </p>
            </div>

            <div className="advice-card">
              <span>🎯</span>
              <h3>Learn the fundamentals</h3>
              <p>
                Build a strong foundation before moving
                into advanced technologies.
              </p>
            </div>

            <div className="advice-card">
              <span>🚀</span>
              <h3>Stay industry focused</h3>
              <p>
                Prioritize skills that repeatedly appear
                in real job requirements.
              </p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'compare' && (
        <div className="feature-card">
          <div className="feature-card-header">
            <div>
              <h3>Industry vs Your Skills</h3>
              <p>
                See exactly where your current profile
                differs from industry expectations.
              </p>
            </div>
          </div>

          <div className="comparison-table">
            <div className="comparison-header">
              <span>Skill</span>
              <span>Your Status</span>
              <span>Industry Demand</span>
              <span>Professional</span>
              <span>Gap</span>
            </div>

            {skillData.map((skill) => {
              const known =
                selectedSkills.includes(skill.id);

              return (
                <div
                  key={skill.id}
                  className="comparison-row"
                >
                  <span>
                    {skill.icon} {skill.name}
                  </span>

                  <span
                    className={
                      known
                        ? 'status-good'
                        : 'status-missing'
                    }
                  >
                    {known ? '✓ Known' : '✗ Missing'}
                  </span>

                  <span>
                    {skill.industry}%
                  </span>

                  <span>
                    {skill.professional}%
                  </span>

                  <span>
                    {known
                      ? '0%'
                      : `${skill.industry}%`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'priority' && (
        <>
          <div className="priority-explanation">
            <span>🧠</span>
            <div>
              <strong>
                How is priority calculated?
              </strong>
              <p>
                Priority combines industry demand and
                professional recommendations. Later,
                these values will come from your actual
                collected data.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div>
                <h3>Your Learning Priorities</h3>
                <p>
                  Start from the top and work your way
                  down.
                </p>
              </div>
            </div>

            <div className="smart-priority-list">
              {prioritySkills.map(
                (skill, index) => (
                  <div
                    key={skill.id}
                    className="smart-priority-row"
                  >
                    <div className="priority-number">
                      {index + 1}
                    </div>

                    <div className="priority-icon">
                      {skill.icon}
                    </div>

                    <div className="priority-content">
                      <div>
                        <h4>{skill.name}</h4>
                        <span>
                          {skill.category}
                        </span>
                      </div>

                      <div className="priority-score">
                        <strong>
                          {skill.priority}%
                        </strong>

                        <small>
                          Priority Score
                        </small>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedSkill(skill)
                      }
                      className="details-button"
                    >
                      Details →
                    </button>
                  </div>
                )
              )}

              {prioritySkills.length === 0 && (
                <div className="empty-feature">
                  🎉 You have covered all available
                  skills!
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {activeTab === 'roadmap' && (
        <>
          <div className="feature-card roadmap-intelligence-card">
            <div>
              <span className="small-label">
                PERSONALIZED ROADMAP
              </span>

              <h3>
                Your roadmap changes according to
                your skill gaps.
              </h3>

              <p>
                SkillLens prioritizes your missing
                skills before projects, portfolio and
                interview preparation.
              </p>
            </div>

            <div className="roadmap-match">
              {simulatedMatch}%
              <small>Current Match</small>
            </div>
          </div>

          <div className="dynamic-roadmap">
            {roadmapSkills.map((skill, index) => (
              <div
                key={skill.id}
                className="dynamic-roadmap-step"
              >
                <div className="dynamic-step-number">
                  {index + 1}
                </div>

                <div className="dynamic-step-icon">
                  {skill.icon}
                </div>

                <div>
                  <span className="small-label">
                    PRIORITY {index + 1}
                  </span>

                  <h3>
                    Learn {skill.name}
                  </h3>

                  <p>
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="dynamic-roadmap-step">
              <div className="dynamic-step-number">
                {roadmapSkills.length + 1}
              </div>

              <div className="dynamic-step-icon">
                🛠️
              </div>

              <div>
                <span className="small-label">
                  NEXT
                </span>

                <h3>Build a Real Project</h3>

                <p>
                  Apply your skills to a practical
                  project that you can add to your
                  portfolio.
                </p>
              </div>
            </div>

            <div className="dynamic-roadmap-step">
              <div className="dynamic-step-number">
                {roadmapSkills.length + 2}
              </div>

              <div className="dynamic-step-icon">
                💼
              </div>

              <div>
                <span className="small-label">
                  FINAL
                </span>

                <h3>Prepare for Opportunities</h3>

                <p>
                  Build your resume, prepare for
                  interviews and start applying.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'resume' && (
        <>
          <div className="resume-analyzer-card">
            <div className="resume-icon">
              📄
            </div>

            <div>
              <span className="small-label">
                RESUME INTELLIGENCE
              </span>

              <h3>
                Analyze your resume against your
                skills database
              </h3>

              <p>
                Paste your resume text below. SkillLens
                will detect relevant skills and identify
                missing ones.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <label className="resume-upload">
              <span>📁</span>
              <strong>
                Upload a text resume
              </strong>
              <small>
                TXT or MD for this prototype
              </small>

              <input
                type="file"
                accept=".txt,.md,text/plain"
                onChange={handleResumeFile}
              />
            </label>

            <textarea
              className="resume-textarea"
              value={resumeText}
              onChange={(e) =>
                setResumeText(e.target.value)
              }
              placeholder="Paste your resume text here...

Example:
Python, SQL, Pandas, NumPy
Machine Learning
Data Analysis
Statistics"
            ></textarea>

            <button
              type="button"
              className="btn-primary"
              onClick={analyzeResume}
              disabled={!resumeText.trim()}
            >
              Analyze Resume
            </button>
          </div>

          {resumeResult && (
            <div className="resume-results">
              <div className="resume-match-card">
                <span>RESUME SKILL MATCH</span>
                <strong>
                  {resumeResult.match}%
                </strong>
              </div>

              <div className="feature-card">
                <h3>Skills Found</h3>

                <div className="resume-skill-chips">
                  {resumeResult.detected.map(
                    (skill) => (
                      <span key={skill.id}>
                        ✓ {skill.name}
                      </span>
                    )
                  )}

                  {resumeResult.detected.length ===
                    0 && (
                    <p>
                      No tracked skills were detected.
                    </p>
                  )}
                </div>
              </div>

              <div className="feature-card">
                <h3>Missing Skills</h3>

                <div className="resume-skill-chips missing">
                  {resumeResult.missing.map(
                    (skill) => (
                      <span key={skill.id}>
                        ✗ {skill.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {activeTab === 'jobs' && (
        <div className="job-matching-grid">
          {jobData.map((job) => {
            const match = getJobMatch(job);

            return (
              <article
                key={job.title}
                className="job-match-card"
              >
                <div className="job-match-top">
                  <div className="job-company-icon">
                    💼
                  </div>

                  <span
                    className={`job-match-badge ${
                      match >= 75
                        ? 'job-match-high'
                        : match >= 50
                        ? 'job-match-medium'
                        : 'job-match-low'
                    }`}
                  >
                    {match}% Match
                  </span>
                </div>

                <span className="small-label">
                  {job.company}
                </span>

                <h3>{job.title}</h3>

                <p>📍 {job.location}</p>

                <div className="job-required">
                  <strong>Required skills</strong>

                  {job.required.map((id) => {
                    const skill = getSkill(id);
                    const known =
                      selectedSkills.includes(id);

                    return (
                      <span
                        key={id}
                        className={
                          known
                            ? 'job-skill-known'
                            : 'job-skill-missing'
                        }
                      >
                        {known ? '✓' : '✗'}{' '}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="job-view-button"
                  onClick={() =>
                    alert(
                      `Job application integration can be connected to a real job API later.`
                    )
                  }
                >
                  View Opportunity →
                </button>
              </article>
            );
          })}
        </div>
      )}

      {activeTab === 'simulator' && (
        <div className="feature-card simulator-card">
          <div className="feature-card-header">
            <div>
              <span className="small-label">
                WHAT-IF ANALYSIS
              </span>

              <h3>
                What if you learn another skill?
              </h3>

              <p>
                See how adding a missing skill could
                improve your current skill match.
              </p>
            </div>
          </div>

          <div className="simulator-current">
            <span>Current Match</span>
            <strong>{simulatedMatch}%</strong>
          </div>

          <div className="simulator-selector">
            <label>
              Select a skill to learn
            </label>

            <select
              value={simulationSkill}
              onChange={(e) =>
                setSimulationSkill(e.target.value)
              }
            >
              <option value="">
                Select a missing skill
              </option>

              {skillData
                .filter(
                  (skill) =>
                    !selectedSkills.includes(
                      skill.id
                    )
                )
                .map((skill) => (
                  <option
                    key={skill.id}
                    value={skill.id}
                  >
                    {skill.name}
                  </option>
                ))}
            </select>
          </div>

          {simulationSkill && (
            <div className="simulation-result">
              <div>
                <span>BEFORE</span>
                <strong>
                  {simulatedMatch}%
                </strong>
              </div>

              <div className="simulation-arrow">
                →
              </div>

              <div>
                <span>AFTER LEARNING</span>
                <strong>
                  {simulationResult}%
                </strong>
              </div>
            </div>
          )}

          {simulationSkill && (
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setSelectedSkills((previous) =>
                  previous.includes(simulationSkill)
                    ? previous
                    : [
                        ...previous,
                        simulationSkill,
                      ]
                );

                setCompletedSkills((previous) =>
                  previous.includes(simulationSkill)
                    ? previous
                    : [
                        ...previous,
                        simulationSkill,
                      ]
                );

                setSimulationSkill('');
              }}
            >
              Add This Skill to My Profile
            </button>
          )}
        </div>
      )}

      {activeTab === 'progress' && (
        <>
          <div className="feature-card">
            <div className="feature-card-header">
              <div>
                <h3>Skill Completion</h3>
                <p>
                  Mark skills as completed as you
                  develop them.
                </p>
              </div>

              <strong className="completion-percent">
                {Math.round(
                  (completedSkills.length /
                    skillData.length) *
                    100
                )}
                %
              </strong>
            </div>

            <div className="completion-bar">
              <div
                style={{
                  width: `${
                    (completedSkills.length /
                      skillData.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>

            <div className="completion-skill-grid">
              {skillData.map((skill) => {
                const completed =
                  completedSkills.includes(
                    skill.id
                  );

                return (
                  <button
                    key={skill.id}
                    type="button"
                    className={
                      completed
                        ? 'completion-skill completed'
                        : 'completion-skill'
                    }
                    onClick={() =>
                      toggleCompleted(skill.id)
                    }
                  >
                    <span>{skill.icon}</span>

                    <strong>{skill.name}</strong>

                    <small>
                      {completed
                        ? '✓ Completed'
                        : 'Mark Complete'}
                    </small>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {selectedSkill && (
        <div
          className="skill-detail-overlay"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="skill-detail-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              type="button"
              className="modal-close"
              onClick={() =>
                setSelectedSkill(null)
              }
            >
              ×
            </button>

            <div className="skill-detail-icon">
              {selectedSkill.icon}
            </div>

            <span className="small-label">
              {selectedSkill.category}
            </span>

            <h2>{selectedSkill.name}</h2>

            <p>
              {selectedSkill.description}
            </p>

            <div className="detail-score-grid">
              <div>
                <span>Industry Demand</span>
                <strong>
                  {selectedSkill.industry}%
                </strong>
              </div>

              <div>
                <span>Professional Rating</span>
                <strong>
                  {selectedSkill.professional}%
                </strong>
              </div>

              <div>
                <span>Priority</span>
                <strong>
                  {Math.round(
                    selectedSkill.industry *
                      0.6 +
                      selectedSkill.professional *
                        0.4
                  )}
                  %
                </strong>
              </div>
            </div>

            <div className="detail-advice">
              <strong>
                💡 Professional Advice
              </strong>

              <p>
                {selectedSkill.advice}
              </p>
            </div>

            <div className="detail-resource">
              <span>📚 Recommended Resource</span>
              <strong>
                {selectedSkill.resource}
              </strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CareerIntelligence;