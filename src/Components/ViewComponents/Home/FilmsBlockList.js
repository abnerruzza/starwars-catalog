import React, {useState, useEffect} from 'react';
import PropTypes                    from 'prop-types';
import FilmsService                 from "../../../Services/FilmsService";
import type FilmsModel              from "../../../Models/FilmsModel";
import SplideContainer              from "../../Generics/SplideContainer";
import {
    Badge,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container,
    Row
}                                   from "reactstrap";
import {Link}                       from "react-router-dom";
import LoadingSvg                   from "../../Generics/LoadingSvg";

const FilmsBlockList = props => {
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const listFilms = async () => {
        setLoading(true);
        try {
            const data = await props.listFilms();
            setFilms( data.results );
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
        <section className="mt-5">
            <Container fluid>
                <h2 className="section-title text-center mb-2 h1">Films</h2>
                <p className="text-center text-muted h5">StarWars films</p>

                <Row >
                    <Col className="px-5 pt-5 text-center">
                        {loading
                            ? <LoadingSvg />
                            :
                            <SplideContainer
                                className="films-list"
                                options={{rewind: true, type: 'loop', perPage: 3, pagination: false, gap: 20, breakpoints: {640: {perPage: 1}, 768: {perPage: 2}, 1024: {perPage: 3}} } }
                                slides={films.map((item: FilmsModel, index) => {

                                    return (
                                        <Card key={index} className="text-center cursor-pointer">
                                            <CardBody>
                                                <img src="/img/icons/photographic-film.png" alt="Film" className="mb-2"/>
                                                <CardTitle>
                                                    <h5><Badge color="secondary">Episode {item.episode_id}</Badge></h5>
                                                    <h4><Link to={'/'}>{item.title}</Link></h4>
                                                </CardTitle>
                                                <CardSubtitle>Director: {item.director}</CardSubtitle>
                                                <CardText><small>{item.opening_crawl}</small></CardText>
                                            </CardBody>
                                        </Card>
                                    )

                                })}
                            />
                        }
                    </Col>
                </Row>

                {(!loading && !error) &&
                    <Row>
                        <Col className="text-right px-5 pt-3">
                            <Link to={"/"}>+ See all</Link>
                        </Col>
                    </Row>
                }

            </Container>
        </section>
    );
};

FilmsBlockList.propTypes = {
    listFilms: PropTypes.func,
};

export default FilmsBlockList;
