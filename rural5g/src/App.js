import React from "react"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Aluno from "./pages/cadastro/Aluno";
import Contato from "./pages/contato/Contato";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Sobre from "./pages/sobre/Sobre";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Voluntario from "./pages/cadastro/Voluntario";
import Escola from "./pages/cadastro/Escola";
import Doacao from "./pages/cadastro/Doacao";
import AreaCadastro from "./pages/cadastro/AreaCadastro";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/signin" element={<Login />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/voluntario" element={<Voluntario />}/>
        <Route path="/escola" element={<Escola />}/>
        <Route path="/doacao" element={<Doacao />}/>
        <Route path="/signup" element={<AreaCadastro />}/>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
