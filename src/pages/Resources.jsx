const resources = [
  {
    category: 'Programming',
    title: 'Python Fundamentals',
    description:
      'Learn Python syntax, functions, data structures and object-oriented programming.',
    icon: '🐍',
    level: 'Beginner',
    type: 'Course',
    duration: '6 weeks',
    link: 'https://docs.python.org/3/tutorial/',
  },
  {
    category: 'Database',
    title: 'SQL & Databases',
    description:
      'Learn how to query, filter, join and analyze data stored in databases.',
    icon: '🗄️',
    level: 'Beginner',
    type: 'Course',
    duration: '4 weeks',
    link: 'https://sqlbolt.com/',
  },
  {
    category: 'Data Science',
    title: 'Statistics for Data Science',
    description:
      'Understand probability, distributions, correlation and the statistical concepts used in data science.',
    icon: '📊',
    level: 'Beginner',
    type: 'Learning Path',
    duration: '5 weeks',
    link: 'https://www.khanacademy.org/math/statistics-probability',
  },
  {
    category: 'Machine Learning',
    title: 'Machine Learning Fundamentals',
    description:
      'Learn supervised learning, unsupervised learning, model evaluation and common ML algorithms.',
    icon: '🤖',
    level: 'Intermediate',
    type: 'Learning Path',
    duration: '8 weeks',
    link: 'https://developers.google.com/machine-learning/crash-course',
  },
  {
    category: 'Deep Learning',
    title: 'Deep Learning Basics',
    description:
      'Understand neural networks, training, activation functions and the basics of deep learning.',
    icon: '🧠',
    level: 'Intermediate',
    type: 'Course',
    duration: '7 weeks',
    link: 'https://www.deeplearning.ai/courses/',
  },
  {
    category: 'DevOps',
    title: 'Docker Fundamentals',
    description:
      'Learn containers, images and the basics of packaging and running applications with Docker.',
    icon: '🐳',
    level: 'Beginner',
    type: 'Course',
    duration: '3 weeks',
    link: 'https://docs.docker.com/get-started/',
  },
];

function Resources({ selectedSkills }) {
  const recommendedResources = resources.filter((resource) => {
    const title = resource.title.toLowerCase();

    if (
      title.includes('python') &&
      !selectedSkills.includes('python')
    )
      return true;

    if (
      title.includes('sql') &&
      !selectedSkills.includes('sql')
    )
      return true;

    if (
      title.includes('statistics') &&
      !selectedSkills.includes('statistics')
    )
      return true;

    if (
      title.includes('machine learning') &&
      !selectedSkills.includes('ml')
    )
      return true;

    if (
      title.includes('deep learning') &&
      !selectedSkills.includes('dl')
    )
      return true;

    if (
      title.includes('docker') &&
      !selectedSkills.includes('docker')
    )
      return true;

    return false;
  });

  const displayResources =
    recommendedResources.length > 0
      ? recommendedResources
      : resources;

  const handleStartLearning = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="resources-page">
      <div className="feature-header">
        <div>
          <span className="feature-eyebrow">
            📚 LEARNING HUB
          </span>

          <h2>Learning Resources</h2>

          <p>
            Curated learning paths to help you close your
            skill gaps and move toward your career goal.
          </p>
        </div>

        <div className="resource-count-card">
          <span className="resource-count">
            {displayResources.length}
          </span>

          <span className="resource-count-label">
            Recommended Resources
          </span>
        </div>
      </div>

      <div className="resources-banner">
        <div className="resources-banner-icon">
          ✨
        </div>

        <div>
          <h3>
            Recommended for your skill journey
          </h3>

          <p>
            Based on the skills you selected, start with
            the resources that can help you build your
            missing skills.
          </p>
        </div>
      </div>

      <div className="resources-grid">
        {displayResources.map((resource) => (
          <article
            key={resource.title}
            className="resource-card"
          >
            <div className="resource-card-top">
              <div className="resource-icon">
                {resource.icon}
              </div>

              <span className="resource-type">
                {resource.type}
              </span>
            </div>

            <span className="resource-category">
              {resource.category}
            </span>

            <h3>{resource.title}</h3>

            <p className="resource-description">
              {resource.description}
            </p>

            <div className="resource-meta">
              <span>
                📈 {resource.level}
              </span>

              <span>
                ⏱️ {resource.duration}
              </span>
            </div>

            <button
              type="button"
              className="resource-button"
              onClick={() =>
                handleStartLearning(resource.link)
              }
            >
              Start Learning
              <span>→</span>
            </button>
          </article>
        ))}
      </div>

      <div className="learning-tip">
        <span className="learning-tip-icon">
          💡
        </span>

        <div>
          <strong>Learning Tip</strong>

          <p>
            Don't just watch tutorials. After learning a
            concept, practice it by solving problems or
            building a small project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resources;