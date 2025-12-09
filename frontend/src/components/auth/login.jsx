import { Typography, TextField } from '@mui/material';
import '../../styles/components/auth/login.css';
import ButtonFilled from '../buttonFilled';

export default function Login({ onSubmit, LoginData, setLoginData }) {
    return (
        <form className='login-form' onSubmit={onSubmit}>
            <Typography variant="h6">Connexion</Typography>
            <TextField label="Email" type="email" name="email" required value={LoginData.email} onChange={(e) => setLoginData({ ...LoginData, email: e.target.value })} />
            <TextField label="Mot de passe" type="password" name="password" required value={LoginData.password} onChange={(e) => setLoginData({ ...LoginData, password: e.target.value })} />
            <ButtonFilled type="submit">Connexion</ButtonFilled>
        </form>
    )
}