import React from "react";
import Item from "./Item";
import { MdDelete } from "react-icons/md";
const ListItem = ({ item }) => {
  return (
    <div>
      <ul className="list">
        {item.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
      {item.length > 0 && (
        <button className="btn">
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </div>
  );
};

export default ListItem;
