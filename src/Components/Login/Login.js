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
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: 'yariv@nerdeez.com', password: '12345678'})
        };
        fetch("https://academeez-login-ex.herokuapp.com/api/users/login", requestOptions)
        .then((response) => {
              return response.json();
            })
        .then((result ) => 
            {   
                setUser(result )
            }
            );
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
        <h1> {`hello ${user.firstname} you are now logged in`} </h1>
    </form>)
}

export default Login;