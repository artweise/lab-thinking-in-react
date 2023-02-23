import './style.css';

const ProductRow = ({ product }) => {
  return (
    <div className="product-row">
      <div className={product.inStock ? "text-black" : "text-red"}>{product.name}</div>
      <div>{product.price}</div>
    </div>
  );
};

export default ProductRow;
