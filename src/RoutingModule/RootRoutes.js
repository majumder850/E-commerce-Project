import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Authentication/Login/Login'
import Reg from '../Authentication/Registration/Reg'






import About from '../Components/About/About'
import BDetails from '../Components/Best/BestDetails/BDetails'
import BSubCat from '../Components/Best/BestSubCategory/BSubCat'
import Card from '../Components/Card/Card'
import Contact from '../Components/Contact/Contact'
import FDetails from '../Components/Flat/FlatDetails/FDetails'
import FSubCat from '../Components/Flat/FlatSubCategory/FSubCat'
import Home from '../Components/Home/Home'
import NDetails from '../Components/New/NewDetails/NDetails'
import NSubCat from '../Components/New/NewSubCategory/NSubCat'
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


          <Route path="NewPage" element={<NSubCat/>} />
          <Route path="nsubcat/:nprodname" element={< NDetails/>} />

          <Route path="BestPage" element={<BSubCat/>} />
          <Route path="bsubcat/:bprodname" element={< BDetails/>} />

          <Route path="FlatPage" element={<FSubCat/>} />
          <Route path="fsubcat/:fprodname" element={< FDetails/>} />


          <Route path="AboutPage" element={<About />} />
          <Route path="ContactPage" element={<Contact />} />
          <Route path="CardPage" element={<Card />} />
         
         
 
       
       
      
          <Route path="RegPage" element={<Reg />} />
          <Route path="LoginPage" element={<Login />} />

        


          <Route path="*" element={<PNF/>} />
          {/* PageNotFound(wildcard character) will always be at end */}
        </Routes>
        
      <Footer/>
     
    </Router>
  )
}
