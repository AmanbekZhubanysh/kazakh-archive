// src/pages/DocumentDetail.jsx
import { useParams } from "react-router-dom";
import documents from "../data/documents.json";
import ReadingSection from "../components/ReadingSection";
import TaskSection from "../components/TaskSection";

export default function DocumentDetail() {
  const { id } = useParams();
  const document = documents.find(doc => doc.id === Number(id));

  if (!document) return <div>Документ не найден</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Документ № {document.id}</h1>
      <h1 className="text-2xl font-bold mb-2">{document.title}</h1>
      <p className="text-gray-600 mb-4">{document.description}</p>
      <p className="text-sm text-gray-400 mb-8">Источник: {document.source}</p>

      <ReadingSection reading={document.reading} />
      <TaskSection task={document.task} />
    </div>
  );
}
