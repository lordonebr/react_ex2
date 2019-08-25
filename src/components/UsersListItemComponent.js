import React from "react";
import { Link } from "react-router-dom";


export function UsersListItemComponent(props) {
    return(
        <div>
            <p>Nome: <span>
                    <Link to={'users/'+props.name}>{props.name}</Link>
                </span>
            </p>
            <p>Email: {props.email}</p>
            <p>Idade: {props.age}</p>
            <button onClick={ event => props.onRemoveUser(props.id, event)}>Remover usuário</button>
    </div>
    )
}