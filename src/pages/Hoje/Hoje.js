import CardHabito from "../../components/CardHabito/CardHabito";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import {
    StyledContainerPrincipalHoje,
    StyledContainerDataEPorcentagem,
    StyledContainerListaMeusHabitos,
} from "./styled";

const Hoje = () => {
    return (
        <>
            <TopBar />
            <StyledContainerPrincipalHoje>
                <StyledContainerDataEPorcentagem>
                    <h1>Segunda, 17/05</h1>
                    <span>Nenhum hábito concluído ainda</span>
                </StyledContainerDataEPorcentagem>
                <StyledContainerListaMeusHabitos>
                    <CardHabito />
                    <CardHabito />
                    <CardHabito />
                </StyledContainerListaMeusHabitos>
            </StyledContainerPrincipalHoje>
            <NavBar />
        </>
    );
};

export default Hoje;
