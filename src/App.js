import { Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainBody from './Components/Main';
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactMe";

function App() {
  return (
    
    <div className="App">

      {/* <Navbar /> */}
  
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm/>} />
        
      </Routes>

      <Footer />

    </div>

  );
}

export default App;
