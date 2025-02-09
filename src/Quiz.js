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
    <div className="p-5 max-w-2xl mx-auto text-center bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Quiz Time!</h1>
        <p className="text-gray-600 mb-4">Test your knowledge and see how well you do!</p>
        
        <div className="w-full mb-4">
          <p className="text-gray-700 font-semibold">Progress: {Object.keys(answered).length} / {quizQuestions.length}</p>
          <div className="w-full bg-gray-300 rounded-full h-2.5 mt-1">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${(Object.keys(answered).length / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {quizQuestions.map((q, index) => (
          <div key={index} className="mb-6 p-5 border rounded-lg shadow-md bg-gray-50">
            <p className="font-semibold text-lg mb-3 text-gray-800">{q.question}</p>
            <div className="grid grid-cols-2 gap-3">
              {q.choices.map((choice) => (
                <button
                  key={choice}
                  onClick={() => handleAnswer(index, choice)}
                  className={`p-3 rounded-lg border text-gray-700 font-medium transition-all duration-200 hover:scale-105 ${
                    answered[index] !== undefined
                      ? choice === q.correct
                        ? "bg-green-400 text-white"
                        : "bg-red-400 text-white"
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
        
        <p className="font-bold text-xl mt-4 text-gray-800">Score: {score} / {quizQuestions.length}</p>
        <button
          onClick={resetQuiz}
          className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
        >
          Reset Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
