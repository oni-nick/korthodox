import { DatePicker } from "antd"
import styled from "styled-components"

export const MypageDiv = styled.div`
  display : flex;
  align-items : center;
  flex-direction : column;
  margin : 70px
`
export const GraphDiv = styled.div`
    width : 800px;
    height : 500px;
`
export const StatsDiv = styled.div`
  display : flex;
  align-items : center;
  margin : 30px 0px;
`
export const Text = styled.h3`
    font-size : 16px;
    font-weight : normal;
`
export const StyledRangePicker = styled(DatePicker.RangePicker)`
  margin-right : 16px;
  margin-left : 16px;
`;

// Map Style Component
export const Div = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 0px 0px 100px 0px;
    nav {
        margin-left: 100px;
        margin-right: auto;
        margin-bottom: 50px;
    }
`
export const MapContainer = styled.div<{id : string}>`
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    height: 500px;
`;
