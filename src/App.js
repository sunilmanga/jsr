import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aboutus from './components/About us';
import CSR from './components/CSR';
import Home from './components/Home';
import Projects from "./components/Projects";
import NoPage from "./components/NoPage";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Contact from "./components/Contact us";
import Careers from "./components/Careers";
import Assosciate from "./components/Assosciate";
import Forms from "./components/Forms";
import Link1 from "./components/Link1";

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/aboutus" element={<Aboutus/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>
          <Route exact path="/link1" element={<Link1/>}></Route>
          <Route exact path="/gallery" element={<Gallery/>}></Route>
          <Route exact path="/awards" element={<Awards/>}></Route>
          <Route exact path="/csr" element={<CSR/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/forms" element={<Forms/>}></Route>
          <Route exact path="/careers" element={<Careers/>}></Route>
          <Route exact path="/assosciate" element={<Assosciate/>}></Route>
          <Route path="*" element={<NoPage/>} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
