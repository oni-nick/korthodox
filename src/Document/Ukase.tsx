import styled from 'styled-components';
import Docs01 from '../src_assets/Docs01.jpg'

function Ukase(){
    return(
        <>
        <MapDiv>
            <br/><h1>사령장</h1>
            <img src={Docs01} width={900} alt="desc"/>
        </MapDiv>
        </>
    );
}

const MapDiv = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

export default Ukase;

