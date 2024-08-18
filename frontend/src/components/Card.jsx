const Card = ({ title, data, id }) => {
    return (
        <>
            <div className=" bg-[#f4f6f8] rounded-xl min-h-6 border border-2 break-all">
                <h2 className="px-3 pt-3 text-xl font-extrabold">{ title }</h2>
                <div className="divider my-0"></div>
                <p className="px-3 pb-3">{ data }</p>
            </div>
        </>
    );
}

export default Card;