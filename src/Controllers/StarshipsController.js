import React, {
    useEffect,
    useState
}                         from 'react';
import {usePaginate}      from "../Hooks/Helpers";
import StarshipsService   from "../Services/StarshipsService";
import StarshipDetailView from "../Views/Starships/SpecieDetailView";
import StarshipListView   from "../Views/Starships/StarshipListView";

const StarshipsController = props => {
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState(null);
    const service = StarshipsService({loadingControl: true});
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
            <StarshipDetailView
                history={history}
                apiData={apiData}
                getData={getData}
                loading={service.api.loading}
            />
        )

    } else {
        return (
            <StarshipListView
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

export default StarshipsController;
