import React from 'react';
import useApi from "../Hooks/Api";
import type {ApiConfig} from "../Hooks/Api";
import type FilmsModel from "../Models/FilmsModel";
import moment from "moment";
import type PeopleModel from "../Models/PeopleModel";

type PeopleServiceApi = ApiConfig;

const PeopleService = (config: PeopleServiceApi) => {
    const api = useApi(config);

    const list = async (): PeopleModel[] => {

        try {
            const data = await api.get(`people/`);

            return {
                ...data,
                results: data.results.map((item: PeopleModel) => {
                    return {
                        ...item,
                        created_formatted: moment(item.created).format("DD/MM/YYYY"),
                        edited_formatted: moment(item.edited).format("DD/MM/YYYY"),
                        birth_year_formatted: moment(item.birth_year).format("DD/MM/YYYY"),
                    }
                })
            }

        } catch (e) {
            throw {error: true, message: "Ops. People list dont working :("};
        }
    }

    return {list};
};

export default PeopleService;
