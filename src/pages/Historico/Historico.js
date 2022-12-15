import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import { StyledContainerPrincipalHistorico, StyledInfoHistorico } from "./styled";

const Historico = () => {
    return (
        <>
            <TopBar />
            <StyledContainerPrincipalHistorico>
                <StyledInfoHistorico>
                    <h1>Histórico</h1>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </StyledInfoHistorico>
            </StyledContainerPrincipalHistorico>
            <NavBar />
        </>
    );
};

export default Historico;
