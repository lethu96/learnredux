import {REQUEST_LIST_USER, RECIVE_LIST_USER, REQUEST_ADD_USER, REQUEST_DETELE_POST } from '../config/user'

export const requestListUser = () => ({
    type : REQUEST_LIST_USER
});

export const reciveListUser = (data) => {
return {
    type: RECIVE_LIST_USER,
    data: data,
}
};

export const reqCreateUser = (user, router) => {
    return {
        type: REQUEST_ADD_USER,
        user,
        router
    }
}
export const reqDelete = (id) => {
    return {
        type: REQUEST_DETELE_POST,
        id
    }
}