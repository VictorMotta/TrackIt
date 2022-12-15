import { StyledContainerPrincipalCadastro } from "./styled";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Cadastro = () => {
    return (
        <StyledContainerPrincipalCadastro>
            <img src={Logo} alt='Logo da TrackIt'></img>
            <form>
                <input type='email' name='email' id='email' placeholder='email' />
                <input type='password' name='password' id='password' placeholder='password' />
                <input type='text' name='nome' id='nome' placeholder='nome' />
                <input type='url' name='foto' id='foto' placeholder='foto' />
                <button>Cadastrar</button>
            </form>
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </StyledContainerPrincipalCadastro>
    );
};

export default Cadastro;
