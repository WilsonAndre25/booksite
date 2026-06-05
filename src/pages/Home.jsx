
import BooksCarousel from "../components/BooksCarousel";
import BooksCarousel1 from "../components/BooksCarousel1";
import BooksCarousel2 from "../components/BooksCarousel2";
import BooksCarousel3 from "../components/BooksCarousel3";
import BooksCarousel4 from "../components/BooksCarousel4";
import "../pages/Home"
import SearchCarrousel from "../components/SearchCarrousel";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {

  return (

    <div className="home-container">
      <>
        <BooksCarousel />
        <BooksCarousel1 />
        <BooksCarousel2 />
        <BooksCarousel3 />
        <BooksCarousel4 />
        <SearchCarrousel />
      </>
    </div>
  );

}
export default Home