import Axios from "./caller.service"

let getHouses = ()=>{
    return Axios.get('/houses')
}

export const houseService = {
    getHouses
}