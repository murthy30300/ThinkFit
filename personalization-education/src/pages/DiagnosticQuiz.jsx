import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Clock, HelpCircle } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function DiagnosticQuiz() {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const totalQuestions = 5;

  const questions = [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
      correct: "O(log n)"
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correct: "Stack"
    },
    {
      question: "What is the worst-case time complexity of quicksort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correct: "O(n²)"
    },
    {
      question: "In a binary tree, what is the maximum number of nodes at level k?",
      options: ["2^k", "2^(k-1)", "k", "2k"],
      correct: "2^k"
    },
    {
      question: "Which sorting algorithm is stable and has O(n log n) time complexity?",
      options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
      correct: "Merge Sort"
    }
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  // Reset selected answer when question changes
  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion] || null);
  }, [currentQuestion, answers]);

  const handleNext = () => {
    // Save current answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer || "";
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, navigate to results
      navigate("/results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/courses")}
                className="p-2 hover:bg-white/50 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Initial Knowledge Assessment
                </h1>
                <p className="text-gray-600">Help us understand your current level</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>~5 minutes</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
          </div>

          {/* Question Progress Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {Array.from({ length: totalQuestions }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentQuestion
                    ? "bg-blue-500 scale-125"
                    : i < currentQuestion || answers[i]
                    ? "bg-emerald-500"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8">
          <div className="flex items-start space-x-4 mb-8">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {currentQ.question}
              </h2>
              <p className="text-gray-600 text-sm">
                Select the best answer from the options below
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {currentQ.options.map((option, i) => (
              <label
                key={i}
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedAnswer === option
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="question"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                  selectedAnswer === option
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}>
                  {selectedAnswer === option && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span className="text-gray-800 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={currentQuestion === 0 ? () => navigate("/courses") : handlePrevious}
            variant="ghost"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="text-center text-sm text-gray-500">
            Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to continue
          </div>

          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="min-w-[120px]"
          >
            {currentQuestion === totalQuestions - 1 ? "Finish Quiz" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}