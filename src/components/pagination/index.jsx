import React from "react";
import "../pagination/pagination.css";
const Pagination = ({ page, setPage }) => {
  const back = () => {
    setPage(page - 1);
  };
  const next = () => {
    setPage(page + 1);
  };
  return (
    <div className="btns">
      <button disabled={page <= 0} onClick={back} className="btn1">
        back
      </button>
      <p>{page}</p>
      <button onClick={next} className="btn1">
        next
      </button>
    </div>
  );
};

export default Pagination;
