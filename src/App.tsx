import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Page Accueil 
// import About from './pages/About';
import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App () {
  return (
    <Routes>
	    <Route path="/" element={<Home />} /> 
  	  {/* <Route path='/About' element={<About />} /> */}
      <Route path='/Projects' element={<Projects />} />
      {/* <Route path='/Contact' element={<Contact />} /> */}
    </Routes>
  );
}
export default App;