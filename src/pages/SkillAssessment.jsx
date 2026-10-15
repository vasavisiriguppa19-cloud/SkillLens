import { useState } from "react";
import "./SkillAssessment.css";

const questions = [
  {
    skill: "Python",
    question: "Which of the following is used to store multiple values in Python?",
    options: ["Variable", "List", "Function", "Module"],
    answer: "List",
  },
  {
    skill: "Python",
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    answer: "def",
  },
  {
    skill: "SQL",
    question: "Which SQL command is used to retrieve data from a table?",
    options: ["GET", "SELECT", "FETCH", "READ"],
    answer: "SELECT",
  },
  {
    skill: "SQL",
    question: "Which SQL clause is used to filter records?",
    options: ["WHERE", "FILTER", "SEARCH", "HAVING"],
    answer: "WHERE",
  },
  {
    skill: "Machine Learning",
    question: "Which of the following is a supervised learning algorithm?",
    options: [
      "Linear Regression",
      "K-Means",
      "PCA",
      "Apriori",
    ],
    answer: "Linear Regression",
  },
  {
    skill: "Machine Learning",
    question: "What is the purpose of a training dataset?",
    options: [
      "To test the final model",
      "To train the model",
      "To delete data",
      "To create charts",
    ],
    answer: "To train the model",
  },
  {
    skill: "Statistics",
    question: "What does the mean represent?",
    options: [
      "The middle value",
      "The most frequent value",
      "The average value",
      "The largest value",
    ],
    answer: "The average value",
  },
  {
    skill: "Statistics",
    question: "Which measure represents the middle value of sorted data?",
    options: ["Mean", "Median", "Mode", "Range"],
    answer: "Median",
  },
];

function SkillAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleNext = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === question.answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setFinished(false);
  };

  const getFinalScore = () => {
    let finalScore = score;

    if (
      selectedAnswer &&
      question &&
      selectedAnswer === question.answer
    ) {
      finalScore += 1;
    }

    return finalScore;
  };

  const finalScore = getFinalScore();
  const percentage = Math.round(
    (finalScore / questions.length) * 100
  );

  const getLevel = () => {
    if (percentage >= 80) {
      return "Advanced";
    }

    if (percentage >= 50) {
      return "Intermediate";
    }

    return "Beginner";
  };

  const getMessage = () => {
    if (percentage >= 80) {
      return "Excellent! You have a strong foundation. 🚀";
    }

    if (percentage >= 50) {
      return "Good progress! Keep strengthening your skills. 💪";
    }

    return "Let's build your fundamentals step by step. 🌱";
  };

  if (finished) {
    return (
      <div className="assessment-page">
        <div className="assessment-result">

          <div className="result-icon">🎯</div>

          <span className="assessment-label">
            SKILLLENS ASSESSMENT
          </span>

          <h1>Assessment Complete!</h1>

          <p className="result-description">
            Here's your current skill assessment result.
          </p>

          <div className="score-circle">
            <strong>{percentage}%</strong>
            <span>Score</span>
          </div>

          <div className="result-grid">

            <div className="result-box">
              <span>Correct Answers</span>
              <strong>
                {finalScore} / {questions.length}
              </strong>
            </div>

            <div className="result-box">
              <span>Estimated Level</span>
              <strong>{getLevel()}</strong>
            </div>

          </div>

          <div className="result-message">
            <h3>{getMessage()}</h3>

            <p>
              SkillLens can use this assessment result to
              understand which areas you need to improve.
            </p>
          </div>

          <button
            className="assessment-primary-button"
            onClick={restartQuiz}
          >
            Retake Assessment
          </button>

        </div>
      </div>
    );
  }

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="assessment-page">

      <div className="assessment-container">

        {/* HEADER */}

        <div className="assessment-header">

          <div>
            <span className="assessment-label">
              SKILLLENS ASSESSMENT
            </span>

            <h1>Test Your Skills</h1>

            <p>
              Answer a few questions to understand your
              current skill level.
            </p>
          </div>

          <div className="question-number">
            {currentQuestion + 1} / {questions.length}
          </div>

        </div>

        {/* PROGRESS */}

        <div className="progress-container">

          <div
            className="assessment-progress"
            style={{ width: `${progress}%` }}
          />

        </div>

        {/* SKILL */}

        <div className="skill-tag">
          {question.skill}
        </div>

        {/* QUESTION */}

        <div className="question-card">

          <h2>{question.question}</h2>

          <div className="answer-options">

            {question.options.map((option) => (

              <button
                key={option}
                className={`answer-option ${
                  selectedAnswer === option
                    ? "answer-selected"
                    : ""
                }`}
                onClick={() => setSelectedAnswer(option)}
              >

                <span className="answer-circle">
                  {selectedAnswer === option ? "✓" : ""}
                </span>

                <span>{option}</span>

              </button>

            ))}

          </div>

          <button
            className="next-question-button"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Assessment"
              : "Next Question →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default SkillAssessment;