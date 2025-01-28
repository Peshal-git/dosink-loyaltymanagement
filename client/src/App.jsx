import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Index } from "./pages/Index"
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact"
import { Login } from "./pages/Login"
import { Process } from "./pages/Process"
import { Team } from "./pages/Team"
import { OurWork} from "./pages/OurWork"
import { Navbar } from "./components/Navbar"


const App = () => {

  return <> 
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Index/>} />
      <Route path = "*" element = {<Index/>} />
      <Route path = "/contact" element = {<Contact/>} />
      <Route path = "/services" element = {<Services/>} />
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/process" element = {<Process/>} />
      <Route path = "/team" element = {<Team/>} />
      <Route path = "/our-work" element = {<OurWork/>} />

      

    </Routes>
  </BrowserRouter>
  </>
}

export default App