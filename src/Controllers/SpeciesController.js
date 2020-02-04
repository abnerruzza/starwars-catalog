import React, {
    useEffect,
    useState
}                       from 'react';
import {usePaginate}    from "../Hooks/Helpers";
import SpeciesService   from "../Services/SpeciesService";
import SpecieDetailView from "../Views/Species/SpecieDetailView";
import SpecieListView   from "../Views/Species/SpecieListView";

const SpeciesController = props => {
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState(null);
    const service = SpeciesService({loadingControl: true});
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
            <SpecieDetailView
                history={history}
                apiData={apiData}
                getData={getData}
                loading={service.api.loading}
            />
        )

    } else {
        return (
            <SpecieListView
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

export default SpeciesController;
