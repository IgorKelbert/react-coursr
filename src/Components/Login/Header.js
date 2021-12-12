import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const Header = ({ user }) =>
{
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
                Hello {user.firstName} {user.lastName} {user.email}     
            </Typography>
        </Toolbar>
      </AppBar>
       
    )
}

export default Header;

