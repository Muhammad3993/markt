import {apiClient} from "../common/apiClient.js";

export const indexApi = {
    async getIndex(){
        return await apiClient.fetch('get', 'client/index', null)
    }
}