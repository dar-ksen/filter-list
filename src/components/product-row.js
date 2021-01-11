import React from "react";

class ProductRow extends React.Component {
  render() {
    const {name, stocked, price} = this.props.product;
    const $name = stocked ? name : <span style={{ color: "red" }}>{name}</span>;
    return (
      <tr>
        <td>{$name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
