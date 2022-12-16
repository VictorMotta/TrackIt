import styled from "styled-components";
import { CinzaDesmarcado } from "../../constants/colors";

export const StyledButtonLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid ${CinzaDesmarcado};
    color: ${(props) => props.colorName};
    background-color: ${(props) => props.colorSelected};
    border-radius: 5px;
    margin-right: 4px;
`;
