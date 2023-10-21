import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import Detail from "./pages/Detail";

const App = () => {




  return (
    <div className=" bg-gray-200">
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:Id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div >

  )
}

export default App