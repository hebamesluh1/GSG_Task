import { Suspense } from "react";
import FilterPage from "./pages/FilterPage/FilterPage";

import './index.css'

function App() {
  return (
    <Suspense fallback="<h1>Loading...</h1>">
      <FilterPage />
    </Suspense>
  );
}

export default App;
