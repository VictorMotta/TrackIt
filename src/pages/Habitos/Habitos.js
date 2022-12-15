import InputNovoHabito from "../../components/InputNovoHabito/InputNovoHabito";
import MeuHabito from "../../components/MeuHabito/MeuHabito";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import { StyledContainerHabitos, StyledMeusHabitos } from "./styled";

const Habitos = () => {
    return (
        <>
            <TopBar />
            <StyledContainerHabitos>
                <StyledMeusHabitos>
                    <h1>Meus hábitos</h1>
                    <button>
                        <ion-icon name='add-outline'></ion-icon>
                    </button>
                </StyledMeusHabitos>
                <InputNovoHabito />
                <MeuHabito />
                <MeuHabito />
                <MeuHabito />
                <MeuHabito />

                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a
                    trackear!
                </p>
            </StyledContainerHabitos>
            <NavBar />
        </>
    );
};
export default Habitos;
