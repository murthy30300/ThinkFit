import { useNavigate } from "react-router-dom";
import { Database, Bot, Cloud, ArrowRight, Clock, Star } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function CourseSelection() {
  const navigate = useNavigate();
  
  const courses = [
    { 
      name: "Data Structures", 
      desc: "Master fundamental data structures and algorithms", 
      icon: Database,
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: "12.5k",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Machine Learning", 
      desc: "Dive deep into ML concepts and practical applications", 
      icon: Bot,
      duration: "12 weeks",
      level: "Advanced", 
      rating: 4.9,
      students: "8.2k",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      name: "Cloud Computing", 
      desc: "Learn AWS, Azure, and GCP fundamentals", 
      icon: Cloud,
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.7,
      students: "15.3k",
      color: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Learning Path</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a course that matches your goals and start your personalized learning experience
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => {
            const IconComponent = course.icon;
            return (
              <Card key={i} hover className="p-0 overflow-hidden group">
                {/* Course Header with Gradient */}
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <IconComponent className="w-16 h-16" />
                  </div>
                  <div className="relative z-10">
                    <IconComponent className="w-8 h-8 mb-4" />
                    <h2 className="text-xl font-bold mb-2">{course.name}</h2>
                    <p className="text-sm opacity-90">{course.desc}</p>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students} students)</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>

                  <Button
                    onClick={() => navigate("/quiz")}
                    className="w-full group-hover:shadow-lg"
                    variant="primary"
                  >
                    <span className="mr-2">Start Course</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}