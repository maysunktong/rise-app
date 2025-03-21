import { useState } from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Navigation from "./components/Layout/Navigation";
import Homepage from "./pages/homepage";

import "./index.css";
function App() {
  const [currentPage, setCurrentPage] = useState(<Homepage />);

  return (
    <div className="layout">
      <Navigation setCurrentPage={setCurrentPage} />
      <div className="contentContainer">
        <Header />
        <section className="currentPage">{currentPage}</section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
