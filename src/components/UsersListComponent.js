import React, { useState } from 'react';
import { UsersListItemComponent } from "./UsersListItemComponent";
import '../routers/Users.css';

export const UsersList = () => {

    const [users, setUsers] = useState([
        { id: 0, name: "André", email: "andgas@yahoo.com.br", age: 35, show: true },
        { id: 1, name: "Alice", email: "alice@yahoo.com.br", age: 1, show: true },
        { id: 2, name: "Mariana", email: "mariana@gmail.com", age: 31, show: true },
        { id: 3, name: "Paulo", email: "paulo@gmail.com", age: 70, show: true },
        { id: 4, name: "Márcia", email: "marcia@gmail.com", age: 61, show: true },
        { id: 5, name: "Arthur", email: "arthur@gmail.com", age: 31, show: true },
        { id: 6, name: "Maria", email: "maria@outlook.com", age: 60, show: true },
        { id: 7, name: "Eliana", email: "eliana@hotmail.com", age: 40, show: true },
        { id: 8, name: "Ana Luiza", email: "analuiza@hotmail.com", age: 11, show: true }
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
            <h4 class="userMainText">Filtrar usuários pelo início do nome: <input type="text" onChange={ e => filterUsers(e)} >
                </input>
            </h4>
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
