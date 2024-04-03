import {
  LOGINFAILURE,
  LOGINREQ,
  LOGINSUCCESS,
  THREADIDFAIL,
  THREADIDREQ,
  THREADIDSUCCESS,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  loading: false,
  data: [],
  threadData: [],
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGINREQ:
      return { ...state, isLoading: false };

    case LOGINSUCCESS:
      return { ...state, isLoading: false, data: payload };
    case LOGINFAILURE:
      return { ...state, isError: true };
    case THREADIDREQ:
      return { ...state, Loading: true };
    case THREADIDSUCCESS:
      return { ...state, Loading: false, threadData: payload };
    case THREADIDFAIL:
      return { ...state, isError: true };
    default:
      return state;
  }
};
export default reducer;
