import { StyledContainerNavBar } from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AzulSecundario } from "../../constants/colors";
import { Link } from "react-router-dom";

const NavBar = () => {
    const percentage = 10;

    return (
        <>
            <StyledContainerNavBar>
                <div>
                    <Link to='/habitos'>
                        <h1>Hábitos</h1>
                    </Link>
                    <Link to='/hoje'>
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
                    </Link>
                    <Link to='/historico'>
                        <h1>Histórico</h1>
                    </Link>
                </div>
            </StyledContainerNavBar>
        </>
    );
};
export default NavBar;
