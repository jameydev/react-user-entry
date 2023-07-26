import React, { useState } from 'react';
import UserList from './components/users/UserList';
import AddUser from './components/users/AddUser';

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, 
        {name: userName, 
          age: userAge, 
          id: (Math.PI * Math.random() * Math.pow(2.31, 3)).toString()
        }
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </>
  );
}