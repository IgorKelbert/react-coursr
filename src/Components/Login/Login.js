import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login =()=>
{
    return(
        <form>
        <Grid container spacing={2}>
            <Grid item md={8}>
                
                <TextField variant="outlined" id="txtUser" label="user" />
            </Grid>
            <Grid item md={8}>
                
                <TextField  variant="outlined" type="password" id="txtPassword" label="pass" />
            </Grid>
            <Grid item md={8}>
                <Button variant="contained" value="Submit">Submit</Button>
            </Grid>
        </Grid>
        
    </form>)
}

export default Login;