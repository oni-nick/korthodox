import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { UserInfo, useUserDispatch } from './context/user';
import Header from './Main/Header';
import Section from './Main/Section';
import Footer from './Main/Footer';
import Dw from './Dw';
import Ads from './Ads'
import CreateAds from './Ads/write'
import Login from './Login';
import Register from './Register';
import Coin from './Coin'
import Ticket from './Ticket'
import Mypage from './Main/Mypage'
import Detail from './Ads/detail/index'
import Map from './Ads/detail/Map';

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
              <Route path = "/ads/:index" element={<Detail/>}/>
              <Route path = "/ads/:index/:historyId" element={<Map/>}/>
              <Route path = "/coin" element={<Coin/>}/>
              <Route path = "/ticket" element={<Ticket/>}/>
              <Route path = "/ads/write" element={<CreateAds/>}/>
              <Route path = "/login" element={<Login/>}/>
              <Route path = "/Register" element={<Register/>}/>
              <Route path = "/mypage" element={<Mypage/>}/>
            </Routes>
          </Wrapper>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
