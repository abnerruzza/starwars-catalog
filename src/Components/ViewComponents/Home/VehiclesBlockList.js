import React, {
    useEffect,
    useState
}                         from 'react';
import PropTypes          from 'prop-types';
import SplideContainer    from "../../Generics/SplideContainer";
import {
    Col,
    Container,
    Row
}                         from "reactstrap";
import {Link}             from "react-router-dom";
import LoadingSvg         from "../../Generics/LoadingSvg";
import ListCard           from "../../Generics/ListCard";
import type VehiclesModel from "../../../Models/VehiclesModel";

const VehiclesBlockList = props => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const listData = async () => {
        setLoading(true);
        try {
            const data = await props.listData();
            setData( data.results );
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
                <h2 className="section-title text-center mb-2 h1">Vehicles</h2>
                <p className="text-center text-muted h5">StarWars vehicles</p>

                <Row >
                    <Col className="px-5 pt-5 text-center">
                        {loading
                            ? <LoadingSvg />
                            :
                            <SplideContainer
                                className="films-list"
                                options={{rewind: true, type: 'loop', perPage: 2, pagination: false, gap: 20, breakpoints: { 768: {perPage: 1} } } }
                                slides={data.map((item: VehiclesModel, index) => {

                                    const detailUrl = `/vehicles/${item.id}`;

                                    return (
                                        <ListCard
                                            key={index}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="green-border"
                                            iconSrc="/img/icons/rickshaw.png"
                                            title={item.name}
                                            subtitle={item.model}
                                            numbers={[
                                                {title: "Speed", value: item.max_atmosphering_speed},
                                                {title: "Crew", value: item.crew},
                                            ]}
                                            relations={[
                                                {title: "Pilots", icon: "/img/icons/pilot.png", items: item.pilots},
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
                            <Link to={"/vehicles"}>+ See all</Link>
                        </Col>
                    </Row>
                }

            </Container>
        </section>
    );
};

VehiclesBlockList.propTypes = {
    listData: PropTypes.func,
};

export default VehiclesBlockList;
