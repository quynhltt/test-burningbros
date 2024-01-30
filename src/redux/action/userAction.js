import { SEARCH_PRODUCT } from "../constant/userConstant"

export const searchProductAction = (values) => {
    return {
        type: SEARCH_PRODUCT,
        payload: values,
    }
}