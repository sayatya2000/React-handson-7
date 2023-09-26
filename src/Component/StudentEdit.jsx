import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';

import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { addUser, editUser } from './studentSlice';

const StudentEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.student)

    const [state, setDetails] = useState(data.studentInfo);

    useEffect(() => {
        if(location.state !== null) {
            setDetails({
                name: location.state.details.name,
                age: location.state.details.age,
                course:location.state.details.course,
                batch: location.state.details.batch
            })
        }
    }, [location])

    const handleChange = (e) => {
        setDetails({...state,[e.target.name]: e.target.value});
    }

    const Submit = () => {
        if(location.state === null) {
            dispatch(addUser({state}));
            navigate('/student');
        } else {
            let index = location.state.id;
            dispatch(editUser({state, index}));
            navigate('/student');
        }
    }
   return (
    <>
    <center>
    <input name='name' onChange={handleChange} placeholder="Enter Name" value={state.name}></input><br/>
        <input name='age' onChange={handleChange}  placeholder= "Enter Age" value={state.age}></input>
        <br/>
        <input  name='course' onChange={handleChange}  placeholder= "Enter Course" value={state.course}></input><br/>
        <input  name='batch' onChange={handleChange}  placeholder="Enter Batch" value={state.batch}></input><br/>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginRight:'20px',marginTop:'80px',fontSize:'1em'}}><Link to='/student' style={{textDecoration:'none',color:'black',fontSize:'1.3em'}}>Cancel</Link></button>
        <button onClick={Submit} style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginLeft:'20px',marginTop:'80px',fontSize:'1.3em'}} className='submit' >{location.state === null ? 'Submit' : 'Update'}</button>
    </center>
        
    </>
  )
}

export default StudentEdit;