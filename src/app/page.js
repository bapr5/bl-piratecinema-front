'use client'

import { getAvailableFiles } from "../api/userAPI.mjs";
import { useState, useEffect } from "react";
import Timetable from "../components/Timetable";

export default function Home() {
  const [availableFiles, setAvailableFiles] = useState(null);

  useEffect(() => {
    getAvailableFiles()
      .then((res) => {
        setAvailableFiles(res);
      })
  }, []);
  return (
    <div>
      {!Array.isArray(availableFiles) && availableFiles != null ? (
        <div>Failed: {availableFiles?.message}</div>
      ) : availableFiles?.length > 0 && availableFiles != null ? (
        <Timetable TimetableEntries={availableFiles} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
