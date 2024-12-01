import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/paginas/Home";
import PetList from "./components/paginas/pet/PetList";
import Container from "react-bootstrap/Container";
import PetIncluir from "./components/paginas/pet/PetIncluir";
import PetAlterar from "./components/paginas/pet/PetAlterar";

import ServiceList from "./components/paginas/service/ServiceList";
import ServiceIncluir from "./components/paginas/service/ServiceIncluir";
import ServiceAlterar from "./components/paginas/service/ServiceAlterar";

function App() {
  

  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Container>
          <Header/>

          <Routes>
            <Route exact path="" element={<Home/>}  />

            <Route path="/pet" >
              <Route exact path="" element={<PetList/>}  />
              <Route exact path="list" element={<PetList/>}  />
              <Route exact path="incluir" element={<PetIncluir/>}  />
              <Route exact path="alterar/:id" element={<PetAlterar/>}  />
            </Route>

            <Route path="/service" >
              <Route exact path="" element={<ServiceList/>}  />
              <Route exact path="list" element={<ServiceList/>}  />
              <Route exact path="incluir" element={<ServiceIncluir/>}  />
              <Route exact path="alterar/:id" element={<ServiceAlterar/>}  />
            </Route>

          </Routes>

        </Container>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
