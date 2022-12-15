import styled from "styled-components";
import { AzulPrincipal } from "../../constants/colors";

export const StyledContainerTopBar = styled.div`
    width: 100%;
    background-color: ${AzulPrincipal};
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 18px;
    h1 {
        font-family: "Playball", cursive;
        font-size: 40px;
        color: #fff;
        cursor: pointer;
    }
`;
