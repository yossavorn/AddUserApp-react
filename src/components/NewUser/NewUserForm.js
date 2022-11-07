import React from "react";
import "./NewUserForm.css";
import Button from "../UXUI/Button";
import { useState } from "react";
import ErrorModal from "../UXUI/ErrorModal";

const NewUserForm = (props) => {
  const [newUsername, setNewUsername] = useState("");
  const [newAge, setNewAge] = useState("");
 
  const [error,setError] = useState()

  const userNameChangeHandler = (event) => {
    setNewUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setNewAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (newUsername.trim().length === 0 || newAge.trim().length === 0) {
      setError({
        title:"Invalid input",
        message:"Please enter a valid name and age "
      })
      return
      
    }
    if (+newAge < 1) {
      setError(
        {
          title:"Invalid age",
          message:"Please enter a valid age (>0) "
        }
      )
      return

    }
    const userData = {
      username: newUsername,
      age: newAge,
      id: Math.random().toString(),
    };
    props.onSaveUserData(userData);
    setNewUsername("");
    setNewAge("");
  };
  const okayHandler = () => {
    setError()
  }

  return (
    <div>
      
      {error && <ErrorModal onOkay={okayHandler}  title={error.title} message={error.message} />}
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={newUsername}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            onChange={ageChangeHandler}
            max="100"
          
            value={newAge}
           
            id="age"
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default NewUserForm;
