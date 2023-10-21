import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from './pages/NotFound';

const App = () => {


  return (
    <div className="container mx-auto bg-gray-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >

  )
}

export default App