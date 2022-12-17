import { StyledMostraDiasLi } from "./styled";
import { CinzaEscrita, CinzaMarcado } from "../../constants/colors";

const MostraDiasHabitos = ({ day, selectedDays }) => {
    return (
        <>
            {selectedDays.includes(day.id) ? (
                <StyledMostraDiasLi colorLetra='#fff' colorSelected={CinzaMarcado}>
                    {day.day}
                </StyledMostraDiasLi>
            ) : (
                <StyledMostraDiasLi colorLetra={CinzaEscrita} colorSelected='#fff'>
                    {day.day}
                </StyledMostraDiasLi>
            )}
        </>
    );
};

export default MostraDiasHabitos;
