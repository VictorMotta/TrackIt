import { StyledContainerNavBar } from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AzulSecundario } from "../../constants/colors";

const NavBar = () => {
    const percentage = 20;

    return (
        <>
            <StyledContainerNavBar>
                <div>
                    <h1>Hábitos</h1>
                    <CircularProgressbar
                        value={percentage}
                        text='Hoje'
                        background
                        backgroundPadding={6}
                        className='barra'
                        styles={buildStyles({
                            backgroundColor: AzulSecundario,
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                    <h1>Histórico</h1>
                </div>
            </StyledContainerNavBar>
        </>
    );
};
export default NavBar;
