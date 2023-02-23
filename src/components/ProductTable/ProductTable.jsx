import ProductRow from '../ProductRow/ProductRow';
import './style.css';

const ProductTable = ({ productsList }) => {
  return (
    <div className="table">
      <div className="thead">
        <div>Name</div>
        <div>Price</div>
      </div>
      {productsList.map((item, index) => (
        <ProductRow key={index} product={item} />
      ))}
    </div>
  );
};

export default ProductTable;
