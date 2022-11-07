import "./App.css";
import NewUserForm from "./components/NewUser/NewUserForm";
import { useState } from "react";
import Users from "./components/User/Users";
import Card from "./components/UXUI/Card";

function App() {
  const [userList, setUserList] = useState([]);

  const onSaveUserDataHandler = (data) => {
    setUserList((prevUser) => {
      return [data, ...prevUser];
    });
  };
  let content = <p className="no-user-description">No User</p>;
  console.log(userList);
  if (userList.length > 0) {
    content = <Users data={userList}></Users>;
  }

  return (
    <div className="App">
      <Card className="content-card">
        <NewUserForm onSaveUserData={onSaveUserDataHandler}></NewUserForm>
      </Card>
      <Card className="content-card">{content}</Card>
    </div>
  );
}

export default App;
