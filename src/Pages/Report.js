import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "../styles/Report.css";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function Report() {
  const [transactions, setTransactions] = useState([]);

  // Fetch your transactions (you can replace with API later)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(saved);
  }, []);

  // Split expenses and income
  const income = transactions.filter((t) => t.type === "Income");
  const expense = transactions.filter((t) => t.type === "Expense");

  const totalIncome = income.reduce((acc, t) => acc + Number(t.amount), 0);
  const totalExpense = expense.reduce((acc, t) => acc + Number(t.amount), 0);

  // Group expenses by category
  const categories = {};
  expense.forEach((t) => {
    categories[t.category] = (categories[t.category] || 0) + Number(t.amount);
  });

  const pieData = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"],
      },
    ],
  };

  const barData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [totalIncome, totalExpense],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="report">
      <h2>📊 Report</h2>

      <div className="summary">
        <p><strong>Total Income:</strong> ₹{totalIncome}</p>
        <p><strong>Total Expense:</strong> ₹{totalExpense}</p>
        <p><strong>Balance:</strong> ₹{totalIncome - totalExpense}</p>
      </div>

      <div className="charts">
        <div className="chart small-chart">
          <h3>Expense by Category</h3>
          <Pie data={pieData} options={{ maintainAspectRatio: false }} />
        </div>

        <div className="chart small-chart">
          <h3>Income vs Expense</h3>
          <Bar data={barData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
}

export default Report;
