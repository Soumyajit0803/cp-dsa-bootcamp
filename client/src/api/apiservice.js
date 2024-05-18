import axios from "axios";

export const fetchData = async (endpoint) => {
    try{
    const response = await axios.get(`${endpoint}`);
    return response.data;
    }catch(err){
        throw err;
    }
};
