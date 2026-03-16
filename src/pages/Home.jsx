import MyNavbar from "../components/MyNavbar";
import BooksCarousel from "../components/BooksCarousel";
import BooksCarousel1 from "../components/BooksCarousel1";
import BooksCarousel2 from "../components/BooksCarousel2";
import BooksCarousel3 from "../components/BooksCarousel3";
import BooksCarousel4 from "../components/BooksCarousel4";


import "../pages/Home"
import Footer from "../components/Footer";
import SearchCarrousel from "../components/SearchCarrousel";

function Home() {

    return (

           <div className="home-container">
        <>

      

          <BooksCarousel />
          <BooksCarousel1/>
          <BooksCarousel2/>
          <BooksCarousel3/>
          <BooksCarousel4/>
          <SearchCarrousel/>
      

        </>
  </div>
    );

}


export default Home