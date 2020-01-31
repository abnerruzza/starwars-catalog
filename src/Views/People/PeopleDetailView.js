import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {BulletList, List} from 'react-content-loader'
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import {Badge, Button, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row} from "reactstrap";
import DetailList from "../../Components/Generics/DetailList";

const PeopleDetailView = props => {

    const {peopleData} = props;

    return (
        <>
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : peopleData?.name}
                subtitle={""}
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <aside>

                            <DetailList
                                loading={props.loading}
                                data={[
                                    {title: "Hair Color", desc: peopleData?.hair_color},
                                    {title: "Height", desc: <>{peopleData?.height} cm</>},
                                    {title: "Mass", desc: <>{peopleData?.mass} Kg</>},
                                ]}
                            />

                        </aside>
                    </Col>
                    <Col xs={12} md={6}>

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Skin Color", desc: peopleData?.skin_color},
                                {title: "Eye Color", desc: peopleData?.eye_color},
                                {title: "Birth Year", desc: peopleData?.birth_year},
                            ]}
                        />

                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col className="text-center">
                        <Button color="primary" outline>
                            Species <Badge color="secondary">{peopleData?.species?.length}</Badge>
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="primary" outline>
                            Starships <Badge color="secondary">{peopleData?.starships?.length}</Badge>
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="primary" outline>
                            Vehicles <Badge color="secondary">{peopleData?.vehicles?.length}</Badge>
                        </Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

PeopleDetailView.propTypes = {
    filmData: PropTypes.object,
};

export default PeopleDetailView;
