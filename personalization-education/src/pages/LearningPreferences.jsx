import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BookOpen, Lightbulb, Eye, List, ArrowRight } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function LearningPreferences() {
  const navigate = useNavigate();
  const [selectedPrefs, setSelectedPrefs] = useState([]);

  const preferences = [
    {
      id: "analogies",
      name: "Analogies & Metaphors",
      desc: "Learn through comparisons with familiar concepts",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: "examples",
      name: "Real-life Examples",
      desc: "Understand concepts through practical applications",
      icon: BookOpen,
      color: "from-emerald-400 to-cyan-400"
    },
    {
      id: "visual",
      name: "Visual Explanations",
      desc: "Learn with diagrams, charts, and visual aids",
      icon: Eye,
      color: "from-purple-400 to-pink-400"
    },
    {
      id: "stepbystep",
      name: "Step-by-step Breakdown",
      desc: "Detailed progression through complex topics",
      icon: List,
      color: "from-blue-400 to-indigo-400"
    }
  ];

  const togglePreference = (prefId) => {
    setSelectedPrefs(prev =>
      prev.includes(prefId)
        ? prev.filter(id => id !== prefId)
        : [...prev, prefId]
    );
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How Do You Learn
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Best?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your preferred learning styles. We'll customize your content to match your preferences.
          </p>
        </div>

        {/* Preferences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {preferences.map((pref) => {
            const IconComponent = pref.icon;
            const isSelected = selectedPrefs.includes(pref.id);
            
            return (
              <Card 
                key={pref.id} 
                className={`p-0 overflow-hidden cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? "ring-2 ring-emerald-500 shadow-xl scale-[1.02]" 
                    : "hover:shadow-lg"
                }`}
                onClick={() => togglePreference(pref.id)}
              >
                <div className={`bg-gradient-to-r ${pref.color} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-white/30" : "bg-white/20"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-1">{pref.name}</h3>
                    </div>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? "border-white bg-white" : "border-white/60"
                    }`}>
                      {isSelected && (
                        <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600">{pref.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Selection Summary */}
        {selectedPrefs.length > 0 && (
          <Card className="p-6 mb-8 border-emerald-200 bg-emerald-50/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{selectedPrefs.length}</span>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-800">
                  {selectedPrefs.length} learning style{selectedPrefs.length > 1 ? 's' : ''} selected
                </h3>
                <p className="text-sm text-emerald-600">
                  Your content will be personalized to match these preferences
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/content")}
            size="lg"
            variant="secondary"
            className="min-w-[200px]"
            disabled={selectedPrefs.length === 0}
          >
            Generate Personalized Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {selectedPrefs.length === 0 && (
          <p className="text-center text-gray-500 text-sm mt-4">
            Please select at least one learning preference to continue
          </p>
        )}
      </div>
    </div>
  );
}