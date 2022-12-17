import { StyledContainerTopBar } from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const TopBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <StyledContainerTopBar>
            <h1>TrackIt</h1>
            <span>
                <img src={user.image} alt='Foto de perfil' />
            </span>
        </StyledContainerTopBar>
    );
};
export default TopBar;
