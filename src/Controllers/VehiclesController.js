import React, {useState, useEffect} from 'react';
import VehicleDetailView            from "../Views/Vehicles/VehicleDetailView";
import VehicleListView              from "../Views/Vehicles/VehicleListView";
import VehiclesService              from "../Services/VehiclesService";

const VehiclesController = props => {
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState(null);
    const service = VehiclesService({loadingControl: true});
    const {match, history} = props;

    const listData = async () => {
        try {
            const data =  await service.list(search);
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

        if(match.params.id)
            getData();
        else
            listData();

    }, [match.params.id]);

    if(match.params.id) {
        return <VehicleDetailView history={history} apiData={apiData} getData={getData} loading={service.api.loading} />

    } else {
        return <VehicleListView history={history} setSearch={setSearch} apiData={apiData} listData={listData} loading={service.api.loading} />
    }
};

export default VehiclesController;
