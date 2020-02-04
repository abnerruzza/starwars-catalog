import React              from 'react';
import FilmsBlockList     from "../Components/ViewComponents/Home/FilmsBlockList";
import PeopleBlockList    from "../Components/ViewComponents/Home/PeopleBlockList";
import PlanetsBlockList   from "../Components/ViewComponents/Home/PlanetsBlockList";
import PropTypes          from "prop-types";
import StarshipsBlockList from "../Components/ViewComponents/Home/StarshipsBlockList";
import Container          from "reactstrap/es/Container";
import SpeciesBlockList   from "../Components/ViewComponents/Home/SpeciesBlockList";
import VehiclesBlockList  from "../Components/ViewComponents/Home/VehiclesBlockList";

const HomeView = props => {
    return (
        <Container>
            <FilmsBlockList listData={props.listFilms} />
            <PeopleBlockList listData={props.listPeople} />
            <PlanetsBlockList listData={props.listPlanets} />
            <SpeciesBlockList listData={props.listSpecies} />
            <StarshipsBlockList listData={props.listStarships} />
            <VehiclesBlockList listData={props.listVehicles} />
            <div className="mt-5" />
        </Container>
    );
};

StarshipsBlockList.propTypes = {
    listFilms: PropTypes.func,
    listPeople: PropTypes.func,
    listPlanets: PropTypes.func,
    listVehicles: PropTypes.func,
    listSpecies: PropTypes.func,
    listStarships: PropTypes.func,
};

export default HomeView;
