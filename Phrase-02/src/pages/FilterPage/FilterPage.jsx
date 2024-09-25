import React from "react";

import { Aside, Content } from "./components";
import Layout from "../../Layout";

import styles from "./filter.module.css";
import FilterProvider from "../../context/FilterContext";

const FilterPage = () => {
  return (
    <FilterProvider>
      <Layout>
        <main className={styles.content}>
          <Aside />
          <Content />
        </main>
      </Layout>
    </FilterProvider>
  );
};

export default FilterPage;
