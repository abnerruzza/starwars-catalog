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
            const data = await api.get(``);

            return data.map((item: FilmsModel) => {

                return {
                    ...item,
                    created_formatted: moment(item.created).format(),
                    edited_formatted: moment(item.edited).format(),
                }
            })

        } catch (e) {
            throw {error: true, message: "Ops. Films list dont working :("};
        }
    }

    return {list};
};

export default PeopleService;
