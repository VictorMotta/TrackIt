import { StyledContainerNavBar } from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AzulSecundario } from "../../constants/colors";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const NavBar = () => {
    const { percentage } = useContext(AuthContext);

    const percentageTratada = percentage.toFixed(2);

    return (
        <>
            <StyledContainerNavBar>
                <div>
                    <Link to='/habitos'>
                        <h1>Hábitos</h1>
                    </Link>
                    <Link to='/hoje'>
                        <CircularProgressbar
                            value={percentageTratada}
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
