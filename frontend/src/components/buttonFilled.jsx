import { Button } from '@mui/material';
import '../styles/components/buttonFilled.css';
export default function ButtonFilled({ children, ...props }) {
    return (
        <Button variant="contained" className='btn-filled' {...props}>
            {children}
        </Button>
    )
}