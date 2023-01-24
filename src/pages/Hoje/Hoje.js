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
    let updateLocale = require("dayjs/plugin/updateLocale");
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", {
        weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
    });

    console.log();

    const { token, percentage, setPercentage } = useContext(AuthContext);

    const [habitosHoje, setHabitosHoje] = useState(undefined);
    const [toggleLoading, setToggleLoading] = useState(false);
    const [qtdChecked, setQtdChecked] = useState();

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
            console.log(res.data);
            if (res.data !== [] || res.data.length !== 0) {
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
    }, []);

    useEffect(() => {
        if (habitosHoje && habitosHoje !== [] && habitosHoje.length !== 0) {
            const calcPercentage = (qtdChecked * 100) / habitosHoje.length;
            setPercentage(calcPercentage);
        }
    }, [qtdChecked]);

    return (
        <>
            <TopBar />
            <StyledContainerPrincipalHoje>
                <StyledContainerDataEPorcentagem
                    colorLetterSpan={percentage === 0 ? EscritaPgHoje : VerdePrincipal}
                >
                    <h1 data-test='today'>{dayjs().format("dddd, DD/MM")}</h1>
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
