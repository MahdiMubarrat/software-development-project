import React, { useState } from 'react';

export default function Login() {
  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}
