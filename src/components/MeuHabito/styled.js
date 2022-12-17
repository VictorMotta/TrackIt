import styled from "styled-components";
import { CinzaDesmarcado, CinzaEscrita, EscritaConteudo } from "../../constants/colors";

export const StyledContainerMeuHabito = styled.div`
    width: 90%;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 18px;
    font-family: "Lexend Deca", sans-serif;
    position: relative;
    h1 {
        font-size: 20px;
        color: ${EscritaConteudo};
    }
    ul {
        display: flex;
        margin-top: 8px;
    }
    span {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #fff;
    }
    ion-icon {
        cursor: pointer;
        color: ${EscritaConteudo};
        font-size: 15px;
    }
`;
