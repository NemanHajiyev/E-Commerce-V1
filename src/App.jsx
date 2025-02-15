import { BrowserRouter, Route, Routes } from "react-router";
import './Styles/App.css'
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import PageContainers from "./Containers/PageContainers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./Components/Pages/Detail";
import Basket from "./Components/Pages/Basket";

function App() {

  return (
    <PageContainers>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </PageContainers>
  )
}

export default App