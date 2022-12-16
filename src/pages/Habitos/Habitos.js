import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import { StyledContainerHabitos, StyledMeusHabitos } from "./styled";
import InputNovoHabito from "../../components/InputNovoHabito/InputNovoHabito";

const Habitos = () => {
    const [toggleInputShow, setToggleInputShow] = useState(false);

    return (
        <>
            <TopBar />
            <StyledContainerHabitos>
                <StyledMeusHabitos>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setToggleInputShow(!toggleInputShow)}>
                        <ion-icon name='add-outline'></ion-icon>
                    </button>
                </StyledMeusHabitos>
                {toggleInputShow && <InputNovoHabito setToggleInputShow={setToggleInputShow} />}
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
