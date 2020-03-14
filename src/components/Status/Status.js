import React from 'react';
import './Status.css'

const Status = (props) => {
    const status = props.status;
    // console.log(status)
    const total = status.reduce((total, usr) => Number(total) + Number(usr.salary), 0);
    // const total = status.reduce((total, usr) => Number(total) + Number(usr.salary), 0);




    // let total = 0;
    // for(let i = 0; i < status.length; i++){
    //     const user = status[i];
    //     total = Number(total) + Number(user.salary);
    // }




    return (
        <div className="status">
            <h4 className="heading">Connection Status</h4>
            <p><strong>Added Users: </strong>{status.length}</p>
            <p>Total Users Monthly Salary: <span className="amount">${total}</span></p>
            {/* <p>Total Users Yearly Salary: ${total}</p> */}
        </div>
    );
};

export default Status;