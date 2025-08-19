import React from "react";
function TransactionCards(){
    return(
        <div>
            <div className="balance-card">
                <p>Current Balance</p>
                <h1>1000</h1>
            </div>
       
        <div className="summary-card"></div>
        <div className="income-card"></div>
        <p>Total Income</p>
        <h3 className="income">500</h3>
         </div>
    )
}
export default TransactionCards;