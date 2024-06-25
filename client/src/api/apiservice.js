import axios from "axios";

export const fetchData = async (endpoint) => {
    try{
    // throw RangeError("Its nothing")
    const response = await axios.get(`${endpoint}`);
    return response.data;
    }catch(err){
        console.log(err)
        throw err;
    }
};
