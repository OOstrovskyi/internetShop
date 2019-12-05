import React from "react";
import deleteImg from '../../../images/del.gif';
import '../app.css';

const imagesFolder = '../../images/products/';

export default function Product({id, title, price, description, image, isAdmin, onDeleteItem}) {
  return (
    <div className="product">
      { isAdmin && <img src={deleteImg} id={id} onClick={onDeleteItem} alt='delete product' />}
      <h4>{title}</h4>
      <img  src= {imagesFolder + image} alt={description} />
      <p>{description}</p>
      <p>price: {price}</p>   
    </div>
  );
}