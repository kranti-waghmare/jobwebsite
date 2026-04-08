import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import MovieNavbar from './components/MovieNavbar'
import MovieHome from './pages/MovieHome'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favourite from './pages/Favourite'
import Toaster from "react-hot-toast"

import Footer from './components/Footer'
// import Api from './components/Api'
import Async from './components/Async'
import Pagination from './components/Pagination'
import AdvPagination from './components/AdvPagination'
import NestedLoop from './components/NestedLoop'
import Timer from './components/Timer'
import Todo from './components/Timer'
import Form from './components/Form'
import Crud from './components/Crud'
import FormCrud from './components/FormCrud'
import Post from './components/Post'
import AddEmp from './components/AddEmp'
import Kranti from './components/DemoCrud/Kranti'
import FormPage from './components/DemoCrud/FormPage'
import TableForm from './Mycode/TableForm'
import NewForm from './Mycode/NewForm'

const App = () => {
  const isAdmin = useLocation().pathname.startsWith("/admin")
  return (
    <>
        
   {/* <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/apply-job/:id' element={<ApplyJob/>}/>
    <Route path='/applications' element={<Applications/>}/>
   </Routes> */}

   <div>
 {/* {
  !isAdmin && <MovieNavbar/>
 } */}
      
{/* <Toaster/> */}

<Toaster/>
    
    <Routes>
      

      <Route path='/' element={<NestedLoop/>}/>
      <Route path='/table' element={<TableForm/>}/>
      <Route path='/tableform' element={<NewForm/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/kru' element={<Kranti/>}/>
      <Route path='/data' element={<FormPage/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/time' element={<Timer/>}/>
      <Route path='/crud' element={<Crud/>}/>
      <Route path='/add' element={<FormCrud/>}/>
      <Route path='/addemp' element={<AddEmp/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/form' element={<Form/>}/>
      {/* <Route path='/api' element={<Api/>}/> */}
      {/* <Route path='/close' element={<Closure/>}/> */}
      <Route path='/async' element={<Async/>}/>
      <Route path='/pagi' element={<Pagination/>}/>
      <Route path='/Adv' element={<AdvPagination/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/my-booking' element={<MyBooking/>}/>
      <Route path='/favourite' element={<Favourite/>}/>
    </Routes>

    {!isAdmin && <Footer/>}
   </div>
    </>
  )
}

export default App