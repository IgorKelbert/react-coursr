import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

const Login =()=>
{
    const [ user , setUser] = useState('');
   
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setUser("Igor");
        
    }

   /* useEffect(() => {
        setMessage();
    }, [user])
*/
    return(
        <form onSubmit = {handleSubmit}>
        <Grid container spacing={2}>
            <Grid item md={8}>
                
                <TextField variant="outlined" id="txtUser" label="user" value ={ user }/>
            </Grid>
            <Grid item md={8}>
                
                <TextField  variant="outlined" type="password" id="txtPassword" label="pass" />
            </Grid>
            <Grid item md={8}>
                <Button variant="contained" value="Submit" type="submit">Submit</Button>
            </Grid>
        </Grid>
        <h1> {`hello ${user} you are now logged in`} </h1>
    </form>)
}

export default Login;