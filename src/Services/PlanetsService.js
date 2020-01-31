import React from 'react';
import useApi from "../Hooks/Api";
import type {ApiConfig} from "../Hooks/Api";
import moment from "moment";
import type PlanetsModel from "../Models/PlanetsModel";

type PlanetsServiceApi = ApiConfig;

const PlanetsService = (config: PlanetsServiceApi) => {
    const api = useApi(config);

    const list = async (search): PlanetsModel[] => {

        let searchParam = "";

        if(search) searchParam = `?search=${search}`;

        try {
            const data = await api.get(`planets/${searchParam}`);

            return {
                ...data,
                results: data.results.map((item: PlanetsModel) => {
                    return mutate(item);
                })
            }

        } catch (e) {
            throw {error: true, message: "Ops. Planets list dont working :("};
        }
    };

    const getOne = async (id): PlanetsModel => {
        try {
            return mutate(await api.get(`planets/${id}`));
        } catch (e) {
            throw {error: true, message: "Ops."};
        }
    }

    const mutate = (data: PlanetsModel) => {

        const urlPieces = data.url.split("/");

        return {
            ...data,
            id: urlPieces[urlPieces.length - 2],
        }
    }

    return {list, getOne, api};
};

export default PlanetsService;
