import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import type FilmsModel from "../../Models/FilmsModel";
import ListCard from "../../Components/Generics/ListCard";

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

                            const detailUrl = `/films/${item.id}`;

                            return (

                                <Col key={index} sm={4} className="mb-5">

                                    <ListCard
                                        onClick={() => props.history.push(detailUrl)}
                                        url={detailUrl}
                                        borderColor="blue-border"
                                        iconSrc="/img/icons/actor.png"
                                        title={item.title}
                                        subtitle={"Episode " + item.episode_id}
                                        resume={item.opening_crawl}
                                    />

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
