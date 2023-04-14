import styled from "styled-components";

const Label = styled.label`
    font-size : 32px;
`

function Withdraw(){
    return(
        <>
        <div style={{border: '1px solid gold', padding : '30px 30px'}}>
            <form>
                <Label>주소</Label>
                <input type="number"/>
                <br/>
                <br/>
                <Label>금액</Label>
                <input type="number"/>
                

            </form>
        </div>
        </>
    );
}

export default Withdraw;