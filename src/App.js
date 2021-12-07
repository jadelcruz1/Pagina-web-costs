import Container from './components/layout/Container'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NewProject from './components/pages/NewProject';




function App() {
  return (
                      
  <Router>
    <Navbar />
    <Container customClass="min-height">
            <Routes>    

                <Route path="/" element={<Home/>} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/empresa" element={<Empresa />} />
                <Route path="/newproject" element={<NewProject />} />
                  
            </Routes>
          </Container>
        <Footer />
  </Router>


);
}
    
export default App;
