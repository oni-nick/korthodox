import { useUserState } from '../context/user';
import { Div } from './Styles';

function Mypage(){
    const user = useUserState();

    return(
        <Div>
            <h1>마이페이지입니다.</h1>
            <h3>이메일 : {user.email}</h3>
            <h3>개인 주소 : {user.address}</h3>
        </Div>
    );
}

export default Mypage;