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

const CardHabito = ({ habito, qtdChecked, setQtdChecked, atualizar, setAtualizar }) => {
    const { token } = useContext(AuthContext);
    const { id, name, done, currentSequence, highestSequence } = habito;
    const [toggleCheck, setToggleCheck] = useState(done);
    const [sequenciaDias, setSequenciaDias] = useState(currentSequence);
    const [recordDias, setRecordDias] = useState(highestSequence);

    console.log(qtdChecked);
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
            setQtdChecked(qtdChecked + 1);
            const promisse = axios.post(UrlCheck, body, config);
            promisse.then((res) => {
                console.log(res);
                setToggleCheck(!toggleCheck);
                setSequenciaDias(sequenciaDias + 1);
                if (recordDias === sequenciaDias) {
                    setRecordDias(recordDias + 1);
                }
            });
            promisse.catch((err) => console.log(err.response.data));
        }
        if (toggleCheck) {
            setQtdChecked(qtdChecked - 1);
            const promisse = axios.post(UrlUncheck, body, config);
            promisse.then((res) => {
                console.log(res);
                setToggleCheck(!toggleCheck);
                setSequenciaDias(sequenciaDias - 1);
                if (recordDias === sequenciaDias) {
                    setRecordDias(recordDias - 1);
                }
            });
            promisse.catch((err) => console.log(err.response.data));
        }
    }

    return (
        <StyledContainerCardHabito>
            <StyledContainerInfoHabito
                colorSequencia={
                    sequenciaDias === recordDias && sequenciaDias != 0 && recordDias != 0
                        ? VerdePrincipal
                        : EscritaConteudo
                }
            >
                <h1>{name}</h1>
                <p>
                    Sequência atual: <span>{sequenciaDias} dias</span>
                </p>
                <p>
                    Seu recorde: <span>{recordDias} dias</span>
                </p>
            </StyledContainerInfoHabito>
            <StyledContainerCheckBox
                colorBackground={!toggleCheck ? CinzaCheckedOff : VerdePrincipal}
                colorBorder={!toggleCheck ? BordaCinzaCheckedOff : VerdePrincipal}
                onClick={handleCheck}
            >
                <ion-icon name='checkmark-outline'></ion-icon>
            </StyledContainerCheckBox>
        </StyledContainerCardHabito>
    );
};
export default CardHabito;
