import React           from 'react';
import FilmsBlockList  from "../Components/ViewComponents/Home/FilmsBlockList";
import PeopleBlockList from "../Components/ViewComponents/Home/PeopleBlockList";

const HomeView = props => {
    return (
        <>
            <FilmsBlockList listFilms={props.listFilms} />
            <PeopleBlockList listPeople={props.listPeople} />
        </>
    );
};

export default HomeView;
