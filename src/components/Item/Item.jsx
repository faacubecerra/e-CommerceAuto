import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ title, price, img, stock, category, description, id }) => {
  console.log(img);
  return (
    <div className="card">
      <Link to={`/item/${id}`}>
        <img src={img}></img>
      </Link>
      <ItemCount
        stock={stock}
        initial={1}
        title={title}
        price={price}
        description={description}
      />
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
};

export default Item;
