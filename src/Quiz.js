import React, { useState } from "react";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars",
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    correct: "4",
  },
];

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});

  const handleAnswer = (questionIndex, choice) => {
    if (answered[questionIndex] !== undefined) return;

    setAnswered((prev) => ({ ...prev, [questionIndex]: choice }));
    if (quizQuestions[questionIndex].correct === choice) {
      setScore((prev) => prev + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setAnswered({});
  };

  return (
    <div className="p-5 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Quiz Time!</h1>
      {quizQuestions.map((q, index) => (
        <div key={index} className="mb-4 p-3 border rounded-lg">
          <p className="font-semibold mb-2">{q.question}</p>
          <div className="flex flex-col gap-2">
            {q.choices.map((choice) => (
              <button
                key={choice}
                onClick={() => handleAnswer(index, choice)}
                className={`p-2 rounded-lg border ${
                  answered[index] !== undefined
                    ? choice === q.correct
                      ? "bg-green-300"
                      : "bg-red-300"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                disabled={answered[index] !== undefined}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      ))}
      <p className="font-bold text-lg mt-4">Score: {score} / {quizQuestions.length}</p>
      <button
        onClick={resetQuiz}
        className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Reset Quiz
      </button>
    </div>
  );
};

export default Quiz;
