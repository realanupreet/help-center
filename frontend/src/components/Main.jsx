import Card from "./Card";
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import SubmitRequest from "./SubmitRequest";

const Main = () => {

    const queryClient = useQueryClient();

    const fetchGridData = async () => {
        const response = await axios.get('http://localhost:3000/'); //TODO: make it a env variable
        return response.data;
    }

    const { isPending, error, data: gridData } = useQuery({
        queryKey: ['gridData'],
        queryFn: fetchGridData,
    });

    console.log(gridData);

    return (
        <>
            <p>My Grid Data</p>
            <SubmitRequest />
            { isPending && <li>Loading...</li> }
            { error && <li>Error: { error.message }</li> }
            {
                gridData &&
                gridData.map(({ title, data, id }) => (
                    <Card key={ id } title={ title } data={ data } id={ id } />
                ))
            }
        </>
    );
}

export default Main;