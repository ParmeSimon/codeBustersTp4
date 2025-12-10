import { Select, Typography, MenuItem } from '@mui/material';
import '../../styles/components/auth/login.css';
import ButtonFilled from '../buttonFilled';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Register({ onSubmit, RegisterData, setRegisterData }) {

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <Typography variant="h6">Inscription</Typography>
            <TextField label="Nom" type="text" name="name" required value={RegisterData.name} onChange={(e) => setRegisterData({ ...RegisterData, name: e.target.value })} />
            <TextField label="Email" type="email" name="email" required value={RegisterData.email} onChange={(e) => setRegisterData({ ...RegisterData, email: e.target.value })} />
            <TextField label="Mot de passe" type="password" name="password" required value={RegisterData.password} onChange={(e) => setRegisterData({ ...RegisterData, password: e.target.value })} />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={RegisterData.role}
                name="role"
                label="Role"
                onChange={(e) => setRegisterData({ ...RegisterData, role: e.target.value })}>
                <MenuItem value="STUDENT">Étudiant</MenuItem>
                <MenuItem value="COMPANY">Entreprise</MenuItem>
            </Select>
            <ButtonFilled type="submit">Inscription</ButtonFilled>
        </form>
    )
}