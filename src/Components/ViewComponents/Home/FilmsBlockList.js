import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import FilmsService from "../../../Services/FilmsService";
import type FilmsModel from "../../../Models/FilmsModel";

const FilmsBlockList = props => {
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const listFilms = async () => {
        setLoading(true);
        try {
            setFilms( await props.listFilms() );
            setLoading(false);
        } catch (e) {
            setError( e.message );
            setLoading(false);
        }
    };

    useEffect(() => {
        listFilms();
    }, []);

    return (
        <section id="what-we-do">
            <div className="container-fluid">
                <h2 className="section-title mb-2 h1">What we do</h2>
                <p className="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>
                <div className="row mt-5">
                    {films.map((el: FilmsModel) => {
                        return el.characters
                    })}
                </div>
            </div>
        </section>
    );
};

FilmsBlockList.propTypes = {
    listFilms: PropTypes.func,
};

export default FilmsBlockList;
