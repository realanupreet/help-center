import Modal from "./Modal";
import { useState } from "react";
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const SubmitRequest = () => {
    const queryClient = useQueryClient();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const modalId = "submitRequestModal";

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async (newData) => {
            await axios.post('http://localhost:3000/', newData);
        },
        onSuccess: () => {
            // Invalidate and refetch the grid data after adding new data
            queryClient.invalidateQueries(['gridData']);
            setTitle('');
            setDescription('');
            document.getElementById(modalId).close();
        },
        onError: (error) => {
            console.error('Error adding data:', error);
        },
    });

    const handleSubmitRequest = (event) => {
        event.preventDefault();
        mutate({ title, description });
    };

    return (
        <>
            <Modal buttonText="Submit Request" buttonStyles="m-1 rounded-md bg-[#1a1a1a] p-1 px-3 text-md border border-[#494949]" buttonModalId={ modalId } >
                {/* TODO: Subdivide to smaller components */ }
                <form onSubmit={ handleSubmitRequest }>
                    <label className="form-control w-full max-w-xs text-black">
                        <div className="label">
                            <span className="label-text">Request Title</span>
                        </div>
                        <input
                            type="text" placeholder="Request Title" className="input input-bordered w-full max-w-xs border-[#494949]"
                            value={ title }
                            onChange={ (e) => setTitle(e.target.value) }
                            required
                        />
                    </label>
                    <label className="form-control w-full max-w-xs text-black">
                        <div className="label">
                            <span className="label-text">Describe your request</span>
                        </div>
                        <input
                            type="text" placeholder="Describe your request" className="input input-bordered w-full max-w-xs border-[#494949]"
                            value={ description }
                            onChange={ (e) => setDescription(e.target.value) }
                            required
                        />
                    </label>
                    <button className="mt-6 rounded-md bg-[#1a1a1a] p-3 px-3 text-md border border-[#494949] flex items-center gap-3" type="submit" disabled={ isPending }>
                        Submit Request
                        { isPending && <span className="loading loading-spinner"></span> }
                    </button>
                    { isError && <div className="text-red-500">Error submitting request: { error.message }</div> }
                </form>
            </Modal >
        </>
    );
}

export default SubmitRequest;