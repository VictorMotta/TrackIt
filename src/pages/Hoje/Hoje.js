import CardHabito from "../../components/CardHabito/CardHabito";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import {
    StyledContainerPrincipalHoje,
    StyledContainerDataEPorcentagem,
    StyledContainerListaMeusHabitos,
} from "./styled";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { BaseUrl } from "../../constants/urls";
import Loading from "../../components/Loading/Loading";
import { AzulSecundario, EscritaPgHoje, VerdePrincipal } from "../../constants/colors";

const Hoje = () => {
    const { token, percentage, setPercentage } = useContext(AuthContext);
    const date = dayjs(new Date());
    const [diaSemana, setDiaSemana] = useState(undefined);
    const [dia, setDia] = useState(undefined);
    const [mes, setMes] = useState(undefined);
    const [habitosHoje, setHabitosHoje] = useState(undefined);
    const [toggleLoading, setToggleLoading] = useState(false);
    const [qtdChecked, setQtdChecked] = useState();
    const [atualizar, setAtualizar] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const URL = `${BaseUrl}/habits/today`;
        setToggleLoading(true);
        const promisse = axios.get(URL, config);
        promisse.then((res) => {
            if (res.data != [] || res.data.length != 0) {
                console.log(res.data);
                setToggleLoading(false);
                const lista = res.data;
                setHabitosHoje(lista);
                const qtdDone = lista.filter((habitos) => habitos.done === true);
                setQtdChecked(qtdDone.length);
            }
        });
        promisse.catch((err) => {
            console.log(err.response.data);
            setToggleLoading(false);
        });
    }, [atualizar]);

    useEffect(() => {
        if (habitosHoje && habitosHoje != [] && habitosHoje.length != 0) {
            const calcPercentage = (qtdChecked * 100) / habitosHoje.length;
            setPercentage(calcPercentage);
        }
    }, [qtdChecked]);

    useEffect(() => {
        switch (date.day()) {
            case 0:
                setDiaSemana("Domingo");
                break;
            case 1:
                setDiaSemana("Segunda");
                break;
            case 2:
                setDiaSemana("Terça");
                break;
            case 3:
                setDiaSemana("Quarta");
                break;
            case 4:
                setDiaSemana("Quinta");
                break;
            case 5:
                setDiaSemana("Sexta");
                break;
            case 6:
                setDiaSemana("Sábado");
                break;
            default:
                return undefined;
        }
        setDia(date.date());
        setMes(date.month() + 1);
    }, [date]);

    return (
        <>
            <TopBar />
            <StyledContainerPrincipalHoje>
                <StyledContainerDataEPorcentagem
                    colorLetterSpan={percentage === 0 ? EscritaPgHoje : VerdePrincipal}
                >
                    <h1 data-test='today'>
                        {diaSemana}, {dia}/{mes}
                    </h1>
                    {percentage === 0 ? (
                        <span data-test='today-counter'>Nenhum hábito concluído ainda</span>
                    ) : (
                        <span data-test='today-counter'>
                            {percentage.toFixed(0)}% dos hábitos concluídos
                        </span>
                    )}
                </StyledContainerDataEPorcentagem>
                <StyledContainerListaMeusHabitos>
                    {toggleLoading ? (
                        <Loading color={AzulSecundario} />
                    ) : !habitosHoje ? (
                        <p>
                            Você não tem nenhum hábito cadastrado ainda. Vá para página de Hábitos.
                            Adicione um hábito para começar a trackear!
                        </p>
                    ) : (
                        habitosHoje.map((habito) => (
                            <CardHabito
                                key={habito.id}
                                habito={habito}
                                qtdChecked={qtdChecked}
                                setQtdChecked={setQtdChecked}
                                atualizar={atualizar}
                                setAtualizar={setAtualizar}
                            />
                        ))
                    )}
                </StyledContainerListaMeusHabitos>
            </StyledContainerPrincipalHoje>
            <NavBar />
        </>
    );
};

export default Hoje;
