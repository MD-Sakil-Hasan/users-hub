import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Users.css'

const Users = (props) => {
    // console.log(props)
    const {img, name, email, salary, income} = props.user;
    return (
        <div className="user">
            <div className="pro-pic">
                <img src={img} alt=""/>
            </div>
            <div className="info">
                <h4 className="userName">{name}</h4>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Salary: </strong><span className="money-amount">${salary}</span></p>
                <p><strong>Total Yearly Income: </strong><span className="money-amount">${income}</span></p>
                <p className="btns"><button className="add-btn"
                    onClick = {() => props.handleAddUser(props.user)}
                    >
                    <FontAwesomeIcon icon={faPlus} />  Add User</button>
                <button>Remove</button></p>
            </div>
        </div>
    );
};

export default Users;