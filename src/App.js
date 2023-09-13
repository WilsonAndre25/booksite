
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { AllBooksList, MyNavbar, History, Romanc, Home, Posts, Signup, Login1} from './components'


function App() {

  return (

    <div className='App'>

      <BrowserRouter>
      <Routes>
       <Route path="/Romanc" element={<Romanc />} />
       </Routes>
       
      <MyNavbar  />

        <Routes>
        <Route path="/MyNavbar " element={<MyNavbar  />} />
          <Route path="*" element={<Home />} />
          <Route path="/History" element={<History />} />
          <Route path="/AllBooksList" element={<AllBooksList />} />
          <Route path="/AllBooksList/Posts" element={<Posts />} />
          <Route path="/Login1" element={<Login1/>} />
          <Route path="/Signup"element={<Signup />} />

        </Routes>

      </BrowserRouter>

    </div>
  )

}

export default App 