// src/components/ReadingSection.jsx
// import { useState } from "react";

// export default function ReadingSection({ reading }) {
//   const [pageIndex, setPageIndex] = useState(0);

//   return (
//     <section className="mb-8">
//       <h2 className="text-xl font-semibold mb-4">Чтение</h2>

//       <div className="border p-4 rounded bg-gray-50 space-y-2 min-h-[120px]">
//         {reading[pageIndex].map((para, i) => (
//           <p key={i}>{para}</p>
//         ))}
//       </div>

//       <div className="flex justify-between mt-4">
//         <button
//           onClick={() => setPageIndex(Math.max(pageIndex - 1, 0))}
//           disabled={pageIndex === 0}
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Назад
//         </button>
//         <span>Стр. {pageIndex + 1} из {reading.length}</span>
//         <button
//           onClick={() => setPageIndex(Math.min(pageIndex + 1, reading.length - 1))}
//           disabled={pageIndex === reading.length - 1}
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Далее
//         </button>
//       </div>
//     </section>
//   );
// }

// src/components/ReadingSection.jsx
// export default function ReadingSection({ reading }) {
//   // объединяем все страницы в один массив абзацев
//   const allParagraphs = reading.flat();

//   return (
//     <section className="mb-8">
//       <h2 className="text-xl font-semibold mb-4">Чтение</h2>

//       <div
//         className="
//           border 
//           p-4 
//           rounded 
//           bg-gray-50 
//           space-y-3
//           max-h-[600px]
//           overflow-y-auto
//         "
//       >
//         {allParagraphs.map((para, i) => (
//           <p key={i} className="leading-relaxed">
//             {para}
//           </p>
//         ))}
//       </div>
//     </section>
//   );
// }

// src/components/ReadingSection.jsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ReadingSection({ reading }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    // 1) Если массив — старое поведение
    if (Array.isArray(reading)) {
      setContent(reading.flat().join("\n"));
      return;
    }

    // 2) Если путь к .md файлу
    if (typeof reading === "string" && reading.endsWith(".md")) {
      fetch(reading)
        .then(res => res.text())
        .then(setContent)
        .catch(() =>
          setContent("⚠️ Не удалось загрузить документ")
        );
      return;
    }

    // 3) Если просто markdown-строка
    if (typeof reading === "string") {
      setContent(reading);
    }
  }, [reading]);

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Чтение
      </h2>

      <div
        className="
          border
          p-6
          rounded
          bg-gray-50
          max-h-[500px]
          overflow-y-auto
        "
      >
        <div className="prose prose-gray max-w-none">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}

