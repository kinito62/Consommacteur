import { useEffect, useState } from "react";
import { sensorService } from "../../services/sensor.service";

const AreaPlace = ({
    areas
})=> {
    const [sensors, setSensors] = useState([]);
    useEffect(()=>{
        console.log(areas)
    },[])

    function consultSensors(id){
        sensorService.getSensors(id)
			.then(res => {
				setSensors(res.data.sensors);
			})
			.catch(error => {
				console.log(error);
			});
    }

    return(
        <div className='listAreas'>
            {areas.map((area, i) => {
                return (
                <div>
                <div key={i} className="container">
				<h1 className="titleForm">{area.name}</h1>
                <button
									onClick={() => consultSensors(area.id)}
									className="buttonList"
								>
									Voir la répartition
								</button>
                
                </div>

                {
                    sensors.map((sensor)=>{
                        return(
                        <div className="card area">
                            <div className="titleCard">
                                <a>{`sensor : ${sensor.name}`}</a>
                            </div>
                        </div>
                )
            })
            }

                </div>
                )
            })
               
            }
            
            </div>
    )

}
export default AreaPlace;