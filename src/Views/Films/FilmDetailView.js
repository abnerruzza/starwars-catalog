import React            from 'react';
import PropTypes        from 'prop-types';
import {List}           from 'react-content-loader'
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import LoadingSvg       from "../../Components/Generics/LoadingSvg";
import {
    Col,
    Container,
    Row
}                       from "reactstrap";
import DetailList       from "../../Components/Generics/DetailList";
import RelatedVehicles  from "../../Components/ViewComponents/RelatedContent/RelatedVehicles";
import RelatedPlanets   from "../../Components/ViewComponents/RelatedContent/RelatedPlanets";
import RelatedStarships from "../../Components/ViewComponents/RelatedContent/RelatedStarships";
import RelatedSpecies   from "../../Components/ViewComponents/RelatedContent/RelatedSpecies";

const FilmDetailView = props => {

    const {apiData} = props;

    return (
        <div className="main-content">
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : apiData?.title}
                subtitle={props.loading ? '' : `Episode ${apiData?.episode_id}`}
                imgSrc="/img/icons/photographic-film.png"
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={5} className="mb-3 mb-md-0">
                        <aside>

                            <DetailList
                                loading={props.loading}
                                data={[
                                    {title: "Director", desc: apiData?.director},
                                    {title: "Producer", desc: apiData?.producer},
                                    {title: "Release Date", desc: apiData?.release_date_formatted},
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
                                    {apiData?.opening_crawl}
                                </>
                            }
                        </article>


                    </Col>
                </Row>

                <RelatedPlanets
                    history={props.history}
                    planets={apiData?.planets}
                />

                <RelatedVehicles
                    history={props.history}
                    vehicles={apiData?.vehicles}
                />

                <RelatedStarships
                    history={props.history}
                    starships={apiData?.starships}
                />

                <RelatedSpecies
                    history={props.history}
                    species={apiData?.species}
                />

            </Container>

        </div>
    );
};

FilmDetailView.propTypes = {
    apiData: PropTypes.object,
    history: PropTypes.func,
    getData: PropTypes.func,
    loading: PropTypes.bool,
};

export default FilmDetailView;
