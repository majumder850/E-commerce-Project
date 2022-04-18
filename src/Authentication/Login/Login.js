import React from 'react'
import './Login.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Button} from 'react-bootstrap';

const validateForm=(formValue)=>{
        let errors={};
        let validateEmail=/^([a-z0-9._]+)@([a-z]{5,20}).([a-z.]{2,20})$/





        if(!formValue.email)
        {
            errors.email="Please enter Email"
        }
        else if(!validateEmail.test(formValue.email))
        {
            errors.email="Invalid email";
        }
        if(!formValue.password)
        {
            errors.password="Please enter Password"
        }
        console.log("Errors: ",errors);
        return errors;

}


export default function Login() {

    const navigate=useNavigate()

    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:validateForm,

   
        onSubmit:(values)=>{
            console.log("Recieved Values:",values);

         
            axios.post('https://node-project-storage.herokuapp.com/postLoginData',values)
            .then(res=>{
                console.log("Axios Response: ",res.data);

                window.sessionStorage.setItem("TokenValue",res.data.token);

                alert("You have Successfully logged in");

                navigate('/ProductPage')
            })
            .catch(err=>{
                console.log("Axios error",err);
            })
        }
    })

  return (
    <div >
      <div className='background'>
        <div>
        <form onSubmit={formik.handleSubmit}  className='rtu'>

          


            <label htmlFor="email">Email:</label>
            <br/>
            <input type="email" name="email" 
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (<span className='invalid'>{formik.errors.email}</span>):null}
            <br/>

            
            <label htmlFor="password">Password:</label>
            <br/>
            <input type="password" name="password" 
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? (<span className='invalid'>{formik.errors.password}</span>):null}
            <br/>
            <br/>
            <button type='submit' disabled={!(formik.isValid && formik.dirty)}>Press here</button>


           <Link to='/RegPage'>Not a member? Register here</Link>
     
            
       </form> 
       </div>
       </div>

    </div>
  )
}


