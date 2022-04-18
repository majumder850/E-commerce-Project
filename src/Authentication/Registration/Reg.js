import React from 'react'
import './Reg.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const validateForm=(formValue)=>{
        let errors={};
        let validateEmail=/^([a-z0-9._]+)@([a-z]{5,20}).([a-z.]{2,20})$/


        if(!formValue.uname)
        {
            errors.uname="Please enter User name"
        }else if(formValue.uname.length<3)
        {
            errors.uname="Minimum 3 character"
        }



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


export default function Reg() {

    const navigate=useNavigate()

    const formik=useFormik({
        initialValues:{
            uname:'',
            email:'',
            password:''
        },
        validate:validateForm,
        onSubmit:(values)=>{
            console.log("Recieved Values:",values);

            let userData={
                username:values.uname,
                email:values.email,
                password:values.password
            }

            axios.post('https://node-project-storage.herokuapp.com/postUserData',userData)
            .then(res=>{
                console.log("Axios Response: ",res);
                alert(res.data.message)
                navigate('/LoginPage')
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
        <form onSubmit={formik.handleSubmit} className='rtu'>

          <h2 style={{marginTop:0}}>Sign Up</h2>

            <label htmlFor="uname" >user name:</label> 
            <br/>
            <input type="text" 
            name="uname" 
            placeholder="Enter user name" 
            value={formik.values.uname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.uname && formik.errors.uname ? (<span>{formik.errors.uname}</span>):null}
            <br/>


            <label htmlFor="email">Email:</label>
            <br/>
            <input type="email" name="email" 
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>):null}
            <br/>


            <label htmlFor="password">Password:</label>
            <br/>
            <input type="password" name="password" 
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>):null}
            <br/>
            <br/>
            <button type='submit' disabled={!(formik.isValid && formik.dirty)}>Press here</button>
            
       </form> 
       </div>
      </div>
    </div>
  )
}


