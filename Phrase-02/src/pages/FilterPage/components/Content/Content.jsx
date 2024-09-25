import React from "react";

import Card from "../../../../components/Card/Card";

import styles from "./content.module.css";
import { useFilterContext } from "../../../../context/FilterContext";

const Content = () => {
  const {filteredData} = useFilterContext();
  return (
    <section className={styles.contentSection}>
      <div className={styles.productList}>
        {filteredData.map((product) => (
          <Card 
          key={product.name}
          {...product} />
        ))}
      </div>
    </section>
  );
};

export default Content;
