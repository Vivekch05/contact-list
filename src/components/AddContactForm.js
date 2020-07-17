import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlusSquare, faUndo } from '@fortawesome/free-solid-svg-icons';
import { submitContact,editContact } from '../actions/ContactAction';
import { connect } from 'react-redux';
//import axios from 'axios';
class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState
    }

    initialState = {
        id: "",
        fullName: "",
        email: "",
        phoneNo: "",
        company: "",
        address: "",
        check: true
    }
    componentDidMount() {

        this.setState(
            this.state.check === true ?
                {
                    fullName: this.props.fullName,
                    email: this.props.email,
                    phoneNo: this.props.phoneNo,
                    id: this.props.id,
                    company: this.props.company,
                    address: this.props.address
                } : {
                    id: "",
                    fullName: "",
                    email: "",
                    phoneNo: "",
                    company: "",
                    address: "",
                }
        )
    }
    handleSubmit = (e) => {
        this.setState({ check: false })
        e.preventDefault();
        this.props.contactListData.forEach((item) => {
            if (item.id === this.props.id) {
                this.props.editContact(this.state,this.props.id);
            }
            else {
                this.props.submitContact(this.state);
            }
        })

        console.log(this.state);
    }
    bookChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e);

    }
    resetBook = () => {
        this.setState(() => this.initialState);
        console.log(this.initialState);
    }

    render() {
        const { fullName, email, phoneNo, company, address, id } = this.state;
        return (
            <div className="container">
                <Card>
                    <Card.Header style={{background: "linear-gradient(to right, #ff0000 50%, #ff3399 91%)",color: "white" }}><FontAwesomeIcon icon={faPlusSquare} />&nbsp;Add Contact</Card.Header>
                    <Form onReset={this.resetBook} onSubmit={this.handleSubmit}>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="fullName"
                                        value={fullName}
                                        onChange={this.bookChange}
                                        placeholder="Enter Your Full Name"
                                        className="bg-white text-black"
                                    />
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="email"
                                        value={email}
                                        onChange={this.bookChange}
                                        placeholder="Enter Your Email Id"
                                        className="bg-white text-black"
                                    />
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="phoneNo"
                                        value={phoneNo}
                                        onChange={this.bookChange}
                                        placeholder="Enter Your Phone No"
                                        className="bg-white text-black"
                                    />
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="company"
                                        value={company}
                                        onChange={this.bookChange}
                                        placeholder="Enter Your Company Name"
                                        className="bg-white text-black"
                                    />
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="address"
                                        value={address}
                                        onChange={this.bookChange}
                                        placeholder="Enter Your Address"
                                        className="bg-white text-black"
                                    />
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="id"
                                        value={id}
                                        onChange={this.bookChange}
                                        placeholder="Enter Your Id"
                                        className="bg-white text-black"
                                    />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: "right" }}>
                            <Button style={{ marginRight: "5px" }} size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave} />
                            &nbsp;Submit
                        </Button>
                            <Button size="sm" variant="info" type="reset"><FontAwesomeIcon icon={faUndo} />
                            &nbsp;Reset
                        </Button>
                        </Card.Footer>
                    </Form>

                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    contactListData: state.contactItem.contactList,
    // bookDataCollections: state.bookItem.bookCollections

});

export default connect(mapStateToProps, { submitContact,editContact })(CreateBook);

