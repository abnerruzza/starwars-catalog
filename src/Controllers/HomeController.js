import React, {useState, useEffect} from 'react';
import HomeView from "../Views/HomeView";
import FilmsService from "../Services/FilmsService";

const HomeController = () => {
    const filmService = FilmsService({loadingControl: false});

    const listFilms = async () => {
        try {
            return await filmService.list();
        } catch (e) {
            throw e;
        }
    }

    useEffect(() => {

    }, []);

    return (
        <HomeView
            listFilms={listFilms}
        />
    );
};

export default HomeController;
