import { CinzaMarcado } from "../../constants/colors";
import { StyledButtonLi } from "./styled";

const ButtonDiasDaSemana = ({ item, days, setDays, toggleLoading }) => {
    const validation = days.includes(item.id);

    function marcaDesmarca() {
        if (toggleLoading) {
            return;
        }
        if (!validation) {
            setDays([...days, item.id]);
        } else {
            const daysNew = days.filter((day) => {
                return day !== item.id;
            });
            setDays(daysNew);
        }
    }

    return (
        <>
            <StyledButtonLi
                colorSelected={validation && CinzaMarcado}
                colorName={validation ? "#ffffff" : CinzaMarcado}
                onClick={marcaDesmarca}
            >
                {item.day}
            </StyledButtonLi>
        </>
    );
};

export default ButtonDiasDaSemana;
