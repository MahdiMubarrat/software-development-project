import React from 'react';
import '../styles/HomePage.css'; 
import { NavLink } from 'react-router-dom';

function HomePage() {
  const user = {
    name: "User",
    coursesCompleted: 5,
    coursesInProgress: 3,
    upcomingEvents: [
      { date: new Date(), title: "Virtual Career Fair" },
      { date: new Date(), title: "AI in Education Webinar" }
    ],
    announcements: [
      { title: "Campus reopens", content: "The campus will reopen on August 1st." },

      { title: "Campus Opening", content: "Welcome Students!," },
      { content: "Get ready for an exciting journey filled with growth, discovery, and endless possibilities. ," },
      { content: "Remember, we're here to support you every step of the way. Let's make this year one to remember! ," },
      { title: "Scholarship Deadline", content: "Don't miss the scholarship application deadline on July 15th." }
    ]
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
      <div className="main-content">
        <header className="header">
          <h1>Welcome to Our Educational Platform</h1>
        </header>
        <section className="welcome-banner">
          <h2>Welcome, {user.name}!</h2>
        </section>
        <section className="dashboard-summary">
          <p>Courses Completed: {user.coursesCompleted}</p>
          <p>Courses In Progress: {user.coursesInProgress}</p>
        </section>
        <section className="course-highlights">
          {/* Featured courses would be mapped here */}
        </section>
        <section className="personalized-recommendations">
          {/* Recommendations based on user's activity */}
        </section>
        <section className="announcements">
          <h2>Announcements</h2>
          <h2> </h2>
          {user.announcements.map((announcement, index) => (
            <div key={index}>
              <h3>{announcement.title}</h3>
              <p>{announcement.content}</p>
            </div>
          ))}
        </section>
        <section className="calendar-deadlines">
          <h2>Upcoming Events</h2>
          {user.upcomingEvents.map((event, index) => (
            <div key={index}>
              <p>{event.title} on {event.date.toLocaleDateString()}</p>
            </div>
          ))}
        </section>
        <section className="testimonials">
          {/* Testimonials from students or alumni */}
        </section>
        <section className="learning-resources">
          {/* Links to learning resources */}
        </section>
        <section className="community-forum">
          {/* Links or widgets for community interaction */}
        </section>
        <section className="support-services">
          {/* Links to support and advising */}
        </section>
        <section className="quick-links">
          {/* Frequently used tools and links */}
        </section>
        <section className="social-media-feed">
          {/* Embedded social media feed */}
        </section>
        <section className="feedback">
          {/* Feedback submission form */}
        </section>
        <section className="gamification">
          {/* Badges or points the user has earned */}
        </section>
        <section className="accessibility-options">
          {/* Tools to adjust accessibility settings */}
        </section>
      </div>
    </div>
  );
}

export default HomePage;
