import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import { Dashboard } from "./views/Dashboard";
import { LoginContainer } from "./views/Login";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {token && <Route exact path="/app" element={<Dashboard />} />}
          <Route path="/" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

