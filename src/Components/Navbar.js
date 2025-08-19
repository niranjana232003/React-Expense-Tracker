import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current path:", location.pathname);
  }, [location]);

  // helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <h1 className="logo">Expense Tracker</h1>
      <ul className="nav-links">
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/">📊 Dashboard</Link>
        </li>
        <li className={isActive("/transaction") ? "active" : ""}>
          <Link to="/transaction">💸 Transaction</Link>
        </li>
        <li className={isActive("/report") ? "active" : ""}>
          <Link to="/report">📝 Report</Link>
        </li>
        <li className={isActive("/get-quote") ? "active" : ""}>
          <Link to="/get-quote">💬 Get Quote</Link>
        </li>
        <li className={isActive("/reset") ? "active" : ""}>
          <Link to="/reset">🔄 Reset</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
