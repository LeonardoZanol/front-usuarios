import { BrowserRouter, Routes, Route } from "react-router-dom"
import Usuarios from "./pages/Usuarios"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
