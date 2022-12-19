import { StyledContainerNavBar } from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AzulSecundario } from "../../constants/colors";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const NavBar = () => {
    const { percentage } = useContext(AuthContext);

    return (
        <>
            <StyledContainerNavBar data-test='menu'>
                <div>
                    <Link to='/habitos' data-test='habit-link'>
                        <h1>Hábitos</h1>
                    </Link>
                    <Link to='/hoje' data-test='today'>
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
                    <Link to='/historico' data-test='history-link'>
                        <h1>Histórico</h1>
                    </Link>
                </div>
            </StyledContainerNavBar>
        </>
    );
};
export default NavBar;
