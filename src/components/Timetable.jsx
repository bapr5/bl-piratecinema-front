import React from "react";
import { makeUrl } from "@/utils/utils.mjs";   

export default function Timetable({ TimetableEntries }) {
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
    }
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>#</th>
          <th>Файл</th>
          <th>Ссылка</th>
        </tr>
      </thead>
      <tbody>
        {TimetableEntries.map((element, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td><a href={makeUrl(element?.link)}>{element?.name}</a></td>
            <td>
              <button onClick={copyToClipboard(makeUrl(element?.link))}>📋</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
