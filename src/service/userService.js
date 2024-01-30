import { https } from "./config"

export const userServ = {
    getAllProduct: () => {
        return https.get(``)
    },
    searchProduct: (value) => {
        return https.post(`/search/?q=${value}`)
    }
}
