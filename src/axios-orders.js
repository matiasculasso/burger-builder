import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f3052.firebaseio.com/'
});

export default instance;