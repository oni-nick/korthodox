import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Main/Header';
import Section from './Main/Section';
import Footer from './Main/Footer';
import Document from './Document';
import News from './News';
import Ukase from './Document/Ukase';
import Resol from './Document/Resol';
import Organization from './Organization';
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
              <Route path = "/docs" element={<Document/>}/>
              <Route path = "/docs/ukase" element={<Ukase/>}/>
              <Route path = "/docs/resol" element={<Resol/>}/>
              <Route path = "/news" element={<News/>}/>
              <Route path = "/org" element={<Organization/>}/>
            </Routes>
          </Wrapper>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
