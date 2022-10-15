import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ViewLogin, ViewSigUp } from "./components/pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import { SigUp } from "./components/Forms/SigUp";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="login" element={<ViewLogin />} />
        <Route path="sigup" element={<ViewSigUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
