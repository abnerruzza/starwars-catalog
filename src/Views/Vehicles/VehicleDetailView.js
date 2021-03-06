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

const VehicleDetailView = props => {

    const {apiData} = props;

    return (
        <div className="main-content">
            <PageTitleSection
                title={props.loading ? <LoadingSvg/> : apiData?.name}
                subtitle={""}
            />

            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Model", desc: apiData?.model },
                                {title: "Vehicle Class", desc: apiData?.vehicle_class  },
                                {title: "Manufacturer ", desc: apiData?.manufacturer   },
                                {title: "Length", desc: <>{apiData?.length} meters</> },
                                {title: "Consumables", desc: apiData?.consumables  },
                            ]}
                        />

                    </Col>
                    <Col xs={12} md={6}>

                        <DetailList
                            loading={props.loading}
                            data={[
                                {title: "Cost in Galactic Credits", desc: apiData?.cost_in_credits },
                                {title: "Crew", desc: apiData?.crew },
                                {title: "Passengers", desc: apiData?.passengers },
                                {title: "Max Atmosphering Speed", desc: apiData?.max_atmosphering_speed  },
                                {title: "Cargo Capacity", desc: <>{apiData?.cargo_capacity} Kg</>  },
                            ]}
                        />

                    </Col>
                </Row>

                <RelatedPeople
                    history={props.history}
                    itemImgSrc="/img/icons/pilot.png"
                    title="Related Pilots"
                    people={apiData?.pilots}
                    personType="pilot"
                />

                <RelatedFilms
                    films={apiData?.films}
                    history={props.history}
                />

            </Container>

        </div>
    );
};

VehicleDetailView.propTypes = {
    apiData: PropTypes.object,
    history: PropTypes.func,
};

export default VehicleDetailView;
