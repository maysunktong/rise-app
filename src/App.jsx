import { useState } from "react";
import Footer from "./components/Layout/Footer";
import Navigation from "./components/Layout/Navigation";
import Homepage from "./pages/homepage";

import "./index.css";
function App() {
  const [currentPage, setCurrentPage] = useState(<Homepage />);

  return (
    <div className="layout">
      <Navigation setCurrentPage={setCurrentPage} />
      <div>
        <section className="currentPage">{currentPage}</section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
