import React from "react";
import { Route } from "react-router-dom";
import { Home, Users, User } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users/" exact component={Users} />
    <Route path="/users/:name" component={User} />
  </>
);
