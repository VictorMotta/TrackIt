import { StyledContainerTopBar } from "./styled";
import FotoPerfil from "../../assets/foto-perfil.png";
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
