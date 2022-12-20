import { useContext, useState } from "react";
import { StyledContainerInputNovoHabito, StyledButtonsEnviarCancelar } from "./styled";
import { diasSemana } from "../../constants/diasDaSemana";
import ButtonDiasDaSemana from "../ButtonDiasDaSemana/ButtonDiasDaSemana";
import { BaseUrl } from "../../constants/urls";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import Loading from "../Loading/Loading";

const InputNovoHabito = ({
    setToggleInputShow,
    habitos,
    setHabitos,
    name,
    setName,
    days,
    setDays,
}) => {
    const { token } = useContext(AuthContext);

    const [toggleLoading, setToggleLoading] = useState(false);

    function enviarNovoHabito() {
        const URL = `${BaseUrl}/habits`;
        const body = {
            name,
            days,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        setToggleLoading(true);
        const promisse = axios.post(URL, body, config);
        promisse.then((res) => {
            setHabitos([...habitos, res.data]);
            setName("");
            setDays("");
            setToggleInputShow(false);
            setToggleLoading(false);
        });
        promisse.catch((err) => {
            console.log(err.response.data);
            alert(err.response.statusText);
            setToggleLoading(false);
        });
    }

    function cancelar() {
        setToggleInputShow(false);
    }

    return (
        <StyledContainerInputNovoHabito data-test='habit-create-container'>
            <input
                data-test='habit-name-input'
                type='text'
                name='novo-habito'
                id='novo-habito'
                placeholder='nome do hábito'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={toggleLoading}
            />
            <ul>
                {diasSemana.map((item) => (
                    <ButtonDiasDaSemana
                        key={item.id}
                        item={item}
                        days={days}
                        setDays={setDays}
                        toggleLoading={toggleLoading}
                    />
                ))}
            </ul>
            <StyledButtonsEnviarCancelar>
                <h1 onClick={cancelar} disabled={toggleLoading} data-test='habit-create-cancel-btn'>
                    Cancelar
                </h1>
                <button
                    onClick={enviarNovoHabito}
                    disabled={toggleLoading}
                    data-test='habit-create-save-btn'
                >
                    {toggleLoading ? <Loading color='#fff' largura={84} altura={50} /> : "Salvar"}
                </button>
            </StyledButtonsEnviarCancelar>
        </StyledContainerInputNovoHabito>
    );
};

export default InputNovoHabito;
