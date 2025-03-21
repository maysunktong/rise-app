import { useState } from "react";
import Navigation from "./components/Layout/Navigation";
import Homepage from './pages/homepage';

import "./index.css";
function App() {
  const [currentPage, setCurrentPage] = useState(<Homepage />);

  return (
    <div className="layout">
      <Navigation setCurrentPage={setCurrentPage} />
      <section className="currentPage">{currentPage}</section>
    </div>
  );
}

export default App;
