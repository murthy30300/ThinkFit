import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap
} from "reactflow";
import "reactflow/dist/style.css";

export default function HighLevelDesign() {
  // Define nodes (system components)
  const nodes = [
    {
      id: "user",
      type: "input",
      position: { x: 250, y: 0 },
      data: { label: "👩‍🎓 Computer Science Student" }
    },
    {
      id: "ui",
      position: { x: 250, y: 100 },
      data: { label: "🌐 Client Application (React / Streamlit)" }
    },
    {
      id: "api",
      position: { x: 250, y: 200 },
      data: { label: "🖥️ API Gateway (FastAPI / Flask)" }
    },
    {
      id: "auth",
      position: { x: 50, y: 300 },
      data: { label: "🔒 Authentication Service (OAuth2 / JWT)" }
    },
    {
      id: "assessment",
      position: { x: 250, y: 300 },
      data: { label: "📝 Assessment Service (Quiz Engine)" }
    },
    {
      id: "personalization",
      position: { x: 450, y: 300 },
      data: { label: "🧠 Personalization Engine (ML)" }
    },
    {
      id: "kafka",
      position: { x: 250, y: 400 },
      data: { label: "⚡ Apache Kafka (Event Streaming)" }
    },
    {
      id: "spark",
      position: { x: 450, y: 400 },
      data: { label: "🔥 Apache Spark (Processing)" }
    },
    {
      id: "db",
      position: { x: 50, y: 500 },
      data: { label: "🗄️ PostgreSQL (DB)" }
    },
    {
      id: "redis",
      position: { x: 250, y: 500 },
      data: { label: "💾 Redis (Cache)" }
    },
    {
      id: "s3",
      position: { x: 450, y: 500 },
      data: { label: "☁️ AWS S3 (Content Storage)" }
    },
    {
      id: "cdn",
      position: { x: 650, y: 500 },
      data: { label: "🌍 CloudFront (CDN)" }
    },
    {
      id: "mlops",
      position: { x: 250, y: 600 },
      data: { label: "📊 MLflow + SHAP + Monitoring" }
    }
  ];

  // Define edges (connections)
  const edges = [
    { id: "e1", source: "user", target: "ui", label: "HTTPS" },
    { id: "e2", source: "ui", target: "api", label: "REST API" },
    { id: "e3", source: "api", target: "auth", label: "JWT" },
    { id: "e4", source: "api", target: "assessment", label: "Quiz Requests" },
    { id: "e5", source: "api", target: "personalization", label: "ML Requests" },
    { id: "e6", source: "assessment", target: "kafka", label: "Events" },
    { id: "e7", source: "kafka", target: "spark", label: "Stream Processing" },
    { id: "e8", source: "spark", target: "personalization", label: "Triggers" },
    { id: "e9", source: "personalization", target: "s3", label: "Content" },
    { id: "e10", source: "s3", target: "cdn", label: "Assets" },
    { id: "e11", source: "db", target: "api", label: "User Data" },
    { id: "e12", source: "redis", target: "api", label: "Session Cache" },
    { id: "e13", source: "cdn", target: "user", label: "Content Delivery" },
    { id: "e14", source: "personalization", target: "mlops", label: "Model Tracking" }
  ];

  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <h1 className="text-2xl font-bold text-center mb-4">📐 High-Level Design (System Architecture)</h1>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
