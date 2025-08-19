import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Transaction from "./Pages/Transaction";
import Report from "./Pages/Report";
import Navbar from "./Components/Navbar";
import NotFound from "./Pages/NotFound";
import AddTransaction from "./Pages/AddTransaction";
import GetQuote from "./Pages/GetQuote"; 
import Reset from "./Pages/Reset";

function App() {
  // 1️⃣ Transactions state
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  // 2️⃣ Sync with localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          {/* Dashboard route */}
          <Route path="/" element={<Dashboard transactions={transactions} />} />

          {/* ✅ Only one Add Transaction route */}
          <Route
            path="/add-transaction"
            element={
              <AddTransaction
                transactions={transactions}
                setTransactions={setTransactions}
              />
            }
          />

          {/* Other pages */}
          <Route path="/transaction" element={<Transaction transactions={transactions} />} />
          <Route path="/report" element={<Report transactions={transactions} />} />
          <Route path="/get-quote" element={<GetQuote />} />

          {/* Reset page */}
          <Route
            path="/reset"
            element={<Reset setTransactions={setTransactions} />}
          />

          {/* Fallback page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
