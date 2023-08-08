import styled from 'styled-components';
import Docs04 from '../src_assets/Docs04.jpg'

function Resol(){
    return(
        <>
        <MapDiv>
            <br/><h1>결의문</h1>
            <img src={Docs04} width={900} alt="desc"/>
        </MapDiv>
        </>
    );
}

const MapDiv = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

export default Resol;

