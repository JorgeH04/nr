import React from "react";
import { MdSend } from "react-icons/md";
const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
  selectedActivity,
          handleSelect 
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">actividad</label>
          <select
             className="form-control"
             id="charge"
             name="charge"
             value={charge}
             onChange={handleCharge}
           >
              <option value="">Selecciona una actividad</option>
              <option value="Rent">Rent</option>
              <option value="Groceries">Groceries</option>
              <option value="Outing">Outing</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Car insurance">Car insurance</option>
              <option value="Public transport">Public transport</option>
              <option value="Taxes">Taxes</option>
              <option value="Cellphone">Cellphone</option>
              <option value="Netlix">Netflix</option>
         </select>
          {/* <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          /> */}
        </div>
        <div className="form-group">
          <label htmlFor="amount">monto</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "editar" : "agregar"}
        {/* submit  */}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;