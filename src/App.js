import React from 'react';
import UserList from './components/users/UserList';
import AddUser from './components/users/AddUser';

export default function App() {
  return (
    <>
      <AddUser />
      <UserList users={[]}/>
    </>
  );
}