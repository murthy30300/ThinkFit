import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Download, BookmarkIcon as BookmarksIcon, Clock, CheckCircle, FileText, ArrowRight, Lightbulb } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function PersonalizedContent() {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { name: "Introduction to Binary Search", completed: true, duration: "15 min" },
    { name: "Algorithm Implementation", completed: false, duration: "25 min" },
    { name: "Time Complexity Analysis", completed: false, duration: "20 min" },
    { name: "Practice Problems", completed: false, duration: "30 min" }
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-gradient-to-b from-slate-50 to-gray-100 border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <BookmarksIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">Course Content</h2>
              <p className="text-sm text-gray-600">Binary Search Mastery</p>
            </div>
          </div>
          
          <div className="bg-white/60 rounded-lg p-3">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Progress</span>
              <span className="font-semibold text-gray-800">25%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '25%'}} />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
            Learning Modules
          </h3>
          <div className="space-y-3">
            {modules.map((module, i) => (
              <button
                key={i}
                onClick={() => setActiveModule(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  activeModule === i
                    ? "bg-blue-50 border-blue-200 shadow-sm"
                    : "bg-white/60 border-gray-200 hover:bg-white hover:shadow-sm"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    module.completed
                      ? "bg-emerald-500 text-white"
                      : activeModule === i
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {module.completed ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-bold">{i + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">
                      {module.name}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {module.duration}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <Button
            onClick={() => {/* Download PDF */}}
            variant="ghost"
            className="w-full"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button 
              onClick={() => navigate("/")}
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={() => navigate("/courses")}
              className="hover:text-blue-600 transition-colors"
            >
              Courses
            </button>
            <span>/</span>
            <button 
              onClick={() => navigate("/quiz")}
              className="hover:text-blue-600 transition-colors"
            >
              Assessment
            </button>
            <span>/</span>
            <button 
              onClick={() => navigate("/preferences")}
              className="hover:text-blue-600 transition-colors"
            >
              Preferences
            </button>
            <span>/</span>
            <span className="text-gray-800 font-medium">Content</span>
          </nav>

          {/* Content Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <span>Module {activeModule + 1}</span>
              <span>•</span>
              <span>Beginner Level</span>
              <span>•</span>
              <span>Personalized for You</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {modules[activeModule].name}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              This content has been tailored specifically to your learning preferences, 
              featuring analogies, step-by-step explanations, and visual examples to help 
              you master binary search concepts.
            </p>
          </div>

          {/* Content Card */}
          <Card className="p-8 mb-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Understanding Binary Search
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Analogy: The Dictionary Search</h3>
                    <p className="text-blue-700">
                      Think of binary search like looking up a word in a physical dictionary. 
                      You don't start from page 1 - you open to the middle and decide whether 
                      to go left or right based on alphabetical order.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Algorithm Implementation</h3>
              
              <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                <pre className="text-sm">
                  <code>{`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    // Find the middle point
    let mid = Math.floor((left + right) / 2);
    
    // If we found our target
    if (arr[mid] === target) {
      return mid;
    }
    
    // If target is greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }
  
  // Target not found
  return -1;
}`}</code>
                </pre>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-emerald-800 mb-3">Step-by-Step Breakdown:</h3>
                <ol className="space-y-2 text-emerald-700">
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
                    <span>Initialize pointers at the beginning and end of the array</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full text-xs flex items-center justify-center font-bold">2</span>
                    <span>Find the middle element and compare with target</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
                    <span>Eliminate half of the remaining elements based on comparison</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full text-xs flex items-center justify-center font-bold">4</span>
                    <span>Repeat until element is found or search space is exhausted</span>
                  </li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <Button variant="ghost">
                <FileText className="w-4 h-4 mr-2" />
                Take Notes
              </Button>
              <Button variant="ghost">
                <BookmarksIcon className="w-4 h-4 mr-2" />
                Bookmark
              </Button>
            </div>

            <Button onClick={() => navigate("/feedback")}>
              Complete Module
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}