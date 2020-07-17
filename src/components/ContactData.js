import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getContact, viewContact } from '../actions/ContactAction';
import { ListGroup } from 'react-bootstrap';
class ContactData extends Component {
    componentDidMount() {
        this.props.getContact();
        
    }
    handleClick = (event) => {
        this.props.viewContact(this.props.contactDataList, event);
        console.log(event.target.id);
    }
    render() {
        console.log(this.props.contactDataList)
        return (
            this.props.contactDataList.length!==0?

            <div>
                {
                    this.props.contactDataList.map((item) => {
                        return (
                            <div >
                                <ListGroup.Item action variant="light"  class="list-item" id={item.id} onClick={this.handleClick} >
                                    <input type="checkbox" style={{ height: "20px", width: "20px" }} />
                                    <span style={{ marginLeft: "20px" }}>
                                    <img src="https://mk0analyticsindf35n9.kinstacdn.com/wp-content/uploads/2018/12/image.jpg"
                                            alt="image1"
                                            style={{ borderRadius: "100%", height: "30px", width: "30px"}}
                                        />&nbsp;
                                        {item.fullName}</span><span style={{ float: "right" }}>{item.company}</span>
                                </ListGroup.Item>
                            </div>
                        )
                    })
                }

            </div>: <div className="text-center">
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    contactDataList: state.contactItem.contactList,
    viewContactData:state.contactItem.viewContact

});

export default connect(mapStateToProps, { getContact, viewContact })(ContactData);
