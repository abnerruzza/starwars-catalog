import React from 'react';
import useApi from "../Hooks/Api";
import type {ApiConfig} from "../Hooks/Api";
import type FilmsModel from "../Models/FilmsModel";
import moment from "moment";

type FilmsServiceApi = ApiConfig;

const FilmsService = (config: FilmsServiceApi) => {
    const api = useApi(config);

    const list = async (search): FilmsModel[] => {

        let searchParam = "";

        if(search) searchParam = `?search=${search}`;

        try {
            const data = await api.get(`films/${searchParam}`);

            return {
                ...data,
                results: data.results.map((item: FilmsModel) => {
                    return mutate(item);
                })
            }

        } catch (e) {
            throw {error: true, message: "Ops. Films list dont working :("};
        }
    };

    const getOne = async (id): FilmsModel => {
        try {
            return mutate(await api.get(`films/${id}`));
        } catch (e) {
            throw {error: true, message: "Ops."};
        }
    }

    const mutate = (data: FilmsModel) => {

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

export default FilmsService;
