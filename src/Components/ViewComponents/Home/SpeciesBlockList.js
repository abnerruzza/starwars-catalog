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
import ListCard          from "../../Generics/ListCard";
import type SpeciesModel from "../../../Models/SpeciesModel";

const SpeciesBlockList = props => {
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
                <h2 className="section-title text-center mb-2 h1">Species</h2>
                <p className="text-center text-muted h5">StarWars species</p>

                <Row >
                    <Col className="px-5 pt-5 text-center">
                        {loading
                            ? <LoadingSvg />
                            :
                            <SplideContainer
                                className="films-list"
                                options={{rewind: true, type: 'loop', perPage: 3, pagination: false, gap: 20, breakpoints: {640: {perPage: 1}, 768: {perPage: 2}, 1024: {perPage: 3}} } }
                                slides={data.map((item: SpeciesModel, index) => {

                                    const detailUrl = `/species/${item.id}`;

                                    return (
                                        <ListCard
                                            key={index}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="green-border"
                                            iconSrc="/img/icons/yoda.png"
                                            title={item.name}
                                            subtitle={item.designation}
                                            numbers={[
                                                {title: "Average Height", value: item.average_height},
                                                {title: "Average Lifespan", value: item.average_lifespan},
                                            ]}
                                            relations={[
                                                {title: "People", icon: "/img/icons/actor.png", items: item.people},
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
                            <Link to={"/species"}>+ See all</Link>
                        </Col>
                    </Row>
                }

            </Container>
        </section>
    );
};

SpeciesBlockList.propTypes = {
    listData: PropTypes.func,
};

export default SpeciesBlockList;
