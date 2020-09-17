import React, { Component } from 'react';
import Event from './Event';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/eventActions';

class Events extends Component {

    //Initial state for Search Implementation
    state = {
        search : ""
    }

    //Onchange in input field fetching value
    onChange = e => {
        this.setState({ search: e.target.value });
    }

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        const { events } = this.props;
        const { search } = this.state;
        //filtering events according to search box if it is empty it will show all the events
        const filteredEvents = events.filter( event => {
            return event.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        return (
            <React.Fragment>
                <h1 className="display-4 mb-2">
                    <span className="text-primary">Event</span> List
                </h1>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-8 col-sm-12">
                        <input type="text" className="form-control" placeholder="Search For Event..." onChange={this.onChange} />
                    </div>
                </div>
                <div className="row mt-3">
                    {filteredEvents.map(event => (
                        <Event key={event.id} event={event} />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

Events.propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    events: state.event.events
});

export default connect(mapStateToProps, { getEvents })(Events);