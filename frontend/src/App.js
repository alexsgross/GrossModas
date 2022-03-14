import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {LinkContainer} from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Gross Modas</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>  
          
        </header>
        <main>
          <Container className="mt-3" >
            <Routes>
              <Route path="/products/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>  
          </Container>        
        </main>
        <footer>
          <div className="text-center"> Alex Gross - Todos os direitor reservados </div>
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
