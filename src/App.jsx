import { useState } from "react";
import Navigation from "./components/Layout/Navigation";
import "./index.css";
function App() {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      {currentPage}
    </>
  );
}

export default App;
