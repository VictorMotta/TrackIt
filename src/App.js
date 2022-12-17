import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Cadastro from "./pages/Cadastro/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import Historico from "./pages/Historico/Historico";
import Hoje from "./pages/Hoje/Hoje";
import Login from "./pages/Login/Login";
import { AuthContext, AuthProvider } from "./contexts/auth";
import { useContext } from "react";

function App() {
    function Private({ children }) {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!authenticated) {
            return <Navigate to='/' />;
        }

        return children;
    }

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route
                        path='/habitos'
                        element={
                            <Private>
                                <Habitos />
                            </Private>
                        }
                    />
                    <Route
                        path='/hoje'
                        element={
                            <Private>
                                <Hoje />
                            </Private>
                        }
                    />
                    <Route
                        path='/historico'
                        element={
                            <Private>
                                <Historico />
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
