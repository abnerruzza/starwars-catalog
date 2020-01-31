import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {BulletList, List} from 'react-content-loader'
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import LoadingSvg from "../../Components/Generics/LoadingSvg";
import {Badge, Button, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row} from "reactstrap";
import DetailList from "../../Components/Generics/DetailList";

const FilmDetailView = props => {

    const {filmData} = props;

    return (
        <>
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : filmData?.title}
                subtitle={props.loading ? <LoadingSvg/> : `Episode ${filmData?.episode_id}`}
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={5} className="mb-3 mb-md-0">
                        <aside>

                            <DetailList
                                loading={props.loading}
                                data={[
                                    {title: "Director", desc: filmData?.director},
                                    {title: "Producer", desc: filmData?.producer},
                                    {title: "Release Date", desc: filmData?.release_date_formatted},
                                ]}
                            />

                        </aside>
                    </Col>
                    <Col xs={12} md={7}>

                        <article>
                            {props.loading ?
                                <List />
                                :
                                <>
                                    <h2>Opening Crawl</h2>
                                    {filmData?.opening_crawl}


                                    <div className="mt-3">
                                        <Button color="primary" outline>
                                            Planets <Badge color="secondary">{filmData?.planets?.length}</Badge>
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button color="primary" outline>
                                            Species <Badge color="secondary">{filmData?.species?.length}</Badge>
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button color="primary" outline>
                                            Starships <Badge color="secondary">{filmData?.starships?.length}</Badge>
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button color="primary" outline>
                                            Vehicles <Badge color="secondary">{filmData?.vehicles?.length}</Badge>
                                        </Button>
                                    </div>

                                </>
                            }
                        </article>


                    </Col>
                </Row>
            </Container>

        </>
    );
};

FilmDetailView.propTypes = {
    filmData: PropTypes.object,
};

export default FilmDetailView;
