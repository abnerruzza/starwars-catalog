import React, {
    useEffect,
    useState
}                        from 'react';
import VehicleDetailView from "../Views/Vehicles/VehicleDetailView";
import VehicleListView   from "../Views/Vehicles/VehicleListView";
import VehiclesService   from "../Services/VehiclesService";
import {usePaginate}     from "../Hooks/Helpers";

const VehiclesController = props => {
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState(null);
    const service = VehiclesService({loadingControl: true});
    const {match, history} = props;

    const [page, setPage] = usePaginate((page) => {
        scrollToElement("body");
        setApiData([]);
        listData(page);
    });

    const listData = async (page) => {
        try {
            const data =  await service.list(search, page);
            setApiData(data)
        } catch (e) { throw e; }
    };

    const getData = async () => {
        try {
            const data = await service.getOne(match.params.id);
            setApiData(data);
        } catch (e) { throw e; }
    };

    useEffect(() => {

        if(match.params.id) {
            getData();
        } else {
            setPage(1);
            listData();
        }

    }, [match.params.id]);


    if(match.params.id) {
        return (
            <VehicleDetailView
                history={history}
                apiData={apiData}
                getData={getData}
                loading={service.api.loading}
            />
        )

    } else {
        return (
            <VehicleListView
                history={history}
                setSearch={setSearch}
                setPage={setPage}
                page={page}
                apiData={apiData}
                listData={listData}
                loading={service.api.loading}
            />
        )
    }
};

export default VehiclesController;
