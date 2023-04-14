import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import DWpage from "./component/DWpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path = "/" element={<Section/>}/>
          <Route path = "/ads" element={<DWpage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
