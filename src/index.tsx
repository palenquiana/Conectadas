import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import { StoreProvider, AuthProvider } from "./contexts";
import { LoginPage, Wall, SigUpPage } from "./components";
import { Movies } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Wall />} />
            <Route path="wall" element={<Wall />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="sigup" element={<SigUpPage />} />
            <Route path="movies" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </AuthProvider>
);
