import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";


const ExpenseItem = ({
  expense: { _id, charge, amount, date },
  handleDelete,
  handleEdit
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense"> <small>{date.toLocaleDateString()}</small> {charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(_id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(_id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
