const Card = ({ title, data, id }) => {
    return (
        <>
            <p> { id } - { title } - { data }</p>
        </>
    );
}

export default Card;