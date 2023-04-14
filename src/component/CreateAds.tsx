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

function CreateAds(){
    return(
        <>
        <div style={{border: '1px solid gold', padding : '30px 30px', marginBottom: '100px'}}>
            <form action="localhost:3001/db" name="withdrawForm" method="POST" style={ {
                display : 'flex', flexDirection:'column', alignItems:'center'
            }}>
                <div>
                    <Label>광고 이름</Label>
                    <Input type="text"/>
                </div>
                    <br/>
                    <br/>
                <div>
                    <Label>광고 비용</Label>
                    <Input type="text"/>
                </div>
                <br/>
                <br/>
                <div>
                    <Label>광고 기간</Label>
                    <Input type="text"/>
                </div>
                <br/>
                <br/>
                <div>
                    <Label>광고 사진</Label>
                    <Input type="file"/>
                </div>
                <div>
                    <Input type="submit" value="광고 등록" style={{marginTop: '40px', backgroundColor:'gold'}}></Input>
                </div>

            </form>
        </div>
        </>
    );
}

export default CreateAds;