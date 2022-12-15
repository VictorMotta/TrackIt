import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Cadastro from "./pages/Cadastro/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import Login from "./pages/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/habitos' element={<Habitos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
