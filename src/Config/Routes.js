import React from 'react';
import HomeController from "../Controllers/HomeController";
import FilmsController from "../Controllers/FilmsController";
import PeopleController from "../Controllers/PeopleController";
import PlanetsController from "../Controllers/PlanetsController";

const Routes = [
    {path: "/planets/:id", component: PlanetsController},
    {path: "/planets", component: PlanetsController},
    {path: "/people/:id", component: PeopleController},
    {path: "/people", component: PeopleController},
    {path: "/films/:id", component: FilmsController},
    {path: "/films", component: FilmsController},
    {path: "/", component: HomeController, exact: true}
];

export default Routes;
