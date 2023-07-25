
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AllBooksList, MyNavbar, History, Romanc } from './components'



function App() {

  return (

    <div className="App">

      <BrowserRouter>

        <MyNavbar proTitle="Online Libary" />

        <Routes>
          <Route path="/History" element={<History />} />
          <Route path="/Romanc" element={<Romanc />} />
          <Route path="/AllBooksList" element={<AllBooksList/>} />
        </Routes>

      </BrowserRouter>

    </div>
  )
};




export default App