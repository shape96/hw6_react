import React, { useState } from 'react'
import UsersList from '../../components/usersList/UsersList';

export  function UserPage() {

    const[users, setUsers] = useState([]);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => setUsers(data))
    }

  return (
    <div>
    
      <h1>users list</h1>
      <button onClick={getUsers}>get user</button>
      <UsersList usersList={users}/>

    </div>
  )
}
export default UserPage;
