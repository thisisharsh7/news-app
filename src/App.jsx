import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from './pages/NotFound';

const App = () => {


  return (
    <div className=" bg-gray-200">
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div >

  )
}

export default App