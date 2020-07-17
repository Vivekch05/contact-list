import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeContact } from '../actions/ContactAction';
import AddContactForm from './AddContactForm';
class ViewContactDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }

    }
    handleEdit = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }

    handleRemove = (e) => {
        this.props.removeContact(this.props.contactListItem1, e);
    }
    render() {
        const contactView = this.props.contactViewItem
        return (
            contactView.length !== 0 ?
                <div>
                    {
                        contactView.map((item) => {
                            return (
                                <>
                                    <Card className="text-center" style={{ alignItems: "center", margin: "10px" }}>
                                        <img src="https://mk0analyticsindf35n9.kinstacdn.com/wp-content/uploads/2018/12/image.jpg"
                                            alt="image1"
                                            style={{ borderRadius: "100%", height: "100px", width: "100px", marginTop: "20px" }}
                                        />
                                        <h1>{item.fullName}</h1>
                                        <p>{item.status}</p>
                                        <Card.Body>
                                            <Card.Text>
                                                <Row style={{ display: "flex", flexWrap: "nowrap" }}>
                                                    <Col md={5} align="justify">
                                                        <label>Full Name</label><br />
                                                        <label>Email</label><br />
                                                        <label>Phone No</label><br />
                                                        <label>Company</label><br />
                                                        <label>Address</label>
                                                    </Col>
                                                    <Col md={7} align="justify">
                                                        <label>{item.fullName}</label><br />
                                                        <label>{item.email}</label><br />
                                                        <label>{item.phoneNo}</label><br />
                                                        <label>{item.company}</label><br />
                                                        <label>{item.address}</label>
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ textAlign: "right" }}>
                                            <Button style={{ marginRight: "5px" }} size="sm" variant="success" id={item.id} onClick={this.handleEdit}  >
                                                <FontAwesomeIcon icon={faEdit} />&nbsp;Edit </Button>
                                            <Button size="sm" variant="danger" id={item.id} onClick={this.handleRemove}>
                                                <FontAwesomeIcon icon={faTrash} />&nbsp;Delete</Button>
                                        </Card.Footer>
                                    </Card>
                                    <Modal show={this.state.show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Contact List Form</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <AddContactForm fullName={item.fullName} email={item.email} phoneNo={item.phoneNo}
                                                company={item.company} address={item.address} id={item.id} />
                                        </Modal.Body>
                                    </Modal>
                                </>
                            )
                        })
                    }
                </div > : ""
        )
    }
}
const mapStateToProps = (state) => ({
    contactViewItem: state.contactItem.viewContact,
    contactListItem1: state.contactItem.contactList

});
export default connect(mapStateToProps, { removeContact })(ViewContactDetails);