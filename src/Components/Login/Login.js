import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Formik, validateYupSchema,Form } from 'formik';

const Login =()=>
{
    const [ user , setUser] = useState('');
    /*const [ txtMail , setMail] = useState('');
    const [ txtPassword, setPassword] = useState('');*/
    const handleSubmit = (values, {setSubmitting}) =>
    {
        setSubmitting(false) ;
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: `${values.txtUser}`, password: `${values.txtPassword}`})
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

   /* function handleMailChange( e ){
        setMail(e.target.value); 
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }*/

   /* useEffect(() => {
        setMessage();
    }, [user])
*/
    return(
        <Formik onSubmit = {handleSubmit} initialValues = {{ txtUser: '', txtPassword: '' }}>
             {({
         values,
         
       }) =>(
        <Form>
        <Grid container spacing={2}>
            <Grid item md={8}>
                
                <TextField variant="outlined" name = "txtUser" id="txtUser" label="user"  />
            </Grid>
            <Grid item md={8}>
                
                <TextField  variant="outlined" type="password" name = "txtPassword" id="txtPassword" label="pass"   />
            </Grid>
            <Grid item md={8}>
                <Button variant="contained" value="Submit" type="submit">Submit</Button>
            </Grid>
        </Grid>
        <h1> {`hello ${user.firstname} you are now logged in`} </h1> 
        </Form>
        )}
    </Formik>)
}

export default Login;