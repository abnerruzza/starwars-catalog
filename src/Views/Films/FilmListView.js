import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import type FilmsModel from "../../Models/FilmsModel";

const FilmListView = props => {
    return (
        <>

            <PageTitleSection
                title="Films"
                subtitle="StarWars films catalog"
            />

            <PageSearchSection
                listFunction={props.listFilms}
                setSearchValue={props.setSearch}
                fieldPlaceholder="Search for Film title"
            />

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.filmData?.results?.map((item: FilmsModel, index) => {
                            return (

                                <Col sm={4} className="mb-5">
                                    <Card key={index} className="text-center cursor-pointer" onClick={() => props.history.push(`/films/${item.id}`)}>
                                        <CardBody>
                                            <img src="/img/icons/photographic-film.png" alt="Film" className="mb-2"/>
                                            <CardTitle>
                                                <h5><Badge color="secondary">Episode {item.episode_id}</Badge></h5>
                                                <h4><Link to={`/films/${item.episode_id}`}>{item.title}</Link></h4>
                                            </CardTitle>
                                            <CardSubtitle>Director: {item.director}</CardSubtitle>
                                            <CardText><small>{item.opening_crawl}</small></CardText>
                                        </CardBody>
                                    </Card>
                                </Col>

                            )
                        })}
                    </Row>
                </Container>
            </section>

        </>
    );
};

FilmListView.propTypes = {
    setFilter: PropTypes.func,
};

export default FilmListView;