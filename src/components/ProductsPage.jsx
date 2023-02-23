import { useState } from 'react';
import ProductTable from './ProductTable/ProductTable';
import jsonData from '../data.json';
import SearchBar from './SearchBar/SearchBar';

const ProductsPage = () => {
  // useState is an array, after destructuring I deleted the function, bcs I didn't use it
  const [productsAll] = useState(jsonData);
  const [products, setProducts] = useState(jsonData);

  const searchProduct = (str) => {
    const filteredProductsList = productsAll.filter((item) =>
      item.name.toLowerCase().includes(str.toLowerCase())
    );
    setProducts(filteredProductsList);
  };

  const removeNotInStock = (isChecked) => {
    if (isChecked) {
      const filteredProductsList = productsAll.filter(
        (item) => item.inStock === isChecked
      );
      setProducts(filteredProductsList);
    } else {
      setProducts(productsAll);
    }
  };

  return (
    <div>
      <h1 className="pageTitle">IronStore</h1>
      {/* props is an object, which has key and value */}
      {/* searchProduct={searchProduct} props which get the value function*/}
      <SearchBar
        searchProduct={searchProduct}
        handleCheckbox={removeNotInStock}
      />
      <ProductTable productsList={products} />
    </div>
  );
};

export default ProductsPage;
