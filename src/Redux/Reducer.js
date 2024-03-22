import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";

const initialValue = {
  loading: true,
  userList: [],
  userObj: {},
  errormessage: "",
};
export const Reducers = (state = initialValue, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errormessage: action.payload,
      };
    case GET_USER_LIST:
      return {
        loading: false,
        errormessage: "",
        userList: action.payload,
        userObj: {},
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_OBJ:
      return {
        ...state,
        loading: false,
        userObj: action.payload,
      };
    default:
      return state;
  }
};
