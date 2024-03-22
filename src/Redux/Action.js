import axios from "axios"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import { toast } from "react-toastify"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }  
}


export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }  
}

export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }  
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }  
}

export const addUser = () => {
    return {
        type: ADD_USER
    }  
}

export const updateUser = () => {
    return {
        type: UPDATE_USER
    }  
}

export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    }  
}

/** FETCH USER LIST */
export const fetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
            axios.get("http://localhost:8000/user").then(res => {
                const userList = res.data;
                dispatch(getUserList(userList));
            }).catch(err => dispatch(failRequest(err.message)));
        // }, 1000);
    }
}

/** REMOVE USER API */
export const removeUser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
            axios.delete("http://localhost:8000/user/"+code).then(res => {
                dispatch(deleteUser());
            }).catch(err => dispatch(failRequest(err.message)));
        // }, 1000);
    }
}

/** ADD USER API */
export const FunctionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
            axios.post('http://localhost:8000/user', data).then(res => {
                dispatch(addUser());
                toast.success("User added successfully");
            }).catch(err => dispatch(failRequest(err.message)));
        // }, 1000);
    }
}

/** UPDATE USER API */
export const FunctionUpdateUser = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
            axios.put('http://localhost:8000/user/'+ code, data).then(res => {
                dispatch(updateUser());
                toast.success("User updated successfully");
            }).catch(err => dispatch(failRequest(err.message)));
        // }, 1000);
    }
}

/** FETCH USER LIST */
export const fetchUserObj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
            axios.get("http://localhost:8000/user/"+id).then(res => {
                console.log(res, 'fetuser obj');
                const userList = res.data;
                dispatch(getUserObj(userList));
            }).catch(err => dispatch(failRequest(err.message)));
        // }, 1000);
    }
}