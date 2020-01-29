import React, {useState, useEffect} from 'react';
import HomeView                     from "../Views/HomeView";
import FilmsService                 from "../Services/FilmsService";
import PeopleService                from "../Services/PeopleService";
import FilmDetailView from "../Views/Films/FilmDetailView";
import FilmListView from "../Views/Films/FilmListView";

const FilmsController = props => {
    const [filmData, setFilmData] = useState(null);
    const [search, setSearch] = useState(null);
    const filmService = FilmsService({loadingControl: true});
    const {match, location} = props;

    const listFilms = async () => {
        try {
            const data =  await filmService.list(search);
            setFilmData(data)
        } catch (e) { throw e; }
    };

    const getFilm = async () => {
        try {
            const data = await filmService.getOne(match.params.id);
            setFilmData(data);
        } catch (e) { throw e; }
    };

    useEffect(() => {

        if(match.params.id)
            getFilm();
        else
            listFilms();

    }, [match.params.id]);

    if(match.params.id) {
        return <FilmDetailView filmData={filmData} getFilm={getFilm} />
    } else {
        return <FilmListView setSearch={setSearch} filmData={filmData} listFilms={listFilms} loading={filmService.api.loading} />
    }
};

export default FilmsController;
