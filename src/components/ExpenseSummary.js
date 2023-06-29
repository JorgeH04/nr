import React from "react";

const ExpenseSummary = ({ expenses, totalsPerDay }) => {
  return (
    <div className="card-container">
      {expenses.map((group) => (
        <div key={group._id} className="card">
          <h3>{group._id}</h3>
          <ul>
            {group.charges.map((charge) => (
              <li key={charge.charge}>
                {charge.charge}: ${charge.amount}
              </li>
            ))}
          </ul>
          <p>Total: ${totalsPerDay.find((total) => total.date === group._id)?.total}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseSummary;