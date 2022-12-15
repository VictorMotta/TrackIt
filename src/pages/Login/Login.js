import { StyledContainerPrincipalLogin } from "./styled";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <StyledContainerPrincipalLogin>
            <img src={Logo} alt='Logo da track it' />
            <form>
                <input type='email' name='email' id='email' placeholder='email' />
                <input type='password' name='password' id='password' placeholder='senha' />
                <button type='submit'>Entrar</button>
            </form>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </StyledContainerPrincipalLogin>
    );
};

export default Login;
