import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuizPage2 = () => {
    const [questions, setQuestions] = useState([
        {
            question: 'About what does the previous carousel show?',
            options: ['Corporal Punishment', 'Planting', 'Child Labour', 'Studying'],
            correctAnswer: 'Corporal Punishment',
        },
        {
            question: 'How does corporal punishment affect the psychological well-being of students in Indian schools?',
            options: ['Positively reinforces discipline', 'No significant impact', 'May lead to anxiety and stress', 'Builds resilience and character'],
            correctAnswer: 'May lead to anxiety and stress',
        },
        {
            question: 'What alternative methods to corporal punishment are promoted in Indian schools for maintaining discipline?',
            options: ['Counseling and mentoring programs', 'Expulsion of disruptive students', 'Increased homework assignments', ' Public humiliation as a deterrent'],
            correctAnswer: 'Counseling and mentoring programs',
        },
        {
            question: 'Which government body in India is responsible for enforcing regulations on corporal punishment in schools?',
            options: ['Ministry of Education', 'National Human Rights Commission', 'State Education Boards', 'Local School Management Committees'],
            correctAnswer: 'National Human Rights Commission',
        },
        {
            question: 'What measures can be taken to eradicate corporal punishment in Indian schools?',
            options: ['Stricter legal penalties for offenders', 'Teacher training programs on alternative discipline methods', 'Increased parental involvement in school policies', 'All of the above'],
            correctAnswer: 'All of the above',
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

    const buttonstyle = {
        backgroundColor: "#fff",
        padding: "20px",
        overflow: "hidden",
        width: "200px",
        margin: "10px",
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
                                <Link to="/explore"><button style={buttonstyle}><h4>Next</h4></button></Link>
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
                                        className={`button1 ${selectedAnswer === option
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
                                            width: '400px',
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

export default QuizPage2;
