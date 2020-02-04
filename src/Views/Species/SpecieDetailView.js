import React            from 'react';
import PropTypes        from 'prop-types';
import PageTitleSection from "../../Components/Generics/PageTitleSection";
import LoadingSvg       from "../../Components/Generics/LoadingSvg";
import {
    Col,
    Container,
    Row
}                       from "reactstrap";
import DetailList       from "../../Components/Generics/DetailList";
import RelatedPeople    from "../../Components/ViewComponents/RelatedContent/RelatedPeople";
import RelatedFilms     from "../../Components/ViewComponents/RelatedContent/RelatedFilms";

const SpecieDetailView = props => {

    const {apiData} = props;

    return (
        <div className="main-content">
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : apiData?.name}
                subtitle={""}
                imgSrc="/img/icons/yoda.png"
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Classification", desc: apiData?.classification },
                                {title: "Designation", desc: apiData?.designation },
                                {title: "Average Height", desc: <>{apiData?.average_height} cm</>  },
                                {title: "Average Lifespan ", desc: <>{apiData?.average_lifespan} years</>   },
                            ]}
                        />

                    </Col>
                    <Col xs={12} md={6}>

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Eye Colors", desc: apiData?.eye_colors },
                                {title: "Hair Colors", desc: apiData?.hair_colors },
                                {title: "Skin Colors", desc: apiData?.skin_colors },
                                {title: "Language", desc: apiData?.language },
                            ]}
                        />

                    </Col>
                </Row>

                <RelatedPeople
                    people={apiData?.people}
                    history={props.history}
                    itemImgSrc="/img/icons/actor.png"
                    title="Related People"
                    personType="person"
                />

                <RelatedFilms
                    films={apiData?.films}
                    history={props.history}
                />

            </Container>

        </div>
    );
};

SpecieDetailView.propTypes = {
    apiData: PropTypes.object,
    history: PropTypes.func,
};

export default SpecieDetailView;
