import React from 'react';
import useApi from "../Hooks/Api";
import type {ApiConfig} from "../Hooks/Api";
import type FilmsModel from "../Models/FilmsModel";
import moment from "moment";
import type PeopleModel from "../Models/PeopleModel";

type PeopleServiceApi = ApiConfig;

const PeopleService = (config: PeopleServiceApi) => {
    const api = useApi(config);

    const list = async (search): PeopleModel[] => {

        let searchParam = "";

        if(search) searchParam = `?search=${search}`;

        try {
            const data = await api.get(`people/${searchParam}`);

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

        return {
            ...data,
            id: urlPieces[urlPieces.length - 2],
            release_date_formatted: moment(data.release_date).format("DD/MM/YYYY"),
            created_formatted: moment(data.created).format("DD/MM/YYYY HH:mm"),
            edited_formatted: moment(data.edited).format("DD/MM/YYYY HH:mm"),
        }
    }

    return {list, getOne, api};
};

export default PeopleService;
