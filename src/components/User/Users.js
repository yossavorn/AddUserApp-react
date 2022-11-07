import React from "react";
import UserList from "./UserList";
import "./Users.css";

const Users = (props) => {
     console.log(props.data);
  return (
    <ul className="userlist">
      {props.data.map((goal) => (
        <UserList key={goal.id} id={goal.id} name={goal.username} age={goal.age}></UserList>
      ))}
    </ul>
  );
};


export default Users