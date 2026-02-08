import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [role, setRole] = useState('student');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [university, setUniversity] = useState('');
  const [cwid, setCwid] = useState('');
  const [major, setMajor] = useState('');
  const [email, setEmail] = useState('');
  const [verifyEmail, setVerifyEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions to register.';
    }
    if (email !== verifyEmail) {
      newErrors.verifyEmail = 'Email does not match';
    }
    if (password !== verifyPassword) {
      newErrors.verifyPassword = 'Passwords do not match';
    }
    if (password.length > 0 && password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setMessage('Please fix the errors below.');
      return;
    }

    setMessage('Registration not connected yet. Add your API here.');
  }

  return (
    <section className="register-page">
      <div className="register-wrapper">
        <h1 className="register-main-heading">REGISTER FOR AN ACCOUNT</h1>
        <h2 className="register-subheading">Create Account</h2>
        <p className="register-intro">
          Here, you can create an account on this website. Website members can subscribe to site
          updates via email, are identified uniquely when commenting, and can access other special
          site functions.
        </p>
        <p className="register-intro register-intro-last">
          After creating your account, an email containing your account information will be sent
          to the address you enter below.
        </p>

        <form className="register-card" onSubmit={handleSubmit}>
          <label htmlFor="role" className="register-label">
            Role <span className="register-required">*</span>
          </label>
          <select
            id="role"
            className="register-input register-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="professor">Professor</option>
          </select>

          <label className="register-label">
            Your Name <span className="register-required">*</span>
          </label>
          <div className="register-name-row">
            <div className="register-name-field">
              <input
                type="text"
                placeholder="First"
                className="register-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                autoComplete="given-name"
              />
              <span className="register-name-hint">First</span>
            </div>
            <div className="register-name-field">
              <input
                type="text"
                placeholder="Last"
                className="register-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                autoComplete="family-name"
              />
              <span className="register-name-hint">Last</span>
            </div>
          </div>

          <label htmlFor="username" className="register-label">
            Username <span className="register-required">*</span>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Choose a username"
            className="register-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />

          <label htmlFor="university" className="register-label">
            University <span className="register-required">*</span>
          </label>
          <input
            id="university"
            type="text"
            placeholder="Your university"
            className="register-input"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
            autoComplete="organization"
          />

          <label htmlFor="cwid" className="register-label">
            CWID <span className="register-required">*</span>
          </label>
          <input
            id="cwid"
            type="text"
            placeholder="Campus Wide ID"
            className="register-input"
            value={cwid}
            onChange={(e) => setCwid(e.target.value)}
            required
            autoComplete="off"
          />

          <label htmlFor="major" className="register-label">
            Major <span className="register-required">*</span>
          </label>
          <input
            id="major"
            type="text"
            placeholder="Major / degree"
            className="register-input"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
            autoComplete="off"
          />

          <label htmlFor="email" className="register-label">
            Email <span className="register-required">*</span>
          </label>
          <div className="register-email-wrap">
            <span className="register-email-at" aria-hidden>@</span>
            <input
              id="email"
              type="email"
              placeholder="you@university.edu"
              className="register-input register-input-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <label htmlFor="verifyEmail" className="register-label">
            Verify email <span className="register-required">*</span>
          </label>
          <input
            id="verifyEmail"
            type="email"
            placeholder="Re-enter your email"
            className={`register-input ${errors.verifyEmail ? 'register-input-error' : ''}`}
            value={verifyEmail}
            onChange={(e) => setVerifyEmail(e.target.value)}
            required
            autoComplete="email"
          />
          {errors.verifyEmail && <span className="register-error">{errors.verifyEmail}</span>}

          <label htmlFor="phone" className="register-label">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            className="register-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />

          <label htmlFor="password" className="register-label">
            Create password <span className="register-required">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            className={`register-input ${errors.password ? 'register-input-error' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          {errors.password && <span className="register-error">{errors.password}</span>}

          <label htmlFor="verifyPassword" className="register-label">
            Verify password <span className="register-required">*</span>
          </label>
          <input
            id="verifyPassword"
            type="password"
            placeholder="Re-enter password"
            className={`register-input ${errors.verifyPassword ? 'register-input-error' : ''}`}
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          {errors.verifyPassword && (
            <span className="register-error">{errors.verifyPassword}</span>
          )}

          <label className="register-terms-label">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className={errors.agreeToTerms ? 'register-terms-checkbox-error' : ''}
            />
            <span>
              I agree to the{' '}
              <Link to="/terms" target="_blank" rel="noopener noreferrer" className="register-terms-link">
                terms and conditions
              </Link>
              . <span className="register-required">*</span>
            </span>
          </label>
          {errors.agreeToTerms && (
            <span className="register-error">{errors.agreeToTerms}</span>
          )}

          <button type="submit" className="register-btn">
            Submit
          </button>

          {message && <p className="register-message">{message}</p>}

          <p className="register-footer">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
