import React from "react";



const ExpenseCards = ({
    groupedExpenses: { _id, charge, amount },
    totalsPerDay,
    groupedExpenses,

    
}) => {
  return (
    <div className="card-container">
    {groupedExpenses.map((group) => (
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

export default ExpenseCards;
