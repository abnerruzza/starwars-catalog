import React, {
    useEffect,
    useState
}                       from 'react';
import PropTypes        from 'prop-types';
import {
    Col,
    Container,
    Row
}                       from "reactstrap";
import LoadingSvg       from "../../Generics/LoadingSvg";
import SplideContainer  from "../../Generics/SplideContainer";
import {Link}           from "react-router-dom";
import type PeopleModel from "../../../Models/PeopleModel";
import ListCard         from "../../Generics/ListCard";

const PeopleBlockList = props => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const listData = async () => {
        setLoading(true);
        try {
            const res = await props.listData();
            setData( res.results );
            setLoading(false);
        } catch (e) {
            setError( e.message );
            setLoading(false);
        }
    };

    useEffect(() => {
        listData();
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
                                options={{rewind: true, type: 'loop', perPage: 3, pagination: false, gap: 20, breakpoints: {640: {perPage: 1}, 1024: {perPage: 2}} } }
                                slides={data.map((item: PeopleModel, index) => {

                                    const detailUrl = `/people/${item.id}`;

                                    return (
                                        <ListCard
                                            key={index}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="green-border"
                                            iconSrc="/img/icons/actor.png"
                                            title={item.name}
                                            subtitle={"actor"}
                                            numbers={[
                                                {title: "Mass", value: item.mass + "Kg"},
                                                {title: "Birth Year", value: item.birth_year},
                                            ]}
                                            relations={[
                                                {title: "Species", icon: "/img/icons/actor.png", items: item.species},
                                                {title: "Vehicles", icon: "/img/icons/rickshaw.png", items: item.vehicles},
                                                {title: "Films", icon: "/img/icons/photographic-film.png", items: item.films}
                                            ]}
                                        />
                                    )

                                })}
                            />
                        }
                    </Col>
                </Row>

                {(!loading && !error) &&
                <Row>
                    <Col className="text-right px-5 pt-3">
                        <Link to={"/people"}>+ See all</Link>
                    </Col>
                </Row>
                }

            </Container>
        </section>
    );
};

PeopleBlockList.propTypes = {
    listData: PropTypes.func,
};

export default PeopleBlockList;
