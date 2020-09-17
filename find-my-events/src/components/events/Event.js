import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/eventActions';

class Event extends Component {

    //Calling Delete function (takes id as argument)
    ondeleteClick = id => {
        this.props.deleteEvent(id);
    }

    render() {

        //Fetching data from props
        const { id, name, description, date, location } = this.props.event;

        return (
            <React.Fragment>
                <div className="col-md-4 col-lg-4 col-sm-12 pt-3 pb-3">
                    <div className="card">
                        <img src="/images/event-image.jpg" alt="Event" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Event Date</h5>
                                    <p>{date}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Event Location</h5>
                                    <p>{location}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6 pt-2">
                                    <Link 
                                        to={`event/edit/${id}`} 
                                        className="btn btn-primary btn-block"
                                    >
                                        <i className="fas fa-pencil-alt" ></i> Edit Event
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6 pt-2">
                                    <button className="btn btn-danger btn-block" onClick={this.ondeleteClick.bind(this, id)}><i className="fas fa-trash" ></i> Delete Event</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );

    };

};

//Props Validation
Event.propTypes = {
    event: PropTypes.object.isRequired,
    deleteEvent: PropTypes.func.isRequired
};

//exporting component with deleteEvent function using redux
export default connect(null, { deleteEvent })(Event);