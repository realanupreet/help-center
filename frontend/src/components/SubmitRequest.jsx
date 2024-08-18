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
            <Modal buttonText="Submit Request" buttonStyles="" buttonModalId={ modalId } >
                {/* TODO: Subdivide to smaller components */ }
                <form onSubmit={ handleSubmitRequest }>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Request Title</span>
                        </div>
                        <input
                            type="text" placeholder="Request Title" className="input input-bordered w-full max-w-xs input-primary"
                            value={ title }
                            onChange={ (e) => setTitle(e.target.value) }
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Describe your request</span>
                        </div>
                        <input
                            type="text" placeholder="Describe your request" className="input input-bordered w-full max-w-xs input-primary"
                            value={ description }
                            onChange={ (e) => setDescription(e.target.value) }
                        />
                    </label>
                    <button className="btn mt-3 btn-primary" type="submit" disabled={ isPending }>
                        Submit Request
                        { isPending }
                        { isPending && <span className="loading loading-spinner"></span> }
                    </button>
                    { isError && <div className="text-red-500">Error submitting request: { error.message }</div> }
                </form>
            </Modal >
        </>
    );
}

export default SubmitRequest;