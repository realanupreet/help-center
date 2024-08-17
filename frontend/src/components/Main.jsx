import Card from "./Card";

const Main = () => {

    const gridData = [
        {
            index: 1,
            title: "My First Card",
            data: "This is my first card"
        },
        {
            index: 2,
            title: "My Second Card",
            data: "This is my second card"
        }
    ]

    return (
        <>
            <p>My Grid Data</p>
            {
                gridData.map(({ index, title, data }) => (
                    <Card key={ index } title={ title } data={ data } />
                ))
            }
        </>
    );
}

export default Main;