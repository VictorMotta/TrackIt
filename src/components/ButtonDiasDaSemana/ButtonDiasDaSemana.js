import { CinzaMarcado } from "../../constants/colors";
import { StyledButton } from "./styled";

const ButtonDiasDaSemana = ({ item, days, setDays, toggleLoading }) => {
    const validation = days.includes(item.id);

    function marcaDesmarca() {
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
            <StyledButton
                colorSelected={validation ? CinzaMarcado : "#FFFFFF"}
                colorName={validation ? "#ffffff" : CinzaMarcado}
                onClick={marcaDesmarca}
                data-test='habit-day'
                disabled={toggleLoading}
            >
                {item.day}
            </StyledButton>
        </>
    );
};

export default ButtonDiasDaSemana;
