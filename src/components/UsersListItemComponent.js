import React from "react";
import { Link } from "react-router-dom";
import '../routers/Users.css';

export function UsersListItemComponent(props) {
    return(
        <div class="userItem">
            <p><span class="tagUser">Nome:</span> <span>
                    <Link to={'users/'+props.name}>{props.name}</Link>
                </span>
            </p>
            <p><span class="tagUser">E-mail:</span> {props.email}</p>
            <p><span class="tagUser">Idade:</span> {props.age}</p>
            <button class="btnRemoveUser" title="Remove o usuário da lista" onClick={ event => props.onRemoveUser(props.id, event)}>Remover</button>
    </div>
    )
}