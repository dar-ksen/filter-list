import React from "react";

import SearchBar from "./search-bar";
import ProductTable from "./product-table";

class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
  
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

  export default FilterableProductTable;