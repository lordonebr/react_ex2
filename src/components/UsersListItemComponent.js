import React from "react";
import { Link } from "react-router-dom";


export function UsersListItemComponent(props) {
    return(
        <div>
            <p>Nome: <span>
                    <Link to={'users/'+props.nome}>{props.nome}</Link>
                </span>
            </p>
            <p>Email: {props.email}</p>
            <p>Idade: {props.idade}</p>
            <button onClick={ event => props.onRemoveUser(props.id, event)}>Remover usuário</button>
    </div>
    )
}