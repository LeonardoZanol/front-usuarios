import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Usuarios from "./pages/Usuarios"
import Dados from "./pages/Dados"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/usuarios" />}/>

        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/dados/:id" element={<Dados />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
