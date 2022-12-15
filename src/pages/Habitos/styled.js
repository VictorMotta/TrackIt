import styled from "styled-components";
import { AzulPrincipal, CinzaFundo, AzulSecundario, EscritaConteudo } from "../../constants/colors";

export const StyledContainerHabitos = styled.div`
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    min-height: 100vh;
    background-color: ${CinzaFundo};
    padding: 100px 0 130px 0;
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
