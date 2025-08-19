import React, { useState } from "react";
import AddTransaction from "./AddTransaction"; // ✅ make sure path is correct
import "../styles/Dashboard.css";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <button
        className="add-transaction-btn"
        onClick={() => setShowForm(true)} // ✅ opens the form
      >
        + Add Transaction
      </button>

      {/* Show default text when no form */}
      {!showForm && <p>No transactions yet. Add one!</p>}

      {/* Show AddTransaction form when button is clicked */}
      {showForm && <AddTransaction />}
    </div>
  );
}

export default Dashboard;
