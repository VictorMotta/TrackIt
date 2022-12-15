import styled from "styled-components";
import { AzulPrincipal, CinzaFundo, EscritaConteudo } from "../../constants/colors";

export const StyledContainerPrincipalHistorico = styled.div`
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    min-height: 100vh;
    background-color: ${CinzaFundo};
    padding: 100px 0 130px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledInfoHistorico = styled.div`
    width: 90%;
    h1 {
        font-size: 22px;
        line-height: 29px;
        color: ${AzulPrincipal};
        margin-bottom: 17px;
    }
    p {
        font-size: 18px;
        line-height: 22px;
        color: ${EscritaConteudo};
    }
`;
