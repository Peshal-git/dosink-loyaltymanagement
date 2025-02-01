import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Index } from "./pages/Index"
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact"
import { Login } from "./pages/Login"
import { Process } from "./pages/Process"
import { Team } from "./pages/Team"
import { OurWork} from "./pages/OurWork"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"


const App = () => {

  return <> 
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
    <Navbar/>
    <main className="flex-grow">
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
    </main>
    <Footer/>
    </div>
  </BrowserRouter>
  </>
}

export default App