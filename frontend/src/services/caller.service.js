import axios from 'axios'
import { accountService } from './account.service'

// Paramétrage de base d'axios
const Axios = axios.create({
    baseURL: 'http://localhost:3000'
})

export default Axios;