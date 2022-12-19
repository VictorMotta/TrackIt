import { StyledContainerMeuHabito } from "./styled";
import { diasSemana } from "../../constants/diasDaSemana";
import MostraDiasHabitos from "../MostraDiasHabitos/MostraDiasHabitos";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { BaseUrl } from "../../constants/urls";

const MeuHabito = ({ item, habitos, setHabitos }) => {
    const { name, days } = item;
    const { token } = useContext(AuthContext);

    function deletaHabito() {
        const listaNovoHabito = habitos.filter((habito) => habito.id != item.id);
        const URL = `${BaseUrl}/habits/${item.id}`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const deletar = window.confirm("Tem certeza que deseja deletar esse hábito?");
        if (deletar) {
            const promisse = axios.delete(URL, config);
            promisse.then((res) => {
                console.log(res.data);
                setHabitos(listaNovoHabito);
            });
            promisse.catch((err) => console.log(err.response.data));
        }
    }

    return (
        <StyledContainerMeuHabito data-test='habit-container'>
            <h1 data-test='habit-name'>{name[0].toUpperCase() + name.substring(1)}</h1>
            <ul>
                {diasSemana.map((day) => (
                    <MostraDiasHabitos key={day.id} day={day} selectedDays={days} />
                ))}
            </ul>
            <span onClick={deletaHabito} data-test='habit-delete-btn'>
                <ion-icon name='trash-outline'></ion-icon>
            </span>
        </StyledContainerMeuHabito>
    );
};

export default MeuHabito;
