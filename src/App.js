
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
 
import { AllBooksList,MyNavbar, History,Romanc,Home } from './components'




function App () {
   
return (

  <div className ='App'>
     
    <BrowserRouter>
   <MyNavbar />
  
<Routes>

  <Route path="/History" element = {<History/>} />
  <Route path="/Romanc" element = {<Romanc />} />
  <Route path="/AllBooksList" element = {<AllBooksList/>} />
  <Route path= "*"element ={<Home/>}/>
</Routes>

</BrowserRouter>
    
  </div>
)

}



export default App 