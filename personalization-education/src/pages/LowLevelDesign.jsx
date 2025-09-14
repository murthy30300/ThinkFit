import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap
} from "reactflow";
import "reactflow/dist/style.css";

export default function LowLevelDesign() {
  // Entities (like ER Diagram)
  const nodes = [
    {
      id: "users",
      type: "input",
      position: { x: 100, y: 0 },
      data: { label: "👤 Users\n(user_id, email, password, preferences, role)" }
    },
    {
      id: "courses",
      position: { x: 400, y: 0 },
      data: { label: "📘 Courses\n(course_id, title, syllabus, topics)" }
    },
    {
      id: "quizzes",
      position: { x: 100, y: 150 },
      data: { label: "❓ Quizzes\n(quiz_id, course_id, questions[])" }
    },
    {
      id: "questions",
      position: { x: 400, y: 150 },
      data: { label: "📝 Questions\n(q_id, type, difficulty, tags, solution)" }
    },
    {
      id: "assessments",
      position: { x: 100, y: 300 },
      data: { label: "📊 Assessments\n(assessment_id, user_id, quiz_id, score, level)" }
    },
    {
      id: "content",
      position: { x: 400, y: 300 },
      data: { label: "📄 ContentItems\n(content_id, topic_id, level, text, assets)" }
    },
    {
      id: "feedback",
      type: "output",
      position: { x: 250, y: 450 },
      data: { label: "⭐ Feedback\n(feedback_id, user_id, content_id, rating, comments)" }
    }
  ];

  // Relationships
  const edges = [
    { id: "e1", source: "users", target: "assessments", label: "1:N" },
    { id: "e2", source: "users", target: "feedback", label: "1:N" },
    { id: "e3", source: "courses", target: "quizzes", label: "1:N" },
    { id: "e4", source: "quizzes", target: "questions", label: "1:N" },
    { id: "e5", source: "quizzes", target: "assessments", label: "1:N" },
    { id: "e6", source: "assessments", target: "content", label: "N:1" },
    { id: "e7", source: "content", target: "feedback", label: "1:N" }
  ];

  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <h1 className="text-2xl font-bold text-center mb-4">📐 Low-Level Design (ER Diagram)</h1>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
