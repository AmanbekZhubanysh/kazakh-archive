import { Link } from "react-router-dom";
import documents from "../data/documents.json";
import Header from "../Header"

export default function Home() {
  return (
    <div className="p-6">
      <Header/>
      <h1 className="text-xl font-bold mb-4 text-center">Документы</h1>
      <div className="grid gap-4">
        {documents.map((doc) => (
          <Link
            to={`/document/${doc.id}`}
            key={doc.id}
            className="block border p-4 rounded hover:bg-gray-100"
          >
            <h2 className="font-semibold">Документ № {doc.id}</h2>
            <h2 className="font-semibold">{doc.title}</h2>
            <p className="text-sm text-gray-600">Источник: {doc.source}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
