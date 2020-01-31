import React, {useState, useEffect} from 'react';
import PeopleService                from "../Services/PeopleService";
import PeopleDetailView from "../Views/People/PeopleDetailView";
import PeopleListView from "../Views/People/PeopleListView";

const PeopleController = props => {
    const [peopleData, setPeopleData] = useState(null);
    const [search, setSearch] = useState(null);
    const peopleService = PeopleService({loadingControl: true});
    const {match, history} = props;

    const listPeople = async () => {
        try {
            const data =  await peopleService.list(search);
            setPeopleData(data)
        } catch (e) { throw e; }
    };

    const getPeople = async () => {
        try {
            const data = await peopleService.getOne(match.params.id);
            setPeopleData(data);
        } catch (e) { throw e; }
    };

    useEffect(() => {

        if(match.params.id)
            getPeople();
        else
            listPeople();

    }, [match.params.id]);

    if(match.params.id) {
        return (
            <PeopleDetailView history={history} peopleData={peopleData} getPeople={getPeople} loading={peopleService.api.loading} />
        )
    } else {
        return <PeopleListView history={history} setSearch={setSearch} peopleData={peopleData} listPeople={listPeople} loading={peopleService.api.loading} />
    }
};

export default PeopleController;
