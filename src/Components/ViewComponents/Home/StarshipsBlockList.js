import React, {
    useEffect,
    useState
}                          from 'react';
import PropTypes           from 'prop-types';
import SplideContainer     from "../../Generics/SplideContainer";
import {
    Col,
    Container,
    Row
}                          from "reactstrap";
import {Link}              from "react-router-dom";
import LoadingSvg          from "../../Generics/LoadingSvg";
import ListCard            from "../../Generics/ListCard";
import type StarshipsModel from "../../../Models/StarshipsModel";

const StarshipsBlockList = props => {
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
                <h2 className="section-title text-center mb-2 h1">Starships</h2>
                <p className="text-center text-muted h5">StarWars starships</p>

                <Row >
                    <Col className="px-5 pt-5 text-center">
                        {loading
                            ? <LoadingSvg />
                            :
                            <SplideContainer
                                className="films-list"
                                options={{rewind: true, type: 'loop', perPage: 2, pagination: false, gap: 20, breakpoints: {1024: {perPage: 1}} } }
                                slides={data.map((item: StarshipsModel, index) => {

                                    const detailUrl = `/starships/${item.id}`;

                                    return (
                                        <ListCard
                                            key={index}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="purple-border"
                                            iconSrc="/img/icons/spaceship.png"
                                            title={item.name}
                                            subtitle={"starship"}
                                            numbers={[
                                                {title: "Cost in Credits", value: item.cost_in_credits},
                                                {title: "Length", value: item.length},
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
                            <Link to={"/starships"}>+ See all</Link>
                        </Col>
                    </Row>
                }

            </Container>
        </section>
    );
};

StarshipsBlockList.propTypes = {
    listData: PropTypes.func,
};

export default StarshipsBlockList;
