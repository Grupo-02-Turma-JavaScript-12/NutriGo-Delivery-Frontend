import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/navbar/Navbar"
import Home from "./assets/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
