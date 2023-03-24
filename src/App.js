import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/Navbar';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <div style={{position: "fixed", width: "100%", zIndex:1}}>

      <NavigationBar />
      </div>
      <div style={{ paddingTop: "64px" }}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      <div style={{}}>
      <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;
