import React, {
    useEffect,
    useState
}                       from 'react';
import PeopleService    from "../Services/PeopleService";
import PeopleDetailView from "../Views/People/PeopleDetailView";
import PeopleListView   from "../Views/People/PeopleListView";
import {usePaginate}    from "../Hooks/Helpers";

const PeopleController = props => {
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState(null);
    const service = PeopleService({loadingControl: true});
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

        if(match.params.id)
            getData();
        else
            listData();

    }, [match.params.id]);

    if(match.params.id) {
        return (
            <PeopleDetailView
                history={history}
                apiData={apiData}
                getData={getData}
                loading={service.api.loading}
            />
        )
    } else {
        return (
            <PeopleListView
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

export default PeopleController;
