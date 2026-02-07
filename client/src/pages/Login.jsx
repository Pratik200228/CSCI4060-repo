import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: connect to your backend / auth
    setMessage('Login not connected yet. Add your API here.');
  }

  return (
    <section className="section">
      <h1>Log in to EasyGrader</h1>
      <p className="muted">Enter your credentials to continue.</p>

      <form className="card login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn primary" type="submit">
          Log in
        </button>

        {message && <p className="muted tiny" style={{ marginTop: 12 }}>{message}</p>}

        <p className="form-footer muted">
          Don&apos;t have an account? <Link to="/">Sign up</Link>
        </p>
      </form>

      <footer className="footer">
        <div className="muted tiny">
          © {new Date().getFullYear()} EasyGrader. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
