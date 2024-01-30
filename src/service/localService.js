export const USER_LOGIN = "USER_LOGIN";

export const localUserServ = {
    get: () => {
        let jsonData = localStorage.getItem(USER_LOGIN); // getItem(<key name>,<value>): read data from local storage
        return JSON.parse(jsonData); // JSON.parse(): converts JSON string into JS object
    },
    set: (userInfo) => { 
        let jsonData = JSON.stringify(userInfo); // JSON.stringify(): converts object into a JSON string
        localStorage.setItem(USER_LOGIN, jsonData) // setItem(<key name>,<value>): save data to local storage
    },
    remove: () => {
        localStorage.removeItem(USER_LOGIN); //remove data from local storage
    },
}