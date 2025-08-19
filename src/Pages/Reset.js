// Reset.js
import React from "react";

function Reset({ setTransactions }) {
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all transactions?")) {
      setTransactions([]);           // Clear all transactions
      localStorage.removeItem("transactions"); // Clear localStorage
      alert("All transactions have been reset!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Reset Expense Tracker</h2>
      <p>Click below to delete all transactions.</p>
      <button style={styles.button} onClick={handleReset}>
        Reset All
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    margin: "20px auto",
    width: "300px",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
  },
};

export default Reset;
