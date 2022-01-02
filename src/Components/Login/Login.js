import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Formik, validateYupSchema,Form,useFormik } from 'formik';
import useServerFetch from '../../Hooks/useServerFetch';
import { useNavigate  } from "react-router-dom"
import { store } from '../../redux/Store'

const Login =()=>
{
    const [ user, setUser] = useState({firstname:'', lastname:''}); 
    const [ authorized ,setAuthorazed] = useState('1');
    /*const [ txtMail , setMail] = useState('');
    const [ txtPassword, setPassword] = useState('');*/
    const data =  useServerFetch();
    const navigate = useNavigate();
    
    const handleSubmit = async (values, {setSubmitting}) =>
    {
        setSubmitting(false) ;
        try{
            const myData = await data('application/json', "https://academeez-login-ex.herokuapp.com/api/users/login", JSON.stringify({email: `${formik.values.email}`, password: `${formik.values.password}`}), 'POST');
            store.dispatch({ type: "Login", payload: { myData} });
            navigate('/Todo');
        }
        catch {
            setAuthorazed(null);           
        }
    }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: handleSubmit
        },
      );
   
    return (
        <form onSubmit={formik.handleSubmit} className='loginGrid' >
            <Grid container spacing={2}>
                <Grid item md={8}>
                    
                    <TextField variant="outlined" name = "email" id="txtUser" label="user" value={formik.values.email} onChange={formik.handleChange} />
                </Grid>
                <Grid item md={8}>
                    
                    <TextField  variant="outlined" type="password" name = "password" id="txtPassword" label="pass" value={formik.values.password} onChange={formik.handleChange}  />
                </Grid>
                <Grid item md={8}>
                    <Button variant="contained" value="Submit" type="submit">Submit</Button>
                </Grid>
            </Grid>
            <h1> {!authorized && 'Login failed'} </h1> 
        </form>
        
    )
}

export default Login;