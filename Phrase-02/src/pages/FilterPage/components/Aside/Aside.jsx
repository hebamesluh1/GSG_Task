import React from "react";
import Button from "../../../../components/Button/Button";
import { Buttons } from "../../../../constant/Buttons";

import styles from "./aside.module.css";
import { useFilterContext } from "../../../../context/FilterContext";

const Aside = () => {
  const { handleFilter } = useFilterContext();
  return (
    <aside className={styles.filterSection}>
      <h2>Filters Button</h2>
      <div className={styles.btns}>
        {Buttons.map((btn) => (
          <Button
            type="submit"
            text={btn.name}
            onClick={() => handleFilter(btn.name)}
            key={btn.id}
          />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
