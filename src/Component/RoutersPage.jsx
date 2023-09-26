import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from "./Home"
import Student from "./Student"
import StudentEdit from "./StudentEdit"
import Contact from "./Contact"
import "../App.css";
function RoutersPage(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/student-desc' element={<StudentEdit/>}></Route>
        <Route path='/student-desc/:id' element={<StudentEdit/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}
export default RoutersPage;