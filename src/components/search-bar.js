import React from "react";

class SearchBar extends React.Component {
  handleFilterTextChange = (e) => this.props.onFilterTextChange(e.target.value);
  handleInStockChange = (e) => this.props.onInStockChange(e.target.checked);

  render() {
    const {filterText, inStockOnly} = this.props; 
    return (
      <form>
        <input
          type="text"
          placeholder="Поиск..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input id="showInStock"
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          <label htmlFor="showInStock">
            Показывать только товары в наличии
          </label>
        </p>
      </form>
    );
  }
}

export default SearchBar;
