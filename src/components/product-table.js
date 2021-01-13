import React from "react";
import ProductCategoryRow from "./product-category-row";
import ProductRow from "./product-row";

const ProductTable = ({filterText, inStockOnly, products}) => {
  const filteredProducts = products
    .filter(({ name, stocked, price }) => ((name.toLowerCase().indexOf(filterText) !== -1) || (price.toLowerCase().indexOf(filterText) !== -1)) && !(inStockOnly && !stocked) )
  const rows = [];
  let lastCategory = null;

  filteredProducts.forEach((product) => {
    const { name, category } = product;
    
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

  if (rows.length === 0) {
    return <p>Ничего не найдено...</p>;
  }

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
