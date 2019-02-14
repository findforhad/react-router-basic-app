import React from "react";
import SideBar from "./sidebar";
import { Route } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route component={Users} path="/admin/users" />
      <Route component={Posts} path="/admin/posts" />
    </div>
  );
};

export default Dashboard;
