import React             from 'react';
import type {ApiConfig}  from "../Hooks/Api";
import useApi            from "../Hooks/Api";
import type SpeciesModel from "../Models/SpeciesModel";

type SpeciesServiceApi = ApiConfig;

const SpeciesService = (config: SpeciesServiceApi) => {
    const api = useApi(config);

    const list = async (search, page): SpeciesModel[] => {

        let apiParams = new URLSearchParams({search: (search || ""), page: (page || 1)}).toString();

        try {
            const data = await api.get(`species/?${apiParams}`);

            return {
                ...data,
                results: data.results.map((item: SpeciesModel) => {
                    return mutate(item);
                })
            }

        } catch (e) {
            throw {error: true, message: "Ops. Species list dont working :("};
        }
    };

    const getOne = async (id): SpeciesModel => {
        try {
            return mutate(await api.get(`species/${id}`));
        } catch (e) {
            throw {error: true, message: "Ops."};
        }
    }

    const mutate = (data: SpeciesModel) => {

        const urlPieces = data.url.split("/");

        return {
            ...data,
            id: urlPieces[urlPieces.length - 2],
        }
    }

    return {list, getOne, api, mutate};
};

export default SpeciesService;
