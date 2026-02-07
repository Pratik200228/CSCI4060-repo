import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [userType, setUserType] = useState('professor'); // 'student' | 'professor'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setMessage('Login not connected yet. Add your API here.');
  }

  return (
    <section className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        {/* Student / Professor toggle */}
        <div className="login-toggle" role="group" aria-label="User type">
          <button
            type="button"
            className={`login-toggle-option ${userType === 'student' ? 'active student' : ''}`}
            onClick={() => setUserType('student')}
          >
            Student
          </button>
          <button
            type="button"
            className={`login-toggle-option ${userType === 'professor' ? 'active professor' : ''}`}
            onClick={() => setUserType('professor')}
          >
            Professor
          </button>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <div className="login-options">
          <label className="login-remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="login-remember-text">Remember me</span>
          </label>
          <Link to="/forgot-password" className="login-forgot">
            Forgot Password?
            <span className="login-icon" aria-hidden>?</span>
          </Link>
        </div>

        <div className="login-support-row">
          <span className="login-support">
            <span className="login-icon login-icon-support" aria-hidden>🎧</span>
            IT Support
          </span>
        </div>

        <button type="submit" className={`login-btn ${userType}`}>
          Login
        </button>

        {message && <p className="login-message">{message}</p>}

        <p className="login-footer muted">
          Don&apos;t have an account? <Link to="/">Register</Link>
        </p>
      </form>
    </section>
  );
}
