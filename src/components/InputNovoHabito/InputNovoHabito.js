import { useState } from "react";
import { StyledContainerInputNovoHabito } from "./styled";
import { diasSemana } from "../../constants/diasDaSemana";
import ButtonDiasDaSemana from "../ButtonDiasDaSemana/ButtonDiasDaSemana";

const InputNovoHabito = ({ setToggleInputShow }) => {
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);

    function cancelar() {
        setName("");
        setDays([]);
        setToggleInputShow(false);
    }

    return (
        <StyledContainerInputNovoHabito>
            <input
                type='text'
                name='novo-habito'
                id='novo-habito'
                placeholder='nome do hábito'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <ul>
                {diasSemana.map((item) => {
                    return <ButtonDiasDaSemana item={item} days={days} setDays={setDays} />;
                })}
            </ul>
            <div>
                <h1 onClick={cancelar}>Cancelar</h1>
                <button>Salvar</button>
            </div>
        </StyledContainerInputNovoHabito>
    );
};

export default InputNovoHabito;
