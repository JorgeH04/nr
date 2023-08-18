import React, { useState, useEffect } from "react";
import "../App.css";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Alert from "../components/Alert";
import axios from "axios";
 

export function Crud() {
  const [expenses, setExpenses] = useState([]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
 
 

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
      //  const response = await axios.get("http://localhost:4000/api/expenses");
      const response = await axios.get("https://budgetserver-5c928bf99a6c.herokuapp.com/api/expenses");

        const expensesData = response.data.map(expense => {
          return {
            ...expense,
            date: new Date(expense.date) // Convertir la cadena de fecha a un objeto de fecha
          };
        });
        setExpenses(expensesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExpenses();
  }, []);





  

 
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        updateExpense();
      } else {
        addExpense();
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "El concepto no puede estar vacío y el monto debe ser mayor que cero.",
      });
    }
  };

  const addExpense = () => {
    const expense = { charge, amount };
    axios
     // .post("http://localhost:4000/api/expenses", expense)
     .post("https://budgetserver-5c928bf99a6c.herokuapp.com/api/expenses", expense)
      .then((response) => {
        setExpenses([...expenses, response.data]);
        handleAlert({ type: "success", text: "Gasto agregado" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateExpense = () => {
    const updatedExpense = { charge, amount };
    axios
      .put(`http://localhost:4000/api/expenses/${id}`, updatedExpense)
      .then((response) => {
        setExpenses((prevExpenses) =>
          prevExpenses.map((expense) =>
            expense._id === id ? response.data : expense
          )
        );
        setEdit(false);
        handleAlert({ type: "success", text: "Gasto actualizado" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (_id) => {
    axios
     // .delete(`http://localhost:4000/api/expenses/${_id}`)
     .delete(`https://budgetserver-5c928bf99a6c.herokuapp.com/api/expenses/${_id}`)

      
      .then(() => {
        setExpenses((prevExpenses) =>
          prevExpenses.filter((expense) => expense._id !== id)
        );
        handleAlert({ type: "danger", text: "Gasto eliminado" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const clearItems = () => {
    setExpenses([]);
  };

  

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item._id === id);
    if (expense) {
      setCharge(expense.charge);
      setAmount(expense.amount);
      setEdit(true);
      setId(id);
    } else {
      console.error("Expense not found");
    }
  };   



  
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Calculador de Presupuesto</h1>
      <main className="App">
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        Total de gastos:
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>

    
    </>



 
  );
}


