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
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 1px solid ${CinzaDesmarcado};
        color: ${CinzaEscrita};
        border-radius: 5px;
        margin-right: 4px;
    }
    ion-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        color: ${EscritaConteudo};
        font-size: 15px;
        cursor: pointer;
    }
`;
