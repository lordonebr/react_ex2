import React from "react";
import { Route } from "react-router-dom";
import { Home, Users, User, About } from "./routers";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users/" exact component={Users} />
    <Route path="/users/:name" component={User} />
    <Route path="/about/" exact component={About} />
  </>
);
