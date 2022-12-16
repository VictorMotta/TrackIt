import { CinzaEscrita, CinzaMarcado } from "../../constants/colors";
import { StyledButtonLi } from "./styled";

const ButtonDiasDaSemana = ({ item, days, setDays }) => {
    const validation = days.includes(item.id);

    return (
        <>
            <StyledButtonLi
                colorSelected={validation && CinzaMarcado}
                colorName={validation ? "#ffffff" : CinzaEscrita}
                onClick={() => setDays([...days, item.id])}
            >
                {item.day}
            </StyledButtonLi>
        </>
    );
};

export default ButtonDiasDaSemana;
