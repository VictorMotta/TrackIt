import { StyledContainerInputNovoHabito } from "./styled";

const InputNovoHabito = () => {
    return (
        <StyledContainerInputNovoHabito>
            <input type='text' name='novo-habito' id='novo-habito' placeholder='nome do hábito' />
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
        </StyledContainerInputNovoHabito>
    );
};

export default InputNovoHabito;
