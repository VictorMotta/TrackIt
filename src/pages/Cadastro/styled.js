import styled from "styled-components";
import { CinzaDesmarcardo, CinzaEscrita, AzulSecundario } from "../../constants/colors";

export const StyledContainerPrincipalCadastro = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 68px;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 32px;
    }
    input {
        width: 80%;
        height: 45px;
        margin-bottom: 6px;
        border: 1px solid ${CinzaDesmarcardo};
        border-radius: 5px;
        padding-left: 11px;
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 20px;
    }
    input::placeholder {
        font-family: "Lexend Deca", sans-serif;
        color: ${CinzaEscrita};
        font-weight: 400;
        font-size: 20px;
    }
    button {
        background-color: ${AzulSecundario};
        border: none;
        width: 80%;
        height: 45px;
        border-radius: 5px;
        color: #fff;
        font-family: "Lexend Deca", sans-serif;
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;
        transition: 0.5s;
    }
    button:hover {
        border: 1px solid ${AzulSecundario};
        background-color: #fff;
        color: ${AzulSecundario};
    }
    a {
        margin-top: 25px;
        font-family: "Lexend Deca", sans-serif;
        color: ${AzulSecundario};
        font-size: 14px;
        line-height: 18px;
    }
`;
