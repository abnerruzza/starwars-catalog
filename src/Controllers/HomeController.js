import React, {useState, useEffect} from 'react';
import HomeView                     from "../Views/HomeView";
import FilmsService                 from "../Services/FilmsService";
import PeopleService                from "../Services/PeopleService";

const HomeController = () => {
    const filmService = FilmsService({loadingControl: false});
    const peopleService = PeopleService({loadingControl: false});

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

    useEffect(() => {

    }, []);

    return (
        <HomeView
            listFilms={listFilms}
            listPeople={listPeople}
        />
    );
};

export default HomeController;
