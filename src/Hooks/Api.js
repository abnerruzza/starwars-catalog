import React, {
    useState,
    useRef,
    useMemo,
    useCallback
}                from 'react';
import PropTypes from 'prop-types';
import {Env}     from "../Config/Env";

export type ApiConfig = {
    apiUrl?: string,
    headers?: Object,
    customReturn?: boolean,
    loadingControl?: boolean,
    initialLoading?: boolean,
    debounceTimer?: number
}

const useApi = (config?: ApiConfig) => {

    const debounceTimer = useRef(config?.debounceTimer || 0);
    const debounceRef = useRef(null);

    const [loading, setLoading] = useState(typeof config?.initialLoading !== "undefined" ? config.initialLoading : false);
    const [error, setError] = useState(false);

    if(!config) config = {};
    if(typeof config.loadingControl === "undefined") config.loadingControl = true;
    if(typeof config.headers === "undefined") config.headers = {};

    config.apiUrl = config.apiUrl || Env.api_url;

    const setDebounce = useCallback((timer) => {
        debounceTimer.current = timer;
    })

    const put = useCallback((path, data) => {
        return new Promise((resolve, reject) => {
            _fetch(path, "PUT", data).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }, []);

    const post = useCallback((path, data) => {
        return new Promise((resolve, reject) => {

            if(debounceRef?.current) clearTimeout(debounceRef.current);

            debounceRef.current = setTimeout(() => {
                _fetch(path, "POST", data).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            }, debounceTimer.current)

        })
    }, [debounceRef?.current]);

    const get = useCallback((path) => {
        return new Promise((resolve, reject) => {

            if(debounceRef?.current) clearTimeout(debounceRef.current);

            debounceRef.current = setTimeout(() => {
                _fetch(path, "GET", null).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            }, debounceTimer.current)
        });
    }, [debounceRef?.current]);

    const del = useCallback((path) => {
        return new Promise((resolve, reject) => {
            _fetch(path, "DELETE", null).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        });
    }, []);

    /**
     * Fetch principal
     */
    const _fetch = useCallback( (path, method, data) => {
        return new Promise( (resolve, reject) => {
            setLoading(true);

            const obj = {
                method: method,
                headers: {...config.headers, ...Env.header}
            }

            if( data ) {
                obj.body = JSON.stringify(data);
            }

            fetch(`${config.apiUrl}/${path}`, obj)
                .then((response) => {
                    try {
                        return response.json()
                    } catch (e) {
                        throw e;
                    }
                })
                .then((res) => {
                    if(config.loadingControl) setLoading(false);
                    if(config.customReturn) {
                        resolve(res);
                    } else {
                        resolve(res);
                    }
                }).catch(err => {
                    if(config.loadingControl) setLoading(false);
                    if(Env.debug) console.log(err);
                    reject(err);
                })
        })
    }, [config.loadingControl, loading, config.apiUrl, config.headers, config.customReturn]);

    return { post, get, del, put, loading, error, setLoading, setDebounce };
};

useApi.propTypes = {
    url: PropTypes.string,
    config: PropTypes.shape({
        customReturn: PropTypes.bool,
        apiUrl: PropTypes.string,
        headers: PropTypes.object,
    })
};

export default useApi;