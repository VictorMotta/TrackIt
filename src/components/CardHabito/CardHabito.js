import {
    StyledContainerCardHabito,
    StyledContainerInfoHabito,
    StyledContainerCheckBox,
} from "./styled";
import {
    CinzaCheckedOff,
    VerdePrincipal,
    BordaCinzaCheckedOff,
    EscritaConteudo,
} from "../../constants/colors";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { BaseUrl } from "../../constants/urls";
import axios from "axios";

const CardHabito = ({ habito, qtdChecked, setQtdChecked }) => {
    const { token } = useContext(AuthContext);
    const { id, name, done, currentSequence, highestSequence } = habito;
    const [toggleCheck, setToggleCheck] = useState(done);
    const [sequenciaDias, setSequenciaDias] = useState(currentSequence);
    const [recordDias, setRecordDias] = useState(highestSequence);

    function handleCheck() {
        const UrlCheck = `${BaseUrl}/habits/${id}/check`;
        const UrlUncheck = `${BaseUrl}/habits/${id}/uncheck`;
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        if (!toggleCheck) {
            const promisse = axios.post(UrlCheck, body, config);
            promisse.then((res) => {
                console.log(res);
                setToggleCheck(!toggleCheck);
                setQtdChecked(qtdChecked + 1);
                setSequenciaDias(sequenciaDias + 1);
                if (recordDias === sequenciaDias) {
                    setRecordDias(recordDias + 1);
                }
            });
            promisse.catch((err) => console.log(err.response.data));
        }
        if (toggleCheck) {
            const promisse = axios.post(UrlUncheck, body, config);
            promisse.then((res) => {
                console.log(res);
                setToggleCheck(!toggleCheck);
                setSequenciaDias(sequenciaDias - 1);
                setQtdChecked(qtdChecked - 1);
                if (recordDias === sequenciaDias) {
                    setRecordDias(recordDias - 1);
                }
            });
            promisse.catch((err) => console.log(err.response.data));
        }
    }

    return (
        <StyledContainerCardHabito data-test='today-habit-container'>
            <StyledContainerInfoHabito
                colorSequenciaAtual={
                    (sequenciaDias === recordDias && sequenciaDias !== 0 && recordDias !== 0) ||
                    toggleCheck
                        ? VerdePrincipal
                        : EscritaConteudo
                }
                colorRecord={
                    sequenciaDias === recordDias && sequenciaDias !== 0 && recordDias !== 0
                        ? VerdePrincipal
                        : EscritaConteudo
                }
            >
                <h1 data-test='today-habit-name'>{name}</h1>
                <p data-test='today-habit-sequence'>
                    Sequência atual: <span>{sequenciaDias} dias</span>
                </p>
                <p data-test='today-habit-record'>
                    Seu recorde: <span>{recordDias} dias</span>
                </p>
            </StyledContainerInfoHabito>
            <StyledContainerCheckBox
                colorBackground={!toggleCheck ? CinzaCheckedOff : VerdePrincipal}
                colorBorder={!toggleCheck ? BordaCinzaCheckedOff : VerdePrincipal}
                onClick={handleCheck}
                data-test='today-habit-check-btn'
            >
                <ion-icon name='checkmark-outline'></ion-icon>
            </StyledContainerCheckBox>
        </StyledContainerCardHabito>
    );
};
export default CardHabito;
