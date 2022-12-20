import styled from "styled-components";
import { CinzaDesmarcado } from "../../constants/colors";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid ${CinzaDesmarcado};
    color: ${(props) => props.colorName};
    background-color: ${(props) => props.colorSelected};
    border-radius: 5px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-right: 4px;
    cursor: pointer;
`;
