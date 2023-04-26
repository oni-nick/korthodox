import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from './Main/Header';
import Section from './Main/Section';
import Footer from './Main/Footer';
import Dw from './Dw';
import Ads from './Ads'
import CreateAds from './Ads/CreateAds'
import Login from './Login';
import { useEffect } from 'react';
import { UserInfo, useUserDispatch, useUserState } from './context/user';

const Wrapper = styled.div`
  min-height : calc(100vh - 300px);
  min-width : 100vh;
`
function App() {
  const dispatch = useUserDispatch();
  useEffect(() => {
    axios.get<UserInfo | null>('/api/user/me')
      .then(res => {
        if (res.data) {
          return dispatch({ type: 'LOG_IN', data: res.data });
        }
      });
  }, []);

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
