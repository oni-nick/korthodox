import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Main/Header';
import Section from './Main/Section';
import Footer from './Main/Footer';
import Dw from "./Dw";
import Ads from "./Ads"
import CreateAds from './Ads/CreateAds'
import styled from "styled-components";
import Login from './Login';

const Wrapper = styled.div`
  min-height : calc(100vh - 300px);
  min-width : 100vh;
`
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Wrapper>
            <Header/>
            <Routes>
              <Route path = "/" element={<Section/>}/>
              <Route path = "/dw" element={<Dw/>}/>
              <Route path = "/ads" element={<Ads/>}/>
              <Route path = "/ads/write" element={<CreateAds/>}/>
              <Route path = "/login" element={<Login/>}/>
            </Routes>
          </Wrapper>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
