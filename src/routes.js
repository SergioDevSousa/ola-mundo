import PaginaPadrao from "Componentes/PaginaPadrao";
import Rodape from "Componentes/Rodape";
import NaoEncontrada from "./Componentes/PaginaNaoEncontrada";
import Post from "Paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Inicio from './Paginas/Inicio';
import SobreMim from './Paginas/SobreMim';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
