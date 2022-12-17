import React from "react";
import ReactLoading from "react-loading";
import { StyledLoading } from "./styled";

const Loading = ({ color, largura, altura }) => (
    <StyledLoading>
        <ReactLoading
            type='bubbles'
            color={color}
            className='loading'
            width={largura}
            height={altura}
        />
    </StyledLoading>
);

export default Loading;
