
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    
         
    <div className="container mb-3 mt-2">
      
      
      <h1>My Article</h1>
      {" "}
      <div className="card">
      <div  className="mb-3 mt-4">
        <input
          type="text"
          placeholder="New post"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <div className="mb-3 mt-6">
        <input
          type="text"
          placeholder="This is a description"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        </div>
        <button type="submit" className="btn btn-primary  form-control btn-lg btn-block" 
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          
          {" "}
          Add post
        </button>
        </div>
        
        </div>
        
        
        
      
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div className="content">
              <h4 > {user.name}</h4>
              <h6> {user.username}</h6>
              
              <input
                type="description"
                placeholder="change article"
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              

              <button type="submit" className="btn btn-primary" 
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                {" "}
                edit post
              </button>
              <button type="submit" className="btn btn-danger"
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete post
              </button>
              
              </div>
              
            
          );
        })}
      </div>
      </div>
    
    
  );
}

export default App;
