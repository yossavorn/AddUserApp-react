import React from "react";
import "./UserList.css"


const UserList = (props) => {
    const userData = props.name + ` (${props.age} years old)`
   
    return (
        <div className="list-items">
            <li className="list-item">{userData}</li>
        </div>
    )
}

export default UserList