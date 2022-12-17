import styled from "styled-components";
import {
    AzulSecundario,
    EscritaConteudo,
    CinzaDesmarcado,
    CinzaEscrita,
} from "../../constants/colors";

export const StyledContainerInputNovoHabito = styled.div`
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
        border: 1px solid ${CinzaDesmarcado};
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
`;

export const StyledButtonsEnviarCancelar = styled.div`
    height: 35px;
    margin-top: 29px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    h1 {
        color: ${AzulSecundario};
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        cursor: pointer;
    }
    button {
        width: 84px;
        height: 35px;
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
    button:disabled {
        background-color: ${AzulSecundario};
        cursor: not-allowed;
        border: 1px solid ${AzulSecundario};
    }
`;
