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
export default function ReadingSection({ reading }) {
  // объединяем все страницы в один массив абзацев
  const allParagraphs = reading.flat();

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Чтение</h2>

      <div
        className="
          border 
          p-4 
          rounded 
          bg-gray-50 
          space-y-3
          max-h-[600px]
          overflow-y-auto
        "
      >
        {allParagraphs.map((para, i) => (
          <p key={i} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
