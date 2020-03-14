import React, { useState } from 'react';
import sampleData from '../../sampleData';
import './Suggestions.css'
import Users from './Users/Users';
import Status from '../Status/Status';

const Suggestions = () => {
    
    const first15 = sampleData.slice(0, 15)
    const [users, setUsers] = useState(first15)
    const [status, setStatus] = useState([]);

    const handleAddUser = (user) =>{
        // console.log("user added", user)
        const newStatus = [...status, user];
        setStatus(newStatus)
    }

    return (
        <div className="main-container">
        <h4>{users.length}</h4>
        <div className="users-container">
            {
                users.map(component => <Users
                    handleAddUser = {handleAddUser}
                    user={component}></Users>)
            }
        </div>
        <div className="fixed-box">
            
            <div className="info-container">
               <Status status = {status}></Status>
            </div>
        </div>
        
        </div>
    );
};

export default Suggestions; 