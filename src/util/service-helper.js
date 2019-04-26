import {getUserListURL} from '../util/service-url';
import axios from 'axios';

const getUserList = () => {
    return axios.get(getUserListURL);
}

export {
    getUserList
};