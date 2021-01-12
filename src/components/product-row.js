import React from "react";

const ProductRow = ({product: {name, stocked, price}}) => {
  return(
    <tr className={!stocked ? 'warning' : ''}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
