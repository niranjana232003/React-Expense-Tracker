
import React, { useState } from "react";
import "../styles/Transaction..css"



function Transaction() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  const categoryEmojis = {
    Salary: "💰",
    Groceries: "🛒",
    Dining: "🍽️",
    Transport: "🚖",
    Entertainment: "🎬",
    Others: "📦",
  };

  // ✅ Delete a transaction
  const handleDelete = (index) => {
    const updated = transactions.filter((_, i) => i !== index);
    setTransactions(updated);
    localStorage.setItem("transactions", JSON.stringify(updated));
  };

  // ✅ Edit a transaction (simple version: prompt user for new values)
  const handleEdit = (index) => {
    const tx = transactions[index];
    const newDesc = prompt("Enter new description:", tx.description);
    const newAmount = prompt("Enter new amount:", tx.amount);

    if (newDesc !== null && newAmount !== null) {
      const updated = [...transactions];
      updated[index] = {
        ...tx,
        description: newDesc,
        amount: parseFloat(newAmount),
      };
      setTransactions(updated);
      localStorage.setItem("transactions", JSON.stringify(updated));
    }
  };

  return (
    <div className="transactions-container">
      <h2>All Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>
                {categoryEmojis[tx.category]} {tx.category}
              </td>
              <td>{tx.description || "No Description"}</td>
              <td className={tx.type === "Income" ? "income" : "expense"}>
                {tx.amount.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </td>
              <td>{tx.date}</td>
              <td>{tx.type}</td>
              <td>
                <div className="action-buttons">
                  <button className="edit" onClick={() => handleEdit(index)}>
                    ✏️ Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(index)}>
                    🗑️ Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
