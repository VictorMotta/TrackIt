import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import { StyledContainerHabitos, StyledMeusHabitos } from "./styled";
import InputNovoHabito from "../../components/InputNovoHabito/InputNovoHabito";
import { AuthContext } from "../../contexts/auth";
import { BaseUrl } from "../../constants/urls";
import axios from "axios";
import MeuHabito from "../../components/MeuHabito/MeuHabito";
import Loading from "../../components/Loading/Loading";
import { AzulPrincipal, AzulSecundario } from "../../constants/colors";

const Habitos = () => {
    const [toggleInputShow, setToggleInputShow] = useState(false);
    const [habitos, setHabitos] = useState(undefined);
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    console.log(habitos);
    useEffect(() => {
        const URL = `${BaseUrl}/habits`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        setLoading(true);
        const promisse = axios.get(URL, config);
        promisse.then((res) => {
            console.log(res.data);
            setHabitos(res.data);
            setLoading(false);
        });
        promisse.catch((err) => console.log(err.response.data));
    }, []);

    return (
        <>
            <TopBar />
            <StyledContainerHabitos>
                <StyledMeusHabitos>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setToggleInputShow(!toggleInputShow)}>
                        <ion-icon name='add-outline'></ion-icon>
                    </button>
                </StyledMeusHabitos>
                {toggleInputShow && (
                    <InputNovoHabito
                        setToggleInputShow={setToggleInputShow}
                        habitos={habitos}
                        setHabitos={setHabitos}
                    />
                )}
                {loading ? (
                    <Loading color={AzulPrincipal} />
                ) : habitos === undefined || habitos.length === 0 || habitos === [] ? (
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar
                        a trackear!
                    </p>
                ) : (
                    habitos.map((item) => (
                        <MeuHabito
                            key={item.id}
                            item={item}
                            habitos={habitos}
                            setHabitos={setHabitos}
                        />
                    ))
                )}
            </StyledContainerHabitos>
            <NavBar />
        </>
    );
};
export default Habitos;
