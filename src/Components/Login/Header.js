import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'

const Header = ({ user }) =>
{
    const userx = useSelector((state)=>{
        return state.user;
    }
    );
    return (
        <AppBar position="static">
        <Toolbar >
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Hello {userx?.firstName} {userx?.lastName}   
            </Typography>
        </Toolbar>
      </AppBar>
       
    )
}

export default Header;

