import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import { validateUser } from "./utils/api";
import { Dashboard } from "./views/Dashboard";
import { LoginContainer } from "./views/Login";
import { WholePageLoader } from "./containers/WholePageLoader";

function App() {
  const [hasAccess, setAccess] = useState(null);

  useEffect(() => {
    const storageToken = localStorage.getItem("token");
    if (!storageToken) {
      setAccess(false);
      return;
    }
    (async () => {
      try {
        await validateUser();
        setAccess(true);
      } catch (error) {
        setAccess(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      {hasAccess === null && <WholePageLoader />}
      {hasAccess !== null && (
        <BrowserRouter>
          <Routes>
            {hasAccess && (
              <>
                <Route exact path="/app" element={<Dashboard />} />
                <Route path="/app/*" element={<Dashboard />} />
              </>
            )}
            <Route path="*" element={<LoginContainer />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

