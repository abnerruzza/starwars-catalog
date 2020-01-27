import React from 'react';
import FilmsBlockList from "../Components/ViewComponents/Home/FilmsBlockList";

const HomeView = props => {
    return (
        <div style={{height: 800}}>
            <FilmsBlockList listFilms={props.listFilms} />
        </div>
    );
};

export default HomeView;
