import React, {
    useEffect,
    useState
}                        from 'react';
import PropTypes         from 'prop-types';
import SplideContainer   from "../../Generics/SplideContainer";
import {
    Col,
    Container,
    Row
}                        from "reactstrap";
import {Link}            from "react-router-dom";
import LoadingSvg        from "../../Generics/LoadingSvg";
import type PlanetsModel from "../../../Models/PlanetsModel";
import ListCard          from "../../Generics/ListCard";

const PlanetsBlockList = props => {
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
                <h2 className="section-title text-center mb-2 h1">Planets</h2>
                <p className="text-center text-muted h5">StarWars planets</p>

                <Row >
                    <Col className="px-5 pt-5 text-center">
                        {loading
                            ? <LoadingSvg />
                            :
                            <SplideContainer
                                className="films-list"
                                options={{rewind: true, type: 'loop', perPage: 2, pagination: false, gap: 20, breakpoints: {640: {perPage: 1}, 768: {perPage: 2}} } }
                                slides={data.map((item: PlanetsModel, index) => {

                                    const detailUrl = `/planets/${item.id}`;

                                    return (
                                        <ListCard
                                            key={index}
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
                                    )

                                })}
                            />
                        }
                    </Col>
                </Row>

                {(!loading && !error) &&
                    <Row>
                        <Col className="text-right px-5 pt-3">
                            <Link to={"/planets"}>+ See all</Link>
                        </Col>
                    </Row>
                }

            </Container>
        </section>
    );
};

PlanetsBlockList.propTypes = {
    listData: PropTypes.func,
};

export default PlanetsBlockList;
