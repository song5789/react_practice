import { useState } from "react";

function ProductCategoryRow(props) {
  const category = props.category;
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
function ProductRow(props) {
  const product = props.product;
  const name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function SearchBar({ filterText, isStockOnly, onChange, onChecked }) {
  return (
    <form>
      <input placeholder="Search..." name="filterText" value={filterText} onChange={onChange} />
      <p>
        <input type="checkbox" name="isStockOnly" checked={isStockOnly} onClick={onChecked} /> Only show products in stock
      </p>
    </form>
  );
}

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  const { filterText, isStockOnly } = props;
  console.log(isStockOnly);

  props.products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (isStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}

function FilterableProductTable(props) {
  const [filter, setFilter] = useState({
    filterText: "",
    isStockOnly: true,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const onChecked = (e) => {
    const { name } = e.target;
    setFilter({
      ...filter,
      [name]: !filter.isStockOnly,
    });
  };

  return (
    <>
      <SearchBar filterText={filter.filterText} isStockOnly={filter.isStockOnly} onChange={onChange} onChecked={onChecked} />
      <ProductTable products={props.PRODUCTS} filterText={filter.filterText} isStockOnly={filter.isStockOnly} />
    </>
  );
}

export default FilterableProductTable;
