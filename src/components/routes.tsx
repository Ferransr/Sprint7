import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./welcome";
import PresupuestoWeb from "./presupuestoWeb";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="/presupuestoWeb" element={<PresupuestoWeb />}></Route>
      **<Route path="*" element={<h1>ERROR 404</h1>}></Route>**
    </Routes>
  </BrowserRouter>
);
