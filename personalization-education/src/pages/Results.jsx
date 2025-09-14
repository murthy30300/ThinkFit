import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Trophy, Target, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Results() {
  const navigate = useNavigate();
  const [score] = useState(75); // Mock score - would come from quiz results
  const [animatedScore, setAnimatedScore] = useState(0);

  // Determine level based on score
  const getLevel = (score) => {
    if (score < 40) return { name: "Beginner", color: "from-green-500 to-emerald-500", description: "Building foundational knowledge" };
    if (score <= 70) return { name: "Intermediate", color: "from-yellow-500 to-orange-500", description: "Developing core competencies" };
    return { name: "Advanced", color: "from-purple-500 to-pink-500", description: "Mastering complex concepts" };
  };

  const level = getLevel(score);

  // Animate score on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = score / 50;
      const animation = setInterval(() => {
        current += increment;
        if (current >= score) {
          setAnimatedScore(score);
          clearInterval(animation);
        } else {
          setAnimatedScore(Math.floor(current));
        }
      }, 20);
    }, 500);

    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Quiz Results
          </h1>
          <p className="text-xl text-gray-600">
            Great job! Here's how you performed on the diagnostic assessment
          </p>
        </div>

        {/* Score Card */}
        <Card className="p-8 mb-8 text-center">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6">
              {/* Circular Progress */}
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - animatedScore / 100)}`}
                  className={`text-transparent bg-gradient-to-r ${level.color} bg-clip-text transition-all duration-1000 ease-out`}
                  style={{
                    stroke: `url(#gradient-${level.name})`,
                  }}
                />
                <defs>
                  <linearGradient id={`gradient-${level.name}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" className={level.name === 'Beginner' ? 'stop-green-500' : level.name === 'Intermediate' ? 'stop-yellow-500' : 'stop-purple-500'} />
                    <stop offset="100%" className={level.name === 'Beginner' ? 'stop-emerald-500' : level.name === 'Intermediate' ? 'stop-orange-500' : 'stop-pink-500'} />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Score Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-1">
                    {animatedScore}%
                  </div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
              </div>
            </div>

            <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${level.color} text-white font-semibold text-lg mb-4`}>
              <Target className="w-5 h-5 mr-2" />
              {level.name} Level
            </div>
            
            <p className="text-gray-600 text-lg">{level.description}</p>
          </div>
        </Card>

        {/* Performance Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">4/5</div>
            <div className="text-gray-600">Questions Correct</div>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">2:30</div>
            <div className="text-gray-600">Average Time</div>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">Top 25%</div>
            <div className="text-gray-600">Percentile</div>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personalized Recommendations</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Focus on Algorithm Complexity</h3>
                <p className="text-gray-600 text-sm">Your responses suggest strengthening time complexity analysis would be beneficial</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Practice Implementation</h3>
                <p className="text-gray-600 text-sm">More hands-on coding practice will help solidify theoretical concepts</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Visual Learning Approach</h3>
                <p className="text-gray-600 text-sm">Based on your learning style, visual diagrams will enhance understanding</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/preferences")}
            size="lg"
            className="min-w-[250px]"
          >
            Continue to Learning Preferences
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-gray-500 text-sm mt-4">
            Next: Customize your learning experience
          </p>
        </div>
      </div>
    </div>
  );
}