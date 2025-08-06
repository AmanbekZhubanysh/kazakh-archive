export default function DocumentHeader({ doc }) {
    return (
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">{doc.title}</h1>
        <p className="text-gray-600"><strong>Документ №:</strong> {doc.number}</p>
        <p className="text-gray-600"><strong>Описание:</strong> {doc.description}</p>
        <p className="text-gray-600"><strong>Источник:</strong> {doc.source}</p>
      </div>
    );
  }
  