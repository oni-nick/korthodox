import styled from "styled-components";
import { Card, Table } from "antd";

export const Div = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 0px 0px 100px 0px;
`
export const Text = styled.h3`
    font-size : 20px;
    font-weight : normal;

 `
export const MapContainer = styled.div<{id : string}>`
    margin : 100px 100px;
    width: 1000px;
    height: 650px;
`;

 export const AdsHisTable = styled(Table)`
    margin-bottom : 100px;
 `