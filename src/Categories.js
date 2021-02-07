import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}

      {/* <button
        type="button"
        className="filter-btn"
        onClick={() => filterItems("breakfast")}>
        BreakFast
      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterItems("lunch")}>
        Lunch
      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterItems("shakes")}>
        Shakes
      </button> */}
    </div>
  );
};
export default Categories;
