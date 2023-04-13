import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: black;
    color: white;
    padding-left: 100px;
    padding-top: 100px;
    height: 200px;
`;

function Footer() {
    return (
        <StyledFooter>
            <p>한국공학대학교 컴퓨터 공학과</p>
            <p>팀원 이름: 이태형 정준호 탁하선 강명근</p>
            <p>깃허브 주소: https://github.com/AdsRider</p>
        </StyledFooter>
    );
}

export default Footer;