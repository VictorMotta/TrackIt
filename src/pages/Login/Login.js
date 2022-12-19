import { StyledContainerPrincipalLogin } from "./styled";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { BaseUrl } from "../../constants/urls";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const Login = () => {
    const { authenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toggleLoading, setToggleLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const body = {
            email,
            password,
        };
        setToggleLoading(true);
        const promisse = axios.post(`${BaseUrl}/auth/login`, body);
        promisse.then((res) => {
            login(res.data);
            console.log("submit", res.data);
            setToggleLoading(false);
        });
        promisse.catch((err) => {
            console.log(err.response.data);
            setToggleLoading(false);
        });
    }

    return (
        <StyledContainerPrincipalLogin>
            <img src={Logo} alt='Logo da track it' />
            <form onSubmit={handleSubmit}>
                <input
                    data-test='email-input'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    disabled={toggleLoading}
                />
                <input
                    data-test='password-input'
                    type='password'
                    name='password'
                    id='password'
                    placeholder='senha'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    disabled={toggleLoading}
                />
                <button data-test='login-btn' type='submit' disabled={toggleLoading}>
                    {toggleLoading ? <Loading color='#fff' /> : "Entrar"}
                </button>
            </form>
            <Link to='/cadastro' data-test='signup-link'>
                Não tem uma conta? Cadastre-se!
            </Link>
        </StyledContainerPrincipalLogin>
    );
};

export default Login;
