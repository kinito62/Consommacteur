import Axios from "./caller.service"

let getHouses = ()=>{
    return Axios.get('/houses');
}

let createHouse = (credentials) => {
    return Axios.post(`/houses`, credentials);
}

let deleteHouse = id => {
    console.log(id)
    return Axios.delete(`/houses/${id}`)
}

export const houseService = {
    getHouses,
    createHouse,
    deleteHouse
}