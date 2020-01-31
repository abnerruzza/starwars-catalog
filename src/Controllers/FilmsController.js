import React, {useState, useEffect} from 'react';
import FilmsService                 from "../Services/FilmsService";
import FilmDetailView from "../Views/Films/FilmDetailView";
import FilmListView from "../Views/Films/FilmListView";

const FilmsController = props => {
    const [filmData, setFilmData] = useState(null);
    const [search, setSearch] = useState(null);
    const filmService = FilmsService({loadingControl: true});
    const {match, history} = props;

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
        return <FilmDetailView history={history} filmData={filmData} getFilm={getFilm} loading={filmService.api.loading} />
    } else {
        return <FilmListView history={history} setSearch={setSearch} filmData={filmData} listFilms={listFilms} loading={filmService.api.loading} />
    }
};

export default FilmsController;
