// src/components/TaskBlock.jsx
import TableTask from "./TableTask"

export default function TaskBlock({ title, questions }) {

if (typeof questions === "object" && questions !== null && !Array.isArray(questions)) {
  return <TableTask title={title} value={questions} />;
} 
else {
  return (
    <div className="border p-4 rounded bg-white shadow-sm">
      <h3 className="font-medium mb-2">{title}</h3>
      {Array.isArray(questions) ? (
        <div>
        {questions.map((q, i) => (
          <p key={i} className="mt-1">{q}</p>
        ))}
      </div>
      
      ) : (
        <p>{questions}</p>
      )}
    </div>
  );
}
}
