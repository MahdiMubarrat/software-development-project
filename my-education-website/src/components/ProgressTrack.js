import React from 'react';
import '../styles/ProgressTracking.css'; // Ensure the path to your CSS file is correct
import { NavLink } from 'react-router-dom';

const ProgressTracking = () => {
  // Example progress data
  const progressData = [
    { course: 'Web Development', completion: 85 },
    { course: 'Machine Learning', completion: 60 },
    { course: 'Database Systems', completion: 90 },
    // Add more courses as needed
  ];

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
      <h1>Course Progress</h1>
      {progressData.map((item, index) => (
        <div key={index} className="course-progress">
          <span className="course-title">{item.course}</span>
          <div className="progress-bar-background">
            <div
              className="progress-bar-foreground"
              style={{ width: `${item.completion}%` }}
            >
              <span className="progress-percentage">{item.completion}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProgressTracking;
