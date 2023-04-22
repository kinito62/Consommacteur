import axios from 'axios'
import { accountService } from './account.service'

// Paramétrage de base d'axios
const Axios = axios.create({
    baseURL: 'http://localhost:3000'
})


Axios.interceptors.request.use(request => {

    if(accountService.isLogged()){
        request.headers.Authorization=accountService.getToken();
    }
    return request;
})


export default Axios;