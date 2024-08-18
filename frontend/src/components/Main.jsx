import Card from "./Card";
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import SubmitRequest from "./SubmitRequest";
import { useAtom } from "jotai";
import { searchValue } from "../atoms";

const Main = () => {
    const [search] = useAtom(searchValue);

    const queryClient = useQueryClient();

    const fetchGridData = async () => {
        const data = { search: search };
        console.log(data);
        const response = await axios.post('http://localhost:3000/search', data); //TODO: make url a env variable
        return response.data;
    }

    const { isPending, error, data: gridData } = useQuery({
        queryKey: ['gridData'],
        queryFn: fetchGridData,
    });

    return (
        <>
            <p>My Grid Data</p>
            <SubmitRequest />
            { isPending && <li>Loading...</li> }
            { error && <li>Error: { error.message }</li> }
            {
                gridData &&
                gridData.toReversed().map(({ title, data, id }) => (
                    <Card key={ id } title={ title } data={ data } id={ id } />
                ))
            }
        </>
    );
}

export default Main;