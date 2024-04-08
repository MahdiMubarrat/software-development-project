import React from 'react';
import '../styles/ProgressTracking.css'; 
import { NavLink } from 'react-router-dom';

const ProgressTracking = () => {

  const coursesProgress = [
    {
      courseName: 'Web Development',
      progress: 75,
      nextDeadline: 'Project Submission - April 15th',
    },
    {
      courseName: 'Data Science',
      progress: 60,
      nextDeadline: 'Homework 5 - April 10th',
    },
  ];

  const totalProgress = coursesProgress.reduce((acc, course) => acc + course.progress, 0) / coursesProgress.length;

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
    <div className="progress-tracking-container">
      <h1>User Management Dashboard</h1>
      <div className="overall-progress">
        <label>Overall Course Progress</label>
        <progress value={totalProgress} max="100"></progress>
        <span>{totalProgress}% Complete</span>
      </div>
      
      {coursesProgress.map((course, index) => (
        <div key={index} className="course-progress">
          <div className="course-header">
            <h2>{course.courseName}</h2>
            <span className="next-deadline">{course.nextDeadline}</span>
          </div>
          <progress value={course.progress} max="100"></progress>
          <span>{course.progress}% Complete</span>
        </div>
      ))}
      
      {/* Here we could add more detailed statistics or even include graphs using a library like Chart.js */}
      
    </div>
    </div>
  );
};

export default ProgressTracking;
