import React               from 'react';
import HomeController      from "../Controllers/HomeController";
import FilmsController     from "../Controllers/FilmsController";
import PeopleController    from "../Controllers/PeopleController";
import PlanetsController   from "../Controllers/PlanetsController";
import VehiclesController  from "../Controllers/VehiclesController";
import SpeciesController   from "../Controllers/SpeciesController";
import StarshipsController from "../Controllers/StarshipsController";

const Routes = [
    {path: "/starships/:id", component: StarshipsController},
    {path: "/starships", component: StarshipsController},
    {path: "/species/:id", component: SpeciesController},
    {path: "/species", component: SpeciesController},
    {path: "/vehicles/:id", component: VehiclesController},
    {path: "/vehicles", component: VehiclesController},
    {path: "/planets/:id", component: PlanetsController},
    {path: "/planets", component: PlanetsController},
    {path: "/people/:id", component: PeopleController},
    {path: "/people", component: PeopleController},
    {path: "/films/:id", component: FilmsController},
    {path: "/films", component: FilmsController},
    {path: "/", component: HomeController, exact: true}
];

export default Routes;
