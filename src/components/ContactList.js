import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import ContactData from './ContactData';
import AddContactForm from './AddContactForm';
import ViewContactDetails from './ViewContactDetails';
export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            // close: true
        }
    }
    handleShow = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <FontAwesomeIcon icon={faAddressBook} size="2x" style={{background: "linear-gradient(to bottom right, #ff0000 0%, #ff3399 51%)"}}/>&nbsp;
                        <p style={{ color: "black", fontSize: "20px", fontWeight: "bold",margin:"-40px 0 0 40px" }}>Contacts</p>
                        <p style={{ margin: "-5px 0 20px 40px", fontSize: "12px" }}>This is contact list</p>
                    </Col>
                    <Col xs={6} md={2}>
                        {/* <span>Sort By</span> */}
                        <DropdownButton id="dropdown-basic-button" variant="" title="Date Created">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search"
                                style={{ borderRadius: "30px" }} />
                            <span style={{
                                textAlign: "center",
                                pointerEvents: "none",
                                color: "#aaa",
                                zIndex: "2",
                                float: "right",
                                marginTop: "-30px",
                                marginRight: "20px"
                            }}><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <Button onClick={this.handleShow} style={{ marginRight: "5px" }} size="sm" variant="" style={{background: "linear-gradient(to right, #ff0000 50%, #ff3399 91%)"}}>
                            <span style={{color:"white",fontSize:"15px"}}><FontAwesomeIcon icon={faPlusSquare} />
                            &nbsp;<span >Add Contact</span></span>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div style={{ backgroundColor: "lightgrey", alignItems: "center", height: "40px", padding: "5px 10px 5px 20px" }}>
                            <FontAwesomeIcon icon={faPlusSquare} /><span style={{ marginLeft: "25px" }}>Basic Info</span><span style={{ float: "right", marginRight: "20px" }}>Company</span>
                        </div>
                        <ContactData />
                    </Col>
                    <Col>
                    <ViewContactDetails/>
                    </Col>
                </Row>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact List Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><AddContactForm /></Modal.Body>
                </Modal>
            </Container>
        )
    }
}
