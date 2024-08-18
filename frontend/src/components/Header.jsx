import { FaArrowRight } from "react-icons/fa6";
import { atom, useAtom } from 'jotai'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { searchValue } from '../atoms';

const Header = () => {
    const queryClient = useQueryClient();
    const [search, setSearch] = useAtom(searchValue);

    const handleSubmitRequest = (event) => {
        event.preventDefault();
        queryClient.invalidateQueries(['gridData']);
    };

    return (
        <>
            <form onSubmit={ handleSubmitRequest }>
                <header className="bg-[#dadbf0] p-12 flex flex-col items-center gap-10">
                    <h1 className="text-5xl">How can we help?</h1>
                    <label className="input input-bordered flex items-center gap-2 max-w-lg w-1/2 rounded border-black">
                        <input
                            type="text" className="grow" placeholder="Search"
                            value={ search }
                            onChange={ (e) => setSearch(e.target.value) }
                        />
                        <button type="submit" className="hover:scale-110">
                            <span className=""><FaArrowRight /></span>
                        </button>
                    </label>
                </header>
            </form>
        </>
    );
}

export default Header;