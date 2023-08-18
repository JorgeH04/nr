import React, { useState, useEffect } from "react";
import "../App.css";
import ExpenseCards from "../components/ExpenseCards";
 

export function Expenses() {
 
  const [groupedExpenses, setGroupedExpenses] = useState([]);
  const [totalsPerDay, setTotalsPerDay] = useState([]);


  useEffect(() => {
    fetch('http://localhost:4000/api/expensesGrouped')
      .then(response => response.json())
      .then(data => {
        setGroupedExpenses(data);
        
        // Calcular los totales por día
        const calculateTotalsPerDay = () => {
          const totals = data.map((group) => {
            const total = group.charges.reduce((acc, charge) => {
              return acc + charge.amount;
            }, 0);
            return { date: group._id, total };
          });
          setTotalsPerDay(totals);
        }; 
        calculateTotalsPerDay();     
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <>
     <h1>Historial</h1>
  

      <ExpenseCards
        groupedExpenses={groupedExpenses}
        totalsPerDay={totalsPerDay}
      />

    </>
  );
}

 