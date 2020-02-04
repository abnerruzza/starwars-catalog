import React, {
    useEffect,
    useState
}                     from 'react';
import {usePaginate}  from "../Hooks/Helpers";
import FilmDetailView from "../Views/Films/FilmDetailView";
import FilmListView   from "../Views/Films/FilmListView";
import FilmsService   from "../Services/FilmsService";

const FilmsController = props => {
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState(null);
    const service = FilmsService({loadingControl: true});
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
            <FilmDetailView
                history={history}
                apiData={apiData}
                getData={getData}
                loading={service.api.loading}
            />
        )

    } else {
        return (
            <FilmListView
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

export default FilmsController;
