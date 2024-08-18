import SubmitRequest from "./SubmitRequest";

const NavBar = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between px-[5%] bg-black text-white py-2">
                <div className="">
                    <span className="font-bold">
                        Abstract
                    </span>
                    &nbsp;| Help Center
                </div>
                <SubmitRequest />
            </div>
        </>
    );
}

export default NavBar;