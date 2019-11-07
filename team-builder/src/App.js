import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';

function App() {

  const [memberList, setMemberList] = useState([])

  return (
    <div className="App">
     <Form memberList={memberList} setMemberList={setMemberList}/>
     <div className="card">
     {memberList.map(member =>(
         <div className="membercard">
         <h2>{member.name}</h2>
         <p><span>Role: </span>{member.role}</p>
         <p>{member.email}</p>
         </div>
     ))}
     </div>
    </div>
  );
}

export default App;
