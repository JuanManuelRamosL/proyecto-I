import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Landing from "./components/Landing"
import Home from './components/Home';
import Detail from "./components/Detail"
import Forms from "./components/Form"
import Name from "./components/Name"
import './App.css'
import Delete from './components/Delete';

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/name" element={<Name />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
    </>
  )
}

export default App
