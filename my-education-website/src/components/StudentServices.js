// src/components/StudentServices.js
import React from 'react';
import '../styles/StudentServices.css'; // You'll create this CSS file for styling
import { NavLink } from 'react-router-dom';

function StudentServices() {
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
    <div className="student-services-container">
      <h1>Student Services</h1>
      <p>Welcome to the Student Services page. Here you can find all the resources and support you need during your time with us.</p>
      
      <section className="services-list">
        <h2>Academic Support</h2>
        <ul>
          <li>Tutoring Services - Get help with your courses from our qualified tutors.</li>
          <li>Writing Center - Assistance with writing papers, reports, and essays.</li>
          <li>Study Groups - Join a study group to collaborate with peers.</li>
        </ul>
      </section>
      
      <section className="services-list">
        <h2>Enrollment Services</h2>
        <ul>
          <li>Course Registration - Sign up for classes online.</li>
          <li>Financial Aid - Learn about scholarships, grants, and loan options.</li>
          <li>Advising - Meet with advisors to discuss your academic path.</li>
        </ul>
      </section>
      
      <section className="services-list">
        <h2>Career Services</h2>
        <ul>
          <li>Career Counseling - Get help choosing a career path that's right for you.</li>
          <li>Internship Opportunities - Find internship positions related to your field of study.</li>
          <li>Job Placement - Assistance with finding a job after graduation.</li>
        </ul>
      </section>
      
      <section className="services-list">
        <h2>Wellness Services</h2>
        <ul>
          <li>Counseling Services - Professional counseling for personal and educational concerns.</li>
          <li>Health Services - On-campus health clinics and resources.</li>
          <li>Fitness Center - Access to gym facilities and fitness classes.</li>
        </ul>
      </section>
      
      {/* Additional content sections can be added here */}
    </div>
    </div>
  );
}

export default StudentServices;
