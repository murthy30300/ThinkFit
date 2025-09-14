import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Star, Send, ThumbsUp, MessageCircle, Home } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Feedback() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);

  const quickFeedback = [
    "Content was clear and helpful",
    "Examples made concepts easier to understand",
    "Would like more practice problems",
    "Pacing was just right",
    "Visual explanations were excellent"
  ];

  const toggleTopic = (topic) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSubmit = () => {
    // Handle feedback submission
    console.log({ rating, feedback, selectedTopics });
    // Show thank you message and redirect
    alert("Thank you for your feedback! This helps us improve your learning experience.");
    navigate("/courses");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ThumbsUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How Was Your
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Learning Experience?</span>
          </h1>
          <p className="text-xl text-gray-600">
            Your feedback helps us improve and personalize future content for you
          </p>
        </div>

        {/* Rating Section */}
        <Card className="p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rate This Module</h2>
            <div className="flex justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-all duration-200 hover:scale-110"
                >
                  <Star
                    className={`w-12 h-12 ${
                      (hoverRating || rating) >= star
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-gray-600">
                {rating === 1 && "We'll work harder to improve your experience"}
                {rating === 2 && "Thanks for the feedback, we'll do better"}
                {rating === 3 && "Good to know, we appreciate your input"}
                {rating === 4 && "Great! We're glad you found it helpful"}
                {rating === 5 && "Awesome! We're thrilled you loved it"}
              </p>
            )}
          </div>
        </Card>

        {/* Quick Feedback Options */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Feedback</h2>
          <p className="text-gray-600 mb-6">Select any that apply to your experience:</p>
          
          <div className="space-y-3">
            {quickFeedback.map((topic, i) => (
              <button
                key={i}
                onClick={() => toggleTopic(topic)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedTopics.includes(topic)
                    ? "border-purple-500 bg-purple-50 text-purple-800"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedTopics.includes(topic)
                      ? "border-purple-500 bg-purple-500"
                      : "border-gray-300"
                  }`}>
                    {selectedTopics.includes(topic) && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium">{topic}</span>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Written Feedback */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Additional Comments
          </h2>
          <p className="text-gray-600 mb-6">
            Share any specific thoughts or suggestions for improvement
          </p>
          
          <div className="relative">
            <MessageCircle className="absolute top-4 left-4 text-gray-400 w-5 h-5" />
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
              rows={6}
              placeholder="Tell us what you loved, what could be better, or what you'd like to see next..."
            />
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleSubmit}
            className="min-w-[200px]"
            variant="primary"
            disabled={rating === 0}
          >
            <Send className="w-4 h-4 mr-2" />
            Submit Feedback
          </Button>
          
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="min-w-[200px]"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        {rating === 0 && (
          <p className="text-center text-gray-500 text-sm mt-4">
            Please provide a rating before submitting
          </p>
        )}
      </div>
    </div>
  );
}