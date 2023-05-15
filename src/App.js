import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const RandomizeColor = lazy(() => import("./projects/02-randomizeColor/RandomizeColor"));
const EsignatureApp = lazy(() => import("./projects/01-e-signature/EsignatureApp"));

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/esignature">Esignature</Link>
            </li>
            <li>
              <Link to="/randomizecolor">Randomize Color</Link>
            </li>
          </ul>
        </nav> */}

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/esignature" element={<EsignatureApp />} />
            <Route path="/randomizecolor" element={<RandomizeColor />} />
            <Route path="/" element={<div>
              <h2>Welcome to the homepage</h2>
              <p>Please select an app to continue:</p>
              <ul>
                <li>
                  <Link to="/esignature">Esignature</Link>
                </li>
                <li>
                  <Link to="/randomizecolor">Randomize Color</Link>
                </li>
              </ul>
            </div>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
