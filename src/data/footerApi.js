import {apiClient} from "../common/apiClient.js";

export const footerApi = {
    async getFooter(){
        return await apiClient.fetch('get', 'client/footer', null)
    },
}