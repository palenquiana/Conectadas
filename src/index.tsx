import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import { StoreProvider, AuthProvider } from "./contexts";
import { ViewLogin, Wall, LogOut, ViewSigUp } from "./components";
import { ViewMovies } from "./components";

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
            <Route path="login" element={<ViewLogin />} />
            <Route path="sigup" element={<ViewSigUp />} />
            <Route path="movies" element={<ViewMovies />} />
            <Route path="logout" element={<LogOut />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </AuthProvider>
);
