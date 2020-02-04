import React, {useEffect} from 'react';
import HomeView           from "../Views/HomeView";
import FilmsService       from "../Services/FilmsService";
import PeopleService      from "../Services/PeopleService";
import PlanetsService     from "../Services/PlanetsService";
import VehiclesService    from "../Services/VehiclesService";
import SpeciesService     from "../Services/SpeciesService";
import StarshipsService   from "../Services/StarshipsService";

/**
 * Este controller monta uma função para cada listagem da home e passa por props para a view
 */
const HomeController = () => {
    const filmService = FilmsService({loadingControl: false});
    const peopleService = PeopleService({loadingControl: false});
    const planetService = PlanetsService({loadingControl: false});
    const vehicleService = VehiclesService({loadingControl: false});
    const specieService = SpeciesService({loadingControl: false});
    const starshipService = StarshipsService({loadingControl: false});

    const listFilms = async () => {
        try {
            return await filmService.list();
        } catch (e) { throw e; }
    };

    const listPeople = async () => {
        try {
            return await peopleService.list();
        } catch (e) { throw e; }
    }

    const listPlanets = async () => {
        try {
            return await planetService.list();
        } catch (e) { throw e; }
    }

    const listVehicles = async () => {
        try {
            return await vehicleService.list();
        } catch (e) { throw e; }
    }

    const listSpecies = async () => {
        try {
            return await specieService.list();
        } catch (e) { throw e; }
    }

    const listStarships = async () => {
        try {
            return await starshipService.list();
        } catch (e) { throw e; }
    }

    useEffect(() => {

    }, []);

    return (
        <HomeView
            listFilms={listFilms}
            listPeople={listPeople}
            listPlanets={listPlanets}
            listVehicles={listVehicles}
            listSpecies={listSpecies}
            listStarships={listStarships}
        />
    );
};

export default HomeController;
