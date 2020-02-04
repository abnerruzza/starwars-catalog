import React            from 'react';
import type {ApiConfig} from "../Hooks/Api";
import useApi           from "../Hooks/Api";
import moment           from "moment";
import type PeopleModel from "../Models/PeopleModel";

type PeopleServiceApi = ApiConfig;

const PeopleService = (config: PeopleServiceApi) => {
    const api = useApi(config);

    const list = async (search, page): PeopleModel[] => {

        let apiParams = new URLSearchParams({search: (search || ""), page: (page || 1)}).toString();

        try {
            const data = await api.get(`people/?${apiParams}`);

            return {
                ...data,
                results: data.results.map((item: PeopleModel) => {
                    return mutate(item);
                })
            }

        } catch (e) {
            throw {error: true, message: "Ops. People list dont working :("};
        }
    }

    const getOne = async (id): PeopleModel => {
        try {
            return mutate(await api.get(`people/${id}`));
        } catch (e) {
            throw {error: true, message: "Ops."};
        }
    }

    const mutate = (data: PeopleModel) => {

        const urlPieces = data.url.split("/");

        console.log({data, id: urlPieces[urlPieces.length - 2]});

        return {
            ...data,
            id: urlPieces[urlPieces.length - 2],
            release_date_formatted: moment(data.release_date).format("DD/MM/YYYY"),
            created_formatted: moment(data.created).format("DD/MM/YYYY HH:mm"),
            edited_formatted: moment(data.edited).format("DD/MM/YYYY HH:mm"),
        }
    }

    return {list, getOne, api, mutate};
};

export default PeopleService;
