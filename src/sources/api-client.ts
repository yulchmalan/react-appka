import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '883b88ea35ba46098e77969f7b9de33e'
    }
})