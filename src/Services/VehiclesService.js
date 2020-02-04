import React              from 'react';
import type {ApiConfig}   from "../Hooks/Api";
import useApi             from "../Hooks/Api";
import type VehiclesModel from "../Models/VehiclesModel";

type VehiclesServiceApi = ApiConfig;

const VehiclesService = (config: VehiclesServiceApi) => {
    const api = useApi(config);

    const list = async (search, page): VehiclesModel[] => {

        let apiParams = new URLSearchParams({search: (search || ""), page: (page || 1)}).toString();

        try {
            const data = await api.get(`vehicles/?${apiParams}`);

            return {
                ...data,
                results: data.results.map((item: VehiclesModel) => {
                    return mutate(item);
                })
            }

        } catch (e) {
            throw {error: true, message: "Ops. Planets list dont working :("};
        }
    };

    const getOne = async (id): VehiclesModel => {
        try {
            return mutate(await api.get(`vehicles/${id}`));
        } catch (e) {
            throw {error: true, message: "Ops."};
        }
    }

    const mutate = (data: VehiclesModel) => {

        const urlPieces = data.url.split("/");

        return {
            ...data,
            id: urlPieces[urlPieces.length - 2],
        }
    }

    return {list, getOne, api, mutate};
};

export default VehiclesService;
