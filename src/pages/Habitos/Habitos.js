import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import { StyledContainerHabitos, StyledMeusHabitos, StyledInputsNovoHabito } from "./styled";

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
                <StyledInputsNovoHabito>
                    <input
                        type='text'
                        name='novo-habito'
                        id='novo-habito'
                        placeholder='nome do hábito'
                    />
                    <ul>
                        <li>D</li>
                        <li>S</li>
                        <li>T</li>
                        <li>Q</li>
                        <li>Q</li>
                        <li>S</li>
                        <li>S</li>
                    </ul>
                    <div>
                        <h1>Cancelar</h1>
                        <button>Salvar</button>
                    </div>
                </StyledInputsNovoHabito>
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
