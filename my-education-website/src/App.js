
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudentServices from './components/StudentServices';
import UserManagement from './components/UserManagement';
import ProgressTrack from './components/ProgressTrack';
import Reports from './components/Reports';
import CourseEdit from './components/CourseEdit';

import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-services" element={<StudentServices />} />
        <Route path="/course-edit" element={<CourseEdit />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/progress-track" element={<ProgressTrack />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
