import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Statistics() {
    const [mostExpensiveDay, setMostExpensiveDay] = useState(null);
    const [leastExpensiveDay, setLeastExpensiveDay] = useState(null);
    const [mostRepeatedExpense, setMostRepeatedExpense] = useState(null);
  
    useEffect(() => {
      fetchMostExpensiveDay();
      fetchLeastExpensiveDay();
      fetchMostRepeatedExpense();
    }, []);
  
    const fetchMostExpensiveDay = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/mostExpensiveDay');
        setMostExpensiveDay(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const fetchLeastExpensiveDay = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/leastExpensiveDay');
        setLeastExpensiveDay(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const fetchMostRepeatedExpense = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/mostRepeatedExpense');
        setMostRepeatedExpense(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>


<div className="statistics-container">
        <div className="statistic-card">
          <h3>Most Expensive Day</h3>
          {mostExpensiveDay ? (
            <p>
              The most expensive day was {mostExpensiveDay._id} with a total expense of ${mostExpensiveDay.totalAmount}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="statistic-card">
          <h3>Least Expensive Day</h3>
          {leastExpensiveDay ? (
            <p>
              The least expensive day was {leastExpensiveDay._id} with a total expense of ${leastExpensiveDay.totalAmount}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="statistic-card">
          <h3>Most Repeated Expense</h3>
          {mostRepeatedExpense ? (
            <p>
              The most repeated expense was {mostRepeatedExpense._id} with a count of {mostRepeatedExpense.count}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>




 
      </div>
    );
  };