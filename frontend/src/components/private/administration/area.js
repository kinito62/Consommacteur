import { useEffect } from "react";

const AreaContainer = ({
    area: { id, name, updatedAt, createdAt, houseId, parentAreaId },
	deleteArea,
    
}) => {

    useEffect(()=>{
        
    },[])

    return (
    <div className="card">
        <div className="titleCard"><a>{name}</a></div>
        <button onClick={() => deleteArea(id)} className="buttonList suppr">Supprimer</button>
    </div>
    
)};

export default AreaContainer;