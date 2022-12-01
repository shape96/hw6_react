import React, { useState } from 'react';

function UsersList({usersList}) {
    const [usersInfo, setUsersInfo] = useState([]);

    const getOneUserInfo = (event) => {
        const id = event.target.dataset.id
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(Response => Response.json())
        .then(data => setUsersInfo(data.website));
    }
    

    return (
       <>
       <p>Website:{usersInfo}</p>
         
        <ul>      

            {
                usersList.map(user => 
                <li key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <button data-id={user.id} onClick={getOneUserInfo}>get info</button>
                    <p>--------------</p>
                </li>
                )
            }
        </ul>
        </>
    );
}

export default UsersList;