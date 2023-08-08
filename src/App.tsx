import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Main/Header';
import Section from './Main/Section';
import Footer from './Main/Footer';
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
            </Routes>
          </Wrapper>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
