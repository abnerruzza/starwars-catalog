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
            <FilmsBlockList listData={props.listFilms} history={props.history} />
            <PeopleBlockList listData={props.listPeople} history={props.history} />
            <PlanetsBlockList listData={props.listPlanets} history={props.history} />
            <SpeciesBlockList listData={props.listSpecies} history={props.history} />
            <StarshipsBlockList listData={props.listStarships} history={props.history} />
            <VehiclesBlockList listData={props.listVehicles} history={props.history} />
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
