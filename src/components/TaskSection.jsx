// src/components/TaskSection.jsx
import TaskBlock from "./TaskBlock";

export default function TaskSection({ task }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Задания</h2>
      <div className="space-y-4">
        {Object.entries(task).map(([sectionTitle, questions], i) => (
          <TaskBlock key={i} title={sectionTitle} questions={questions} />
        ))}
      </div>
    </section>
  );
}
