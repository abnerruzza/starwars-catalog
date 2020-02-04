import React, {useState, useEffect} from 'react';
import PropTypes                    from 'prop-types';
import useApi                       from "../../Hooks/Api";
import isNull from 'lodash/isNull';

const AsyncItem = props => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const api = useApi({initialLoading: false, loadingControl: false, apiUrl: props.url});

    const getData = async () => {
        try {
            const res = await api.get();
            setData(props.mutate(res))
        } catch (e) {
            setData({error: true})
        }
    }

    useEffect(() => {
        setTimeout(() => getData(), props.delay || 1)
    }, []);

    useEffect(() => {
        if(!isNull(data)) setLoading(false);
    }, [data]);

    return props.children({data, loading: loading});
};

AsyncItem.defaultProps = {
    mutate: data => data
}

AsyncItem.propTypes = {
    url: PropTypes.string,
    delay: PropTypes.number,
    mutate: PropTypes.func,
};

export default AsyncItem;
