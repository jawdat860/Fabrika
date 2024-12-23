import React, { useState } from "react";

const Questionnaire = () => {
  // Define your questions
  const questions = [
    {
      id: 1,
      question: "Do you like programming?",
      options: [
        { text: "Yes", nextQuestion: 2 },
        { text: "No", nextQuestion: 3 }
      ]
    },
    {
      id: 2,
      question: "Which language do you prefer?",
      options: [
        { text: "JavaScript", nextQuestion: 4 },
        { text: "Python", nextQuestion: 4 }
      ]
    },
    {
      id: 3,
      question: "What is your favorite hobby?",
      options: [
        { text: "Reading", nextQuestion: 4 },
        { text: "Gaming", nextQuestion: 4 }
      ]
    },
    {
      id: 4,
      question: "Do you prefer working alone or in a team?",
      options: [
        { text: "Alone", nextQuestion: 5 },
        { text: "Team", nextQuestion: 5 }
      ]
    },
    {
      id: 5,
      question: "Would you like to learn something new?",
      options: [
        { text: "Yes", nextQuestion: null },
        { text: "No", nextQuestion: null }
      ]
    }
  ];

  // State for tracking the current question, answers, and navigation
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [responses, setResponses] = useState({});

  const currentQuestion = questions[currentQuestionIndex];

  // Handle selecting an answer
  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  // Navigate to the next question
  const handleNext = () => {
    if (selectedAnswer) {
      // Save the response
      setResponses({
        ...responses,
        [currentQuestion.id]: selectedAnswer
      });

      // Determine the next question
      const nextQuestionId = currentQuestion.options.find(
        (option) => option.text === selectedAnswer
      ).nextQuestion;

      if (nextQuestionId) {
        const nextIndex = questions.findIndex((q) => q.id === nextQuestionId);
        setCurrentQuestionIndex(nextIndex);
      } else {
        // If no next question, mark the questionnaire as complete
        setCurrentQuestionIndex(null);
      }

      // Reset the selected answer
      setSelectedAnswer(null);
    }
  };

  // Navigate to the previous question
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <h1>Dynamic Questionnaire</h1>
      {currentQuestionIndex !== null ? (
        <div>
          <h2>{currentQuestion.question}</h2>
          <form>
            {currentQuestion.options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option.text}
                    checked={selectedAnswer === option.text}
                    onChange={handleAnswerChange}
                  />
                  {option.text}
                </label>
              </div>
            ))}
          </form>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              style={{ marginRight: "10px" }}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <h2>Thank you for completing the questionnaire!</h2>
      )}
    </div>
  );
};

export default Questionnaire;
