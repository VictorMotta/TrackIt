import { StyledContainerPrincipalCadastro } from "./styled";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BaseUrl } from "../../constants/urls";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const [toggleLoading, setToggleLoading] = useState(false);

    function finalizarCadastro(e) {
        e.preventDefault();
        const body = {
            email,
            name,
            image,
            password,
        };

        setToggleLoading(!toggleLoading);
        const promisse = axios.post(`${BaseUrl}/auth/sign-up`, body);
        promisse.then((res) => {
            console.log(res.data);
            navigate("/");
            setToggleLoading(false);
        });
        promisse.catch((err) => {
            setToggleLoading(false);
            console.log(err.response.data);
            alert(err.response.data.message);
        });
    }

    return (
        <StyledContainerPrincipalCadastro>
            <img src={Logo} alt='Logo da TrackIt'></img>
            <form onSubmit={finalizarCadastro}>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    disabled={toggleLoading}
                    required
                />
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    disabled={toggleLoading}
                    required
                />
                <input
                    type='text'
                    name='nome'
                    id='nome'
                    placeholder='nome'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    disabled={toggleLoading}
                    required
                />
                <input
                    type='url'
                    name='foto'
                    id='foto'
                    placeholder='foto'
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    disabled={toggleLoading}
                    required
                />
                <button disabled={toggleLoading} type='submit'>
                    {toggleLoading ? <Loading color='#fff' /> : "Cadastrar"}
                </button>
            </form>
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </StyledContainerPrincipalCadastro>
    );
};

export default Cadastro;
