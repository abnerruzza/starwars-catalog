import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import LoadingSvg from "../../Components/Generics/LoadingSvg";

const FilmListView = props => {
    return (
        <>

            <section className="mt-5 pt-5">
                <Container fluid>
                    <h2 className="section-title text-center mb-2 h1">Films</h2>
                    <p className="text-center text-muted h5">StarWars films</p>
                </Container>
            </section>

            <section className="mt-5">
                <Container>

                    <InputGroup>
                        <Input onKeyUp={(e) => {if(e.key === "Enter") props.listFilms() }} onChange={(e) => props.setSearch(e.target.value)} placeholder="Search for Film title" />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={() => props.listFilms()}>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>

                </Container>
            </section>

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.filmData?.results?.map((item, index) => {
                            return (

                                <Col sm={4} className="mb-5">
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
