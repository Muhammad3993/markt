import {config} from "../config.js";
import axios from "axios";

export const apiClient = {
    async fetch(method, path, body){
        const axios_parameters = {
            method: method,
            url: `${config.baseUrl}${path}`,
            headers: {
                "Content-Type": "application/json",
                "deviceId": "171843"
            },
        };



        if(body !== null && body !== {})
        {
            axios_parameters.data = body;
        }



        try{
            const response = await axios(axios_parameters);
            if (response.status === 200)
            {
                return response.data;
            }

        }catch (e) {
            console.log(e)
        }
    }
}