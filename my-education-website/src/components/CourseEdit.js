import React, { useState } from 'react';
import '../styles/CourseEdit.css'; 
import { NavLink } from 'react-router-dom';

const CourseEdit = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Intro to programming', title: 'Course A', code: '123455', available: true, enrolled: false, image: 'prog.png', },
    { id: 2, name: 'Web Development', title: 'Course B', code: '654321', available: true, enrolled: true,  image: 'webdev.jpg', },
    { id: 3, name: 'Java Coding', title: 'Course C', code: 'ABCDGF', available: false, enrolled: false,  image: 'java.jpg', },
  ]);

  const enrollInCourse = (courseId) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, enrolled: !course.enrolled } : course
    ));
  };

  return (
    <div className="homepage-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
            <li><NavLink to="/student-services" className={({ isActive }) => isActive ? 'active' : undefined}>Student Services</NavLink></li>
            <li><NavLink to="/course-edit" className={({ isActive }) => isActive ? 'active' : undefined}>Course Edit</NavLink></li>
            <li><NavLink to="/user-management" className={({ isActive }) => isActive ? 'active' : undefined}>User Management</NavLink></li>
            <li><NavLink to="/progress-track" className={({ isActive }) => isActive ? 'active' : undefined}>Progress Track</NavLink></li>
            <li><NavLink to="/reports" className={({ isActive }) => isActive ? 'active' : undefined}>Reports</NavLink></li>
          </ul>
        </nav>
      </aside>
    <div className="course-edit-container">
      <div className="course-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.name} className="course-image" />
            <div className="course-info">
              <h3 className="course-title">{course.name}</h3>
              <p className="course-code">{course.code}</p>
              <p className="course-description">{course.description}</p>
              <p className="course-instructor">Instructor: {course.instructor}</p>
              <p className={`course-availability ${course.available ? 'available' : 'not-available'}`}>
                {course.available ? 'Available' : 'Not Available'}
              </p>
              <button onClick={() => enrollInCourse(course.id)}>
                {course.enrolled ? 'Unenroll' : 'Enroll'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CourseEdit;
