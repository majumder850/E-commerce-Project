import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Authentication/Login/Login'
import Reg from '../Authentication/Registration/Reg'






import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Home from '../Components/Home/Home'
import PNF from '../Components/PageNotFound/PNF'
import PCat from '../Components/Product/PCategory/PCat'
import PDetails from '../Components/Product/PDetails/PDetails'
import PSubCat from '../Components/Product/PSubCategory/PSubCat'

import Footer from '../Footer/Footer'


import Header from '../Layout/Header'
import ProtectedRoutes from './ProtectedRoutes'








export default function RootRoutes() {
  return (

   
    <Router>
    

      <Header />
     
        <Routes>
          <Route path="" element={<Home />} />
           {/* default path set up */}

          {/* <Route element={<ProtectedRoutes/>}>
           
          </Route> */}

         
          
          
          <Route path="ProductPage" element={<PCat />} />
          <Route path="subcat/:prodname" element={< PSubCat/>} />
          <Route path="details/:prodname/:subname" element={<PDetails />} />


          <Route path="AboutPage" element={<About />} />
          <Route path="ContactPage" element={<Contact />} />
         
         
 
       
       
      
          <Route path="RegPage" element={<Reg />} />
          <Route path="LoginPage" element={<Login />} />

        


          <Route path="*" element={<PNF/>} />
          {/* PageNotFound(wildcard character) will always be at end */}
        </Routes>
        
      <Footer/>
     
    </Router>
  )
}
