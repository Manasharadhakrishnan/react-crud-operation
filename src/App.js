
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage';
import Form from './Form';
import Table from './Table';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Homepage />
        <Routes>
          <Route index element={<Form />}></Route>
          <Route path='Table' element={<Table />}></Route>
          <Route path='Form' element={<Form />}></Route>
          <Route path="/form/:paramId" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

