import React from 'react';
import '../styles/Reports.css'; // Make sure the path is correct
import { NavLink } from 'react-router-dom';


const Reports = () => {
  // Sample data for reports
  const reportData = {
    courseCompletionStats: {
      title: "Course Completion Rates",
      completionRates: [80, 65, 50, 90, 75], // Percentages for 5 courses
    },
    studentPerformanceStats: {
      title: "Student Performance",
      averageGrades: [82, 76, 91, 67, 88], // Average grades for 5 courses
    },
    // Other data and stats can be included
  };

  // The rendering logic for graphs can be abstracted into separate components
  const renderBarGraph = (data, title) => (
    <div className="bar-graph">
      <h3>{title}</h3>
      {/* Map through the data to generate bar graph */}
      <div className="bars">
        {data.map((value, index) => (
          <div key={index} className="bar-container">
            <div className="bar" style={{ height: `${value}%` }} />
            <span className="bar-value">{value}%</span>
          </div>
        ))}
      </div>
    </div>
  );

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
    <div className="reports-container">
      <h1>Reports Dashboard</h1>
      <section className="reports-section">
        {renderBarGraph(reportData.courseCompletionStats.completionRates, reportData.courseCompletionStats.title)}
      </section>
      <section className="reports-section">
        {renderBarGraph(reportData.studentPerformanceStats.averageGrades, reportData.studentPerformanceStats.title)}
      </section>
      {/* Additional sections for other types of reports */}
    </div>
    </div>
  );
};

export default Reports;
