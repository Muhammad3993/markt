import {apiClient} from "../common/apiClient.js";

export const initApi = {
    async getInit(){
        return await apiClient.fetch('get', 'init', null)
    }
}