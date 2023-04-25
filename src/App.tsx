import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Main/Header';
import Section from './Main/Section';
import Footer from './Main/Footer';
import Dw from "./Dw";
import Ads from "./Ads"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path = "/" element={<Section/>}/>
          <Route path = "/dw" element={<Dw/>}/>
          <Route path = "/ads" element={<Ads/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
