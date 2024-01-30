import axios from "axios"
import { BASE_URL, configHeaders, https } from "./config"

export const movieServ = {
    getMovieList: () => {
        return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04"); //method gì thì chấm tới method đó
    },
    getMovieByTheater: () => {
        return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
    },
    getDetailMovie: (id) => {
        // return axios({
        //     url: `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        //     method: 'GET',
        //     headers: configHeaders(),
        // })
        return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    },
}