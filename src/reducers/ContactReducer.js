import { SUBMIT_CONTACT, GET_CONTACT, VIEW_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from "../actions/Types";

const initState = {
    contactList: [],
    viewContact: []
};
export default function (state = initState, action) {
    switch (action.type) {
        case GET_CONTACT:
            return {
                ...state,
                contactList: action.payload,
            };
        case REMOVE_CONTACT:
            return {
                ...state,
                contactList: action.payload,
                viewContact: ""
            };
        case VIEW_CONTACT:
            return {
                ...state,
                viewContact: action.payload
            };
        case SUBMIT_CONTACT:
            return {
                ...state,
                contactList: [...state.contactList, action.payload]
            };
        case EDIT_CONTACT:
            return {
                ...state,
                viewContact: action.payload
            }


        default:
            return state;
    }
}