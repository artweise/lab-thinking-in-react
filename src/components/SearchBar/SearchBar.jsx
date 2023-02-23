import './style.css';

const SearchBar = ({ searchProduct, handleCheckbox }) => {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search</label>
      <input
        onChange={(e) => searchProduct(e.target.value)}
        id="search"
        type="text"
      />
      <div className="checkbox-ctn">
        <input
          type="checkbox"
          onChange={(e) => handleCheckbox(e.target.checked)}
        />
        <div>Only show products in stock</div>
      </div>
    </div>
  );
};

export default SearchBar;
