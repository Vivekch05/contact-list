import { SUBMIT_CONTACT, GET_CONTACT, VIEW_CONTACT, REMOVE_CONTACT,EDIT_CONTACT } from './Types';

export const getContact = () => (dispatch) => {
    const axios = require('axios');
    axios.get("http://localhost:3000/contacts")
        .then((response) => {
            dispatch({ type: GET_CONTACT, payload: response.data });
        })
};
export const submitContact = (state) => (dispatch) => {
    const axios = require('axios');
    const contact = {
        id: state.id,
        fullName: state.fullName,
        email: state.email,
        phoneNo: state.phoneNo,
        company: state.company,
        address: state.address
    };
    console.log(contact);
    axios.post("http://localhost:3000/contacts", contact)
        .then((response) => {
            console.log(response);
            dispatch({ type: SUBMIT_CONTACT, payload: response.data });
        }, (error) => {
            console.log(error);
        });
}

export const viewContact = (contactList, e) => (dispatch) => {
    const currentId = e.target.id;
    const currentContact = contactList.filter((item) => item.id === currentId);
    dispatch({ type: VIEW_CONTACT, payload: currentContact });
}

export const removeContact = (contactList, e) => (dispatch) => {
    const axios = require('axios');
    console.log(contactList);
    let id = e.target.id;
    console.log(id);
    const contactItems = contactList.filter((a) => a.id !== id);
    axios.delete(`http://localhost:3000/contacts/${e.target.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            dispatch({ type: REMOVE_CONTACT, payload: contactItems });

        })
}

export const editContact = (state, id) => (dispatch) => {
    const axios = require('axios');
    console.log(id);
    const editContact = {
        id: state.id,
        fullName: state.fullName,
        email: state.email,
        phoneNo: state.phoneNo,
        company: state.company,
        address: state.address
    };
    console.log(editContact);
    axios.put(`http://localhost:3000/contacts/${id}`, editContact)
        .then((response) => {
            console.log(response.data);
            axios.get("http://localhost:3000/contacts")
                .then((response) => {
                    dispatch({ type: GET_CONTACT, payload: response.data });
                })
            // dispatch({ type: EDIT_CONTACT, payload: response.data })
        })
}