import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage
}) => {
  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span className="page-info">
        Página {currentPage} de {totalPages}
      </span>
      <button
        className="btn"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;