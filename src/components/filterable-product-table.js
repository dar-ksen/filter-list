import React from "react";

import SearchBar from "./search-bar";
import ProductTable from "./product-table";

export default class FilterableProductTable extends React.Component {
    state = {
      filterText: '',
      inStockOnly: false
    }
  
    handleFilterTextChange = (filterText)  => this.setState({filterText: filterText});
    
    handleInStockChange = (inStockOnly) => this.setState({inStockOnly: inStockOnly})
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText.toLowerCase()}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText.toLowerCase()}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }
