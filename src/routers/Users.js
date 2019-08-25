import React from "react";
import { UsersList } from "../components/UsersListComponent";
import './Users.css';

export const Users = () => 
    <div>
        <h1 class="userMainText">Lista dos usuários</h1>
        <UsersList />
    </div>;
