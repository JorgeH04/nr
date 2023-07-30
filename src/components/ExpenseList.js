import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
import Pagination from "./Pagination";


const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcular el índice del último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calcular el índice del primer elemento de la página actual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Obtener los elementos de la página actual
  const currentItems = expenses.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(expenses.length / itemsPerPage);

  // Cambiar a la página siguiente
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Cambiar a la página anterior
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };



  return (
    <>
      <ul className="list">
        {currentItems.map((expense) => {
          return (
            <ExpenseItem
              key={expense._id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      )}
      {/* {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          Borrar gastos
          <MdDelete className="btn-icon" />
        </button>
      )} */}
    </>
  );
};

//   return (
//     <>
//       <ul className="list">
//         {expenses.map(expense => {
//           return (
//             <ExpenseItem
//               key={expense._id}
//               expense={expense}
//               handleDelete={handleDelete}
//               handleEdit={handleEdit}
//             />
//           );
//         })}
//       </ul>

//       {expenses.length > 0 && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           handlePrevPage={handlePrevPage}
//           handleNextPage={handleNextPage}
//         />
//       )}

//       {expenses.length > 0 && (
//         <button className="btn" onClick={clearItems}>
//           clear expenses
//           <MdDelete className="btn-icon" />
//         </button>
//       )}
//     </>
//   );
// };

export default ExpenseList;