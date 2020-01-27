import React from 'react';
import useApi from "../Hooks/Api";
import type {ApiConfig} from "../Hooks/Api";
import type FilmsModel from "../Models/FilmsModel";
import moment from "moment";

type FilmsServiceApi = ApiConfig;

const FilmsService = (config: FilmsServiceApi) => {
    const api = useApi(config);

    const list = async (): FilmsModel[] => {

        try {
            const data = await api.get(`films/`);

            return {
                ...data,
                results: data.results.map((item: FilmsModel) => {
                    return {
                        ...item,
                        created_formatted: moment(item.created).format(),
                        edited_formatted: moment(item.edited).format(),
                    }
                })
            }

        } catch (e) {
            throw {error: true, message: "Ops. Films list dont working :("};
        }
    }

    return {list};
};

export default FilmsService;
