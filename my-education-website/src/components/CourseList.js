import React, { useState, useEffect } from 'react';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from your API
  }, []);

  return (
    <div>
      {courses.map((course) => (
        <div key={course._id}>{course.title}</div>
      ))}
    </div>
  );
}
