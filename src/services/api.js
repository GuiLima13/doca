import axios from 'axios';

const api = axios.create({
    baseURL:'https://apidocadoce.herokuapp.com'
});

export default api;