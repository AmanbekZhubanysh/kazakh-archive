import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardDetail() {
    const { id } = useParams();
    const [ card, setCard ] = useState(null);

    useEffect(() => {
        fetch("/data/cards.json")
            .then(res => res.json())
            .then(data => {
                const found = data.find(item => item.id === parseInt(id));
                setCard(found);
            });
    }, [id]);

    if (!card) return <h2>Loading ot Document not found...</h2>;

    return (
        <div>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
        </div>
    );
}