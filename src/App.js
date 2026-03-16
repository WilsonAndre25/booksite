import React, { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { AllBooksList, MyNavbar, History, Romanc, BooksCarousel,  Posts, Signup, Login1} from './components'
import Home from './pages/Home'

import Footer from "./components/Footer";

import ShowBooks from './components/ShowBooks'

function App() {

  const[books, setBooks]=useState([])

  return (

  

      <BrowserRouter>
 
   <MyNavbar />
    
    <div className='App'>

  
        <Routes>
       
         <Route path="*" element={<Home />} />  
           <Route path="/search" element={<ShowBooks/>} />  
          <Route path="/History" element={<History />} />
          <Route path="/AllBooksList" element={<AllBooksList />} />
          <Route path="/AllBooksList/Posts" element={<Posts />} />
          <Route path="/Login1" element={<Login1/>} />
      
          <Route path="/Signup"element={<Signup />} />

        </Routes>

     

    </div>
     <Footer />
 </BrowserRouter>
    

     
  )

}

export default App 