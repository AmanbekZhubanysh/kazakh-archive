
function Card({title="Empty", source="Empty"}) {

    return(
        <div className="card">
            <h2 className="card-title"> {title} </h2>
            <p className="card-source"> {source} </p>
        </div>
    );
};



export default Card