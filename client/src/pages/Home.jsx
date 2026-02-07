import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="section">
      <h1>EasyGrader</h1>
      <p className="muted">Submit code. Run tests. See results instantly.</p>
      <div style={{ marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link className="btn primary" to="/login">Log in</Link>
        <Link className="btn" to="/login">Get started</Link>
      </div>
      <footer className="footer">
        <div className="muted tiny">
          © {new Date().getFullYear()} EasyGrader. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
