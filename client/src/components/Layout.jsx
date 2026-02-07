import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <Link className="brand" to="/">
            <img src="/images/easygrader_logo.png" alt="EasyGrader Logo" className="logo" />
            <span>EasyGrader</span>
          </Link>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/login">Log in</Link>
          </nav>

          <div className="nav-actions">
            <Link className="btn" to="/login">Log in</Link>
            <Link className="btn primary" to="/">Get started</Link>
          </div>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
