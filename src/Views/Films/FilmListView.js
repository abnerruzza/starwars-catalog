import React             from 'react';
import PropTypes         from 'prop-types';
import {
    Col,
    Container,
    Row
}                        from "reactstrap";
import LoadingSvg        from "../../Components/Generics/LoadingSvg";
import PageTitleSection  from "../../Components/Generics/PageTitleSection";
import PageSearchSection from "../../Components/Generics/PageSearchSection";
import type FilmsModel   from "../../Models/FilmsModel";
import ListCard          from "../../Components/Generics/ListCard";
import Pagination        from "../../Components/Generics/Pagination";

const FilmListView = props => {
    return (
        <div className="main-content">

            <PageTitleSection
                title="Films"
                subtitle="StarWars films catalog"
            />

            <PageSearchSection
                listFunction={props.listData}
                setSearchValue={props.setSearch}
                fieldPlaceholder="Search for Film title"
            />

            <section className="mt-5 mx-3">

                {!!props.loading && <Container className="text-center"><LoadingSvg /></Container>}

                <Container fluid>
                    <Row >
                        {props.apiData?.results?.map((item: FilmsModel, index) => {

                            const detailUrl = `/films/${item.id}`;

                            return (

                                <Col key={index} sm={12} md={6} lg={4} className="mb-5">

                                    <ListCard
                                        onClick={() => props.history.push(detailUrl)}
                                        url={detailUrl}
                                        borderColor="blue-border"
                                        iconSrc="/img/icons/photographic-film.png"
                                        title={item.title}
                                        subtitle={"Episode " + item.episode_id}
                                        resume={item.opening_crawl}
                                    />

                                </Col>

                            )
                        })}
                    </Row>

                    <Pagination
                        hasPrevious={!!props.apiData?.previous}
                        hasNext={!!props.apiData?.next}
                        page={props.page}
                        setPage={props.setPage}
                    />
                </Container>
            </section>

        </div>
    );
};

FilmListView.propTypes = {
    apiData: PropTypes.array,
    listData: PropTypes.func,
    setSearch: PropTypes.func,
    history: PropTypes.object,
    page: PropTypes.number,
    setPage: PropTypes.func,
};

export default FilmListView;
