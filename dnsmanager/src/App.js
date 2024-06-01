import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./pages/header-footer/Header";
import Footer from "./pages/header-footer/Footer";
import { Routes, Route } from "react-router-dom";
import DomainDashboard from "./pages/dashboard/DomainDashboard";
import { useSelector } from "react-redux";
function App() {
  const { isLoggedIn, username } = useSelector((state) => state);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <DomainDashboard /> : <Login />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
