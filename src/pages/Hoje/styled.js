import styled from "styled-components";
import { AzulPrincipal, CinzaFundo } from "../../constants/colors";

export const StyledContainerPrincipalHoje = styled.div`
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    min-height: 100vh;
    background-color: ${CinzaFundo};
    padding: 100px 0 130px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledContainerDataEPorcentagem = styled.div`
    width: 90%;

    h1 {
        font-size: 23px;
        font-weight: 400;
        color: ${AzulPrincipal};
        margin-bottom: 5px;
    }
    span {
        font-size: 18px;
        line-height: 22px;
        color: ${(props) => props.colorLetterSpan};
    }
`;

export const StyledContainerListaMeusHabitos = styled.div`
    width: 90%;
`;
