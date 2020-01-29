import React from 'react';
import HomeController from "../Controllers/HomeController";
import FilmsController from "../Controllers/FilmsController";

const Routes = [
    {path: "/films/:id", component: FilmsController},
    {path: "/films", component: FilmsController},
    {path: "/", component: HomeController, exact: true}
];

export default Routes;
