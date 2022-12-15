import styled from "styled-components";
import { AzulSecundario } from "../../constants/colors";

export const StyledContainerNavBar = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    font-family: "Lexend Deca", sans-serif;
    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    h1 {
        font-size: 18px;
        font-weight: 400;
        cursor: pointer;
        margin: 0 36px;
        color: ${AzulSecundario};
    }
    .barra {
        width: 91px;
        position: absolute;
        top: -31px;
        left: calc(50% - (91px / 2));
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
    }
`;
