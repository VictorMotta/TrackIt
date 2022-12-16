import { StyledContainerPrincipalLogin } from "./styled";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { BaseUrl } from "../../constants/urls";
import axios from "axios";

const Login = () => {
    const { authenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const body = {
            email,
            password,
        };
        const promisse = axios.post(`${BaseUrl}/auth/login`, body);
        promisse.then((res) => {
            login(res.data);
            console.log("submit", res.data);
        });
        promisse.catch((err) => console.log(err.response.data));
    }

    return (
        <StyledContainerPrincipalLogin>
            <img src={Logo} alt='Logo da track it' />
            <p>{String(authenticated)}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='senha'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type='submit'>Entrar</button>
            </form>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </StyledContainerPrincipalLogin>
    );
};

export default Login;
