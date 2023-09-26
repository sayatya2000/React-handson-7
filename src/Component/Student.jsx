import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const Student = () => {
  const data = useSelector((state) => state.student);
  const handleAdd=(e)=>{
    console.log(e.target)
  }
  return (
    <div>
        <span style={{marginTop:'60px',marginLeft:'30px',fontSize:'2em',fontWeight:'bold'}}>Student</span>
        <button onClick={handleAdd} style={{position:'absolute',right:'100px',top:'80px',width:'200px',height:'50px',backgroundColor:'rgb(15, 15, 128)'}}><Link to='/student-desc' style={{textDecoration:'none',fontSize:'1.5em',color:'white'}}>Add New Student</Link></button>
        <div>
                {data.studentArray.length ? 
                <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {
                   data.studentArray.map((item,index)=>
                      <tr  style={{textAlign:'center'}} key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.course}</td>
                        <td>{item.batch}</td>
                        <td>
                          <Link to={`/student-desc/${index+1}`} state={{details:item,id:index}}>Edit</Link>
                        </td>
                      </tr>
      )
                  }
                </tbody>
              </table>
                 : <center><h1 style={{marginTop:"50px"}}>Add data to see details</h1> </center>}
            </div>
        
        </div>
  );
}

export default Student