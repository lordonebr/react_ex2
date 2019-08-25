import React from "react";
import logo from '../logo.svg';
import './Home.css';

export const Home = () => 
<div>
    <h1 class="homeText">Seja Bem-vindo, clique no menu acima para navegar pelo site.</h1>
    <h4 class="homeText">Esta página foi criada utilizando REACT.</h4>
    <img src={logo} className="App-logo" alt="logo" />
</div>;
