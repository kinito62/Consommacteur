import React, { useEffect, useState } from 'react';
import ContainerSmall from '../../ContainerSmall';
import { houseService } from '../../../services/house.service';

export default function ListHouse() {
	const [houses, setHouses] = useState({});

	useEffect(() => {
        houseService.getHouses()
        .then(houses =>{
            console.log(houses)
        })
    }, []);

	return( <ContainerSmall title="Liste Maisons">
        
        </ContainerSmall>
    );
}
