import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {BulletList, List} from 'react-content-loader'
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import {Badge, Button, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row} from "reactstrap";
import DetailList from "../../Components/Generics/DetailList";

const PlanetDetailView = props => {

    const {apiData} = props;

    return (
        <>
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : apiData?.name}
                subtitle={""}
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <aside>

                            <DetailList
                                loading={props.loading}
                                data={[
                                    {title: "Diameter", desc: apiData?.diameter },
                                    {title: "Rotation Period ", desc: apiData?.rotation_period  },
                                    {title: "Orbital Period  ", desc: apiData?.orbital_period   },
                                    {title: "Gravity   ", desc: apiData?.gravity    },
                                ]}
                            />

                        </aside>
                    </Col>
                    <Col xs={12} md={6}>

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Population", desc: apiData?.population },
                                {title: "Climate", desc: apiData?.climate },
                                {title: "Terrain", desc: apiData?.terrain },
                                {title: "Surface Water ", desc: apiData?.surface_water  },
                            ]}
                        />

                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col className="text-center">
                        <Button color="primary" outline>
                            Films <Badge color="secondary">{apiData?.films?.length}</Badge>
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="primary" outline>
                            Residents <Badge color="secondary">{apiData?.residents?.length}</Badge>
                        </Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

PlanetDetailView.propTypes = {
    apiData: PropTypes.object,
};

export default PlanetDetailView;
