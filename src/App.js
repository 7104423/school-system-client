import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import "./assets/style.css";
import { Dashboard } from "./views/Dashboard";
import { LoginContainer } from "./views/Login";

function App() {
  const token = localStorage.get("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          {token && <Route path="/app" element={<Dashboard />} />}
          <Redirect to="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

