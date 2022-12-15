import styled from "styled-components";
import {
    AzulPrincipal,
    CinzaFundo,
    AzulSecundario,
    EscritaConteudo,
    CinzaDesmarcardo,
    CinzaEscrita,
} from "../../constants/colors";

export const StyledContainerHabitos = styled.div`
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    min-height: 100vh;
    background-color: ${CinzaFundo};
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        width: 90%;
        margin-top: 28px;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: ${EscritaConteudo};
    }
`;

export const StyledMeusHabitos = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 23px;
        font-weight: 400;
        color: ${AzulPrincipal};
    }
    button {
        padding: 7px 12px;
        border: none;
        border-radius: 7px;
        background-color: ${AzulSecundario};
        cursor: pointer;
    }
    ion-icon {
        color: #ffffff;
        font-size: 27px;
        --ionicon-stroke-width: 50px;
    }
`;

export const StyledInputsNovoHabito = styled.div`
    width: 90%;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 18px;
    input {
        width: 100%;
        height: 45px;
        border: 1px solid ${CinzaDesmarcardo};
        border-radius: 5px;
        background-color: #fff;
        color: ${EscritaConteudo};
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        padding-left: 11px;
    }
    input::placeholder {
        color: ${CinzaEscrita};
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
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
        border: 1px solid ${CinzaDesmarcardo};
        color: ${CinzaEscrita};
        border-radius: 5px;
        margin-right: 4px;
    }
    div {
        margin-top: 29px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    h1 {
        color: ${AzulSecundario};
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        cursor: pointer;
    }
    button {
        background-color: ${AzulSecundario};
        border: none;
        border-radius: 5px;
        padding: 7px 17px;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        margin-left: 23px;
        cursor: pointer;
        transition: 0.5s;
    }
    button:hover {
        border: 1px solid ${AzulSecundario};
        background-color: #fff;
        color: ${AzulSecundario};
    }
`;
