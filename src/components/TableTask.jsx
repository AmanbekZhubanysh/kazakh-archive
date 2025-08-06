export default function TableTask({title, value}) {
    
    return (
        <div className="border p-4 rounded bg-white shadow-sm">
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="mb-2">{value.instructions}</p>
                <table className="table-auto w-full border border-gray-400 text-sm mb-4">
                  <thead>
                    <tr>
                      {value.columns.map((col, i) => (
                        <th key={i} className="border px-2 py-1">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {value.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="border px-2 py-1">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {value.questions?.map((q, i) => (
                  <p key={i} className="mt-1">{q}</p>
                ))}
      </div>
    );
}