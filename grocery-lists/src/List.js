import React from "react";

const List = ({ item }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return <article key={id} className="grocery-item"></article>;
      })}
    </div>
  );
};

export default List;
