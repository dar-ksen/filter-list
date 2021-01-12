import React from "react";
import ProductCategoryRow from "./product-category-row";
import ProductRow from "./product-row";

const ProductTable = ({filterText, inStockOnly, products}) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    const { name, category, stocked } = product;
    if ((name.toLowerCase().indexOf(filterText) === -1) || (inStockOnly && !stocked)) {
      return;
    }
    
    if (category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={category}
          key={category} />
      );
    }

    rows.push(
      <ProductRow
        product={product}
        key={name}
      />
    );
    lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
