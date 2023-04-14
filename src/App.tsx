import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import DWpage from "./component/DWpage";
import Ads from "./component/Ads"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path = "/" element={<Section/>}/>
          <Route path = "/dw" element={<DWpage/>}/>
          <Route path = "/ads" element={<Ads/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
