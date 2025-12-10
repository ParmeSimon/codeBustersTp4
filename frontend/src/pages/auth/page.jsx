import logo from '../../assets/logo.png';
import '../../styles/pages/auth/style.css';
import Login from '../../components/auth/login';
import Register from '../../components/auth/register';
import { Box, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)
    const { register, login } = useAuth();
    const navigate = useNavigate();

    const [LoginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const [RegisterData, setRegisterData] = useState({
        email: '',
        password: '',
        name: '',
        role: 'STUDENT',
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isLogin) {
            const response = await login(LoginData.email, LoginData.password);
            const role = response.data.user.role === 'STUDENT' ? 'etudiant' : 'entreprise';
            if (response.success) {
                navigate(`/${role}/profil`);
            } else {
                toast.error(response.error);
            }
        } else {
            const response = await register(RegisterData);
            const role = response.data.user.role === 'STUDENT' ? 'etudiant' : 'entreprise';
            if (response.success) {
                navigate(`/${role}/profil`);
            } else {
                toast.error(response.error);
            }
        }
    };

    return (
        <Box className='auth-container'>
            <img src={logo} alt="logo" className='logo' />

            <Card variant="outlined" sx={{ borderRadius: '15px' }}>
                <CardContent className='login-content'>
                    {isLogin ?
                        <Login
                            onSubmit={handleSubmit}
                            LoginData={LoginData}
                            setLoginData={setLoginData}
                        /> :
                        <Register
                            onSubmit={handleSubmit}
                            RegisterData={RegisterData}
                            setRegisterData={setRegisterData}
                        />
                    }
                    <button className='wrong-page' onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Pas de compte ?' : 'Déjà un compte ?'}</button>
                </CardContent>
            </Card>
        </Box>


    )
}

export default LoginPage;