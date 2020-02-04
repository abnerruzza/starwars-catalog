import React, {
    useEffect,
    useState
}                      from 'react';
import PropTypes       from 'prop-types';
import type FilmsModel from "../../../Models/FilmsModel";
import SplideContainer from "../../Generics/SplideContainer";
import {
    Col,
    Container,
    Row
}                      from "reactstrap";
import {Link}          from "react-router-dom";
import LoadingSvg      from "../../Generics/LoadingSvg";
import ListCard        from "../../Generics/ListCard";

const FilmsBlockList = props => {
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
                <h2 className="section-title text-center mb-2 h1">Films</h2>
                <p className="text-center text-muted h5">StarWars films</p>

                <Row >
                    <Col className="px-5 pt-5 text-center">
                        {loading
                            ? <LoadingSvg />
                            :
                            <SplideContainer
                                className="films-list"
                                options={{rewind: true, type: 'loop', perPage: 2, pagination: false, gap: 20, breakpoints: {1024: {perPage: 1}} } }
                                slides={data.map((item: FilmsModel, index) => {

                                    const detailUrl = `/films/${item.id}`;

                                    return (
                                        <ListCard
                                            key={index}
                                            onClick={() => props.history.push(detailUrl)}
                                            url={detailUrl}
                                            borderColor="blue-border"
                                            iconSrc="/img/icons/photographic-film.png"
                                            title={item.title}
                                            subtitle={"Episode " + item.episode_id}
                                            resume={item.opening_crawl}
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
                            <Link to={"/films"}>+ See all</Link>
                        </Col>
                    </Row>
                }

            </Container>
        </section>
    );
};

FilmsBlockList.propTypes = {
    listData: PropTypes.func,
};

export default FilmsBlockList;
