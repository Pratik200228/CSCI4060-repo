import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <Link className="brand" to="/login">
            <img src="/images/easygrade_logo.svg" alt="EasyGrade" className="logo" />
            <span>EasyGrade</span>
          </Link>

          <nav className="nav-links">
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
          </nav>

          <div className="nav-actions">
            <Link className="btn" to="/login">Log in</Link>
            <Link className="btn primary" to="/register">Get started</Link>
          </div>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
