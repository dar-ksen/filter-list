import React from "react";

const ProductRow = ({product: {name, stocked, price}}) => {
  const $name = stocked ? name : <span style={{ color: "red" }}>{name}</span>;
  return(
    <tr>
      <td>{$name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
