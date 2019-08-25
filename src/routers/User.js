import React from "react";
import { Link } from "react-router-dom";
import '../routers/Users.css';

export const User = (props) => 
<div class="userMainText">
    <h1>Página do usuário: {props.match.params.name}</h1>
    <Link class="btnBackUsers" to="/users">Voltar</Link>
</div>;
