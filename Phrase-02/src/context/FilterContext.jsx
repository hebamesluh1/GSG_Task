import { useContext, useState } from "react";
import { createContext } from "react";
import { products } from "./../mock/products";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(products);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredData(products);
    } else {
      setFilteredData(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <FilterContext.Provider value={{ filteredData, handleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
