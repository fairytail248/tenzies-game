import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tenzies from "./pages/Tenzies.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main style={{ textAlign: "center", padding: "2rem" }}>
              <h1>Welcome to Games Portal</h1>
              <a href="/tenzies">
                <button className="roll-dice">Play Tenzies</button>
              </a>
            </main>
          }
        />
        <Route path="/tenzies" element={<Tenzies />} />
      
      </Routes>
    </BrowserRouter>
  );
}
