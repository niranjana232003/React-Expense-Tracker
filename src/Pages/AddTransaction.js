import React, { useState } from "react";
import "../styles/AddTransaction.css";

function AddTransaction() {
  const [type, setType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      type,
      amount: Number(amount),
      category,
      description,
      date,
    };

    // Get old transactions from localStorage
    const oldData = JSON.parse(localStorage.getItem("transactions")) || [];

    // Add new one
    const updated = [...oldData, newTransaction];

    // Save back to localStorage
    localStorage.setItem("transactions", JSON.stringify(updated));

    // Reset form
    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");

    alert("Transaction Added ✅");
  };

  return (
    <div className="add-transaction-container">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="Expense"
              checked={type === "Expense"}
              onChange={(e) => setType(e.target.value)}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Income"
              checked={type === "Income"}
              onChange={(e) => setType(e.target.value)}
            />
            Income
          </label>
        </div>

        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
