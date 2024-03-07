import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuizPage1 = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'About which right does the previous carousel show?',
      options: ['Speech', 'Play', 'Child Labour', 'Safety'],
      correctAnswer: 'Child Labour',
    },
    {
      question:'What is the primary reason behind child labor in many developing countries?',
      options: ['High wages for child workers', 'Lack of education opportunities', 'Abundance of adult labor', 'Excessive government regulations'],
      correctAnswer: 'Lack of education opportunities',
    },
    {
      question: ' What is the minimum age for employment according to the International Labour Organization (ILO) Convention No. 138?',
      options: ['12 years', '14 years', '16 years', '18 years'],
      correctAnswer: '18 years',
    },
    {
      question: 'How does child labor impact a child\'s education?',
      options: ['Hinders access to education', 'Has no impact on education', 'Enhances educational opportunities', 'Provides alternative learning experiences'],
      correctAnswer: 'Hinders access to education',
    },
    {
      question: 'Which international organization works to eliminate child labor and promote the rights of children globally?',
      options: ['United Nations Educational, Scientific and Cultural Organization (UNESCO)', 'World Health Organization (WHO)', 'International Monetary Fund (IMF)', 'International Labour Organization (ILO)'],
      correctAnswer: 'International Labour Organization (ILO)',
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleAnswerClick = (option) => {
    if (showScore) {
      return;
    }

    setSelectedAnswer(option);
    setCorrectAnswer(questions[currentQuestion].correctAnswer);

    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 5);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setCorrectAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
  };

  const buttonstyle={
    backgroundColor:"#fff",
    padding:"20px",
    overflow:"hidden",
    width:"200px",
    margin:"10px",
  };

  return (
    <div>
      <section id="background-image">
        <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1703582290/ytvimg_k8xmkm.jpg" alt="Background" />
        <div className="quiz-container">
          <div className="heading-box text-center mb style={{ width: '100%' }}">
            <h2>QUIZ</h2>
          </div>
          {showScore ? (
            <div className="score-section-box" >
              <div className="score-section">
                <h2>You scored {score} out of 25!</h2>
                <button onClick={handleRestartQuiz} style={buttonstyle}><h4>Restart Quiz</h4></button>
                <Link to="/stories"><button style={buttonstyle}><h4>Next</h4></button></Link>
              </div>
            </div>
          ) : (
            <div className="question-section">
              <h2 className="question-text">{questions[currentQuestion].question}</h2>
              <div className="answer-section">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className={`button1 ${
                      selectedAnswer === option
                        ? option === questions[currentQuestion].correctAnswer
                          ? 'correct-answer'
                          : 'wrong-answer'
                        : ''
                    }`}
                    style={{
                      backgroundColor: selectedAnswer === option
                        ? option === questions[currentQuestion].correctAnswer
                          ? '#4caf50'
                          : '#f44336'
                        : '#fff',
                      color: '#000',
                      padding: '10px',
                      margin: '10px',
                      width:'400px',
                      cursor: 'pointer'
                    }}
                  >
                    {option}
                  </button>
                ))}
                {selectedAnswer !== questions[currentQuestion].correctAnswer && (
                  <p className="correct-answer-text">Correct Answer: {correctAnswer}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default QuizPage1;
