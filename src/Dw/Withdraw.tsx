import { Button, Checkbox, Form, Input, Space } from 'antd';
import { P, DivWithdraw, P2 } from "./Styles"
import Withdraw_Btn from "./Withdraw_Btn"
function Withdraw(){

    const onFinish = (values: any) => {
        alert('Success:');
      };
      
      const onFinishFailed = (errorInfo: any) => {
        alert('Failed:');
      };

    return(
        <DivWithdraw>
            
            <div style={{ marginBottom : '30px'}}>
                출금주소
                <Input style={{display : 'inline-block', width : '200px', marginLeft : '5px'}} id="Dadress" name="Dadress" value="O5L2uxhoH92wAQg1" readOnly/>
                <Button style={{display : 'inline-block', marginLeft : '3px'}} type="default">복사하기</Button>
            </div>
            <Withdraw_Btn/>
            <div>
                <P>※주의사항※<br/>암호화폐 특성상 출금신청이 완료되면 취소가 불가하기 때문에, 출금 시 주소를 확인 후 입력해 주시기 바랍니다.</P>        
                <Checkbox style={{margin : '10px 10px 30px 20px'}}>동의합니다.</Checkbox>
            </div>
            <Button style={{width: '300px'}}type="primary" htmlType="submit">
                출금하기
            </Button>

        
        </DivWithdraw>
    );
}

export default Withdraw;