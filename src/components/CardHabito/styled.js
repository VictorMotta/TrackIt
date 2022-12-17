import styled from "styled-components";
import { EscritaConteudo, CinzaCheckedOff, BordaCinzaCheckedOff } from "../../constants/colors";

export const StyledContainerCardHabito = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    font-family: "Lexend Deca", sans-serif;
    h1 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: ${EscritaConteudo};
    }
`;

export const StyledContainerInfoHabito = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: ${EscritaConteudo};
        margin-bottom: 5px;
    }
    p {
        font-size: 13px;
        color: ${EscritaConteudo};
        line-height: 17px;
    }
    span {
        font-size: 13px;
        color: ${(props) => props.colorSequencia};
        line-height: 17px;
    }
`;

export const StyledContainerCheckBox = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.colorBackground};
    border: 1px solid ${(props) => props.colorBorder};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    ion-icon {
        font-size: 36px;
        color: #fff;
        --ionicon-stroke-width: 80px;
    }
`;
