import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CourseSelection from "./pages/CourseSelection";
import DiagnosticQuiz from "./pages/DiagnosticQuiz";
import LearningPreferences from "./pages/LearningPreferences";
import PersonalizedContent from "./pages/PersonalizedContent";
import Feedback from "./pages/Feedback";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/courses" element={<CourseSelection />} />
          <Route path="/quiz" element={<DiagnosticQuiz />} />
          <Route path="/preferences" element={<LearningPreferences />} />
          <Route path="/content" element={<PersonalizedContent />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}