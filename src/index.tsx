import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ViewLogin, ViewSigUp } from "./components/pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import { AuthProvider } from "./context/auth";
import { StoreProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="login" element={<ViewLogin />} />
            <Route path="sigup" element={<ViewSigUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </AuthProvider>
);
