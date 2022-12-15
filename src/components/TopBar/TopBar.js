import { StyledContainerTopBar } from "./styled";
import FotoPerfil from "../../assets/foto-perfil.png";

const TopBar = () => {
    return (
        <StyledContainerTopBar>
            <h1>TrackIt</h1>
            <img src={FotoPerfil} alt='Foto de perfil' />
        </StyledContainerTopBar>
    );
};
export default TopBar;
