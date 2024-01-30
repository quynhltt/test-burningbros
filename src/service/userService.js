import axios from "axios"
import { configHeaders, BASE_URL, https } from "./config"

export const userServ = {
    // login: (loginData) => {
    //     return axios({
    //         url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
    //         method: 'POST',
    //         data: loginData,
    //         headers: configHeaders(),
    //     })
    // },
    getAllProduct: () => {
        return https.get(``)
    }
}

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);