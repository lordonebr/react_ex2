import React, { useState } from 'react';
import { UsersListItemComponent } from "./UsersListItemComponent";

export const UsersList = () => {

    const [users, setUsers] = useState([
        {
            id: 0,
            name: "André",
            email: "andgas@yahoo.com.br",
            age: 35,
            show: true
        },
        {
            id: 1,
            name: "Alice",
            email: "alice@yahoo.com.br",
            age: 1,
            show: true
        },
        {
            id: 2,
            name: "Mariana",
            email: "mariana@gmail.com",
            age: 31,
            show: true
        },
        {
            id: 3,
            name: "Paulo",
            email: "paulo@gmail.com",
            age: 70,
            show: true
        }
    ]);

    const filterUsers = (event) => {
        
        setUsers(users.map(user =>
            { 
                let search = user.name.toLowerCase().match(event.target.value.toLowerCase()); 
                if( search !== null && search.index === 0) 
                    user.show = true;
                else 
                    user.show = false;
                
                return user;
            })
        );
    };

    const handleOnRemoveUser = (userId, event) => {
        setUsers(users.filter(user => user.id !== userId));
    }

    return (
        <div>
            <p>Filtrar por nome: <input type="text" onChange={ e => filterUsers(e)} >
                </input>
            </p>
            {users.filter(user => user.show === true).map(userItem => 
                <div>
                    <UsersListItemComponent 
                        onRemoveUser={handleOnRemoveUser}
                        {...userItem} 
                    />
                </div>
            )}
        </div>
    ) 
}
