import React from "react";

export default function Timetable({ TimetableEntries }) {
  console.log(TimetableEntries);
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Ссылка</th>
        </tr>
      </thead>
      <tbody>
        {TimetableEntries.map((element, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{element?.name}</td>
            <td>
              <>Ligma</>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
