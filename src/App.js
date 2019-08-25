import React from 'react';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";
import './App.css';

function App() {
  return (
    <div>
      <ul class="listMenu">
        <li class="itemMenu">
          <Link class="itemMenuLink" to="/">Início</Link>
        </li>
        <li class="itemMenu">
          <Link class="itemMenuLink" to="/users">Lista de usuários</Link>
        </li>
        <li class="itemMenu">
          <Link class="itemMenuLink" to="/about">Sobre</Link>
        </li>
      </ul>

      <ApplicationRoutes />
    </div>
  );
}

export default App;
