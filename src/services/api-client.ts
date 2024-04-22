import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8977b98cbd1e4229b4b0eee27b309381'
    }
})