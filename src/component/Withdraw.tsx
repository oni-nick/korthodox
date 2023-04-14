import styled from "styled-components";

const Label = styled.label`
    font-size : 24px;
`
const Input = styled.input`
    width: 300px;
    height : 50px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid gold;
`

function Withdraw(){
    return(
        <>
        <div style={{border: '1px solid gold', padding : '30px 30px'}}>
            <form action="localhost:3001/db" name="withdrawForm" method="POST" style={ {
                display : 'flex', flexDirection:'column', alignItems:'center'
            }}>
                <div>
                    <Label>주소</Label>
                    <Input type="text"/>
                </div>
                    <br/>
                    <br/>
                <div>
                    <Label>금액</Label>
                    <Input type="number"/>
                </div>
                <div>
                    <Input type="submit" value="출금하기" style={{marginTop: '40px', backgroundColor:'gold'}}></Input>
                </div>

            </form>
        </div>
        </>
    );
}

export default Withdraw;