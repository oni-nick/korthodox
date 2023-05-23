import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Div } from "./Styles";

function Purchase(){
    const url = useLocation();
    const [searchParams, setSearchParams]=useSearchParams();


    return(
        <Div>
            <h1>가격 : {searchParams.get('price')}원</h1>
            <h1>이용 기간 : {searchParams.get('days')}일</h1>
        </Div>
    );
}

export default Purchase;