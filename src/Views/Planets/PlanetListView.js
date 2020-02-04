import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import type PlanetsModel from "../../Models/PlanetsModel";
import ListCard from "../../Components/Generics/ListCard";

const PlanetListView = props => {
    return (
        <>

            <PageTitleSection
                title="Planets"
                subtitle="StarWars planets catalog"
            />

            <PageSearchSection
                listFunction={props.listData}
                setSearchValue={props.setSearch}
                fieldPlaceholder="Search for Planet title"
            />

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.apiData?.results?.map((item: PlanetsModel, index) => {

                            const detailUrl = `/planets/${item.id}`;

                            return (
                                <Col sm={12} md={6} lg={4} xl={3} className="mb-5">

                                    <ListCard
                                        onClick={() => props.history.push(detailUrl)}
                                        borderColor="blue-border"
                                        url={detailUrl}
                                        iconSrc="/img/icons/planet.png"
                                        title={item.name}
                                        subtitle={"planet"}
                                        numbers={[
                                            {title: "Diameter", value: item.diameter},
                                            {title: "Population", value: item.population},
                                        ]}
                                        relations={[
                                            {title: "Residents", icon: "/img/icons/actor.png", items: item.residents},
                                            {title: "Films", icon: "/img/icons/photographic-film.png", items: item.films}
                                        ]}
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

PlanetListView.propTypes = {
    apiData: PropTypes.object,
    listData: PropTypes.func,
    setSearch: PropTypes.func,
    history: PropTypes.object,
};

export default PlanetListView;
