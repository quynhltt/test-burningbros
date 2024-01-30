import { SEARCH_PRODUCT } from "../constant/userConstant";

const initialState = {
  searchVal: [],
}

let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_PRODUCT: {
      return { ...state, searchVal: payload }
    }
    default:
      return state;
  }
}

export default userReducer;
