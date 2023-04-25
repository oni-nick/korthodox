import {Label, Input } from "./Styles"

function Withdraw(){
    return(
        <>
        <div style={{border: '2px solid gold', padding : '30px 30px'}}>
            <form action="localhost:3001/db" name="withdrawForm" method="POST" style={ {
                display : 'flex', flexDirection:'column', alignItems:'center'
            }}>
                <div>
                    <Label>주소</Label>
                    <Input type="text" autoFocus/>
                </div>
                    <br/>
                    <br/>
                <div>
                    <Label>금액</Label>
                    <Input type="text" />
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