import { localUserServ } from "../../service/localService"
import { userServ } from "../../service/userService"
import { SET_USER_LOGIN } from "../constant/userConstant"

export const setLoginAction = (values) => {
    //values đến từ res của api
    return {
        type: SET_USER_LOGIN,
        payload: values,
      }
}

export const setLoginActionService = (values, onSuccess) => {
    //values đến từ form của antd
    return (dispatch) => {
        userServ.login(values)
                .then((res) => {
                    console.log(res);
                    dispatch({
                        type: SET_USER_LOGIN,
                        payload: res.data.content,
                    });
                    localUserServ.set(res.data.content);
                    onSuccess();
                })
                .catch((err) => {
                    console.log(err);
                })
    }
}