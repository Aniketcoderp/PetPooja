import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './components/Table'
import tableData from './data.json';
import { Routes,Route,NavLink } from 'react-router-dom';
import Landing from './components/Landing';
import Form from './components/Form';
import Date from './components/Date';



import './App.css'

function App() {
  
  return (
    <>
    <nav className='Navlink'>
    <NavLink to='/'>Home</NavLink>
      <NavLink to='/table'>Table</NavLink>
      <NavLink to='/form'>Form</NavLink>
      <NavLink to='/date'>Date</NavLink>
    
    </nav>
    <Routes>
    <Route path='/' element={<Landing/>}/> 
    <Route path='/table' element={<Table data={tableData.data} columns={tableData.columns} />}/>
    <Route path='/form' element={<Form/>}/>  
    <Route path='/date' element={<Date/>}/> 
    </Routes>
    </>
  )
}

export default App



