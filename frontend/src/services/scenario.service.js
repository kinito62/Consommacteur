import Axios from "./caller.service"

let getScenarios = ()=>{
    return Axios.get('/scenarios');
}

let createScenario = (credentials) => {
    return Axios.post(`/scenarios`, credentials);
}

let deleteScenario = id => {
    console.log(id)
    return Axios.delete(`/scenarios/${id}`)
}

export const ScenarioService = {
    getScenarios,
    createScenario,
    deleteScenario
}