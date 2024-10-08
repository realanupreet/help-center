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
        let response;
        if (search == '' || search == null || search == undefined) {
            response = await axios.get('http://localhost:3000/cards');
        } else {
            response = await axios.post('http://localhost:3000/search', data);
        }
        return response.data;
    }

    const { isPending, error, data: gridData } = useQuery({
        queryKey: ['gridData'],
        queryFn: fetchGridData,
    });

    return (
        <>
            <div className="mx-[10%] mt-28">
                <div className="container mx-auto">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
                        { isPending && <li>Loading...</li> }
                        { error && <li>Error: { error.message }</li> }
                        {
                            gridData &&
                            gridData.toReversed().map(({ title, description, id }) => (
                                <Card key={ id } title={ title } data={ description } id={ id } />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;