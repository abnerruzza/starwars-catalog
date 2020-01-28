import React, {useState, useEffect} from 'react';
import PropTypes         from 'prop-types';
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
}                        from "reactstrap";
import LoadingSvg        from "../../Generics/LoadingSvg";
import SplideContainer   from "../../Generics/SplideContainer";
import type FilmsModel   from "../../../Models/FilmsModel";
import {Link}            from "react-router-dom";
import type PeopleModel from "../../../Models/PeopleModel";

const PeopleBlockList = props => {
    const [people, setPeople] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const listFilms = async () => {
        setLoading(true);
        try {
            const data = await props.listPeople();
            setPeople( data.results );
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
                <h2 className="section-title text-center mb-2 h1">People</h2>
                <p className="text-center text-muted h5">StarWars people</p>

                <Row >
                    <Col className="px-5 pt-5 text-center">
                        {loading
                            ? <LoadingSvg />
                            :
                            <SplideContainer
                                className="films-list"
                                options={{rewind: true, type: 'loop', perPage: 3, pagination: false, gap: 20, breakpoints: {640: {perPage: 1}, 768: {perPage: 2}, 1024: {perPage: 3}} } }
                                slides={people.map((item: PeopleModel, index) => {

                                    return (
                                        <Card key={index} className="text-center cursor-pointer">
                                            <CardBody>
                                                <img src="/img/icons/actor.png" alt="People" className="mb-2"/>
                                                <CardTitle>
                                                    <h5><Badge color="secondary">{item.gender}</Badge></h5>
                                                    <h4><Link to={'/'}>{item.name}</Link></h4>
                                                </CardTitle>
                                                <CardSubtitle>{item.birth_year}</CardSubtitle>
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

PeopleBlockList.propTypes = {
    listPeople: PropTypes.func,
};

export default PeopleBlockList;
