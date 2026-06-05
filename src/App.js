
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import {AllBooksList, MyNavbar, History,Posts,Signup, Login1} from './components/index.js'
import Home from './pages/Home.jsx'
import HomeBooks from './components/HomeBooks.jsx'
import {AuthProvider } from "./components/AuthCriterion.jsx"
import Profile from './components/Profile.jsx'
import Footer from "./components/Footer.jsx";
import ShowBooks from './components/ShowBooks.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {CartProvider } from './components/CartContext.jsx'
import Ordes from './components/Ordes.jsx'


function App() {

  return (

 <AuthProvider>
   <CartProvider> 
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
          <Route path="/home"element={<HomeBooks/>} />
          <Route path="/Profile"element={<Profile/>} />  
          <Route path='/Ordes'element={<Ordes/>}/>
        </Routes>
    </div>
     <Footer />
  
 </BrowserRouter>
 </CartProvider>
        </AuthProvider>
  )

}
export default App 

