import React               from 'react';
import type {ApiConfig}    from "../Hooks/Api";
import useApi              from "../Hooks/Api";
import type StarshipsModel from "../Models/StarshipsModel";

type StarshipsServiceApi = ApiConfig;

const StarshipsService = (config: StarshipsServiceApi) => {
    const api = useApi(config);

    const list = async (search, page): StarshipsModel[] => {

        let apiParams = new URLSearchParams({search: (search || ""), page: (page || 1)}).toString();

        try {
            const data = await api.get(`starships/?${apiParams}`);

            return {
                ...data,
                results: data.results.map((item: StarshipsModel) => {
                    return mutate(item);
                })
            }

        } catch (e) {
            throw {error: true, message: "Ops. Starships list dont working :("};
        }
    };

    const getOne = async (id): StarshipsModel => {
        try {
            return mutate(await api.get(`starships/${id}`));
        } catch (e) {
            throw {error: true, message: "Ops."};
        }
    }

    const mutate = (data: StarshipsModel) => {

        const urlPieces = data.url.split("/");

        return {
            ...data,
            id: urlPieces[urlPieces.length - 2],
        }
    }

    return {list, getOne, api, mutate};
};

export default StarshipsService;
