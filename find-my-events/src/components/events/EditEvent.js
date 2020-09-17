import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvent, updateEvent } from '../../actions/eventActions';
import classnames from 'classnames';

class EditEvent extends Component {
    //defining initial state of form
    state = {
        name: '',
        description: '',
        date: '',
        location: '',
        errors: {}
    }

    componentDidMount() {
        //Fetches the id from the URL
        const { id } = this.props.match.params;
        this.props.getEvent(id);
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { name, description, date, location } = nextProps.event;
        this.setState({
            name,
            description,
            date,
            location
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, description, date, location } = this.state;

        //Checking for Errors
        if (name === '') {
            this.setState({ errors: { name: 'Event Name is required' } });
            return;
        }

        if (description === '') {
            this.setState({ errors: { description: 'Event Description is required' } });
            return;
        }

        if (date === '') {
            this.setState({ errors: { date: 'Event Date is required' } });
            return;
        }

        if (location === '') {
            this.setState({ errors: { location: 'Event Location is required' } });
            return;
        }

        const { id } = this.props.match.params;

        //Preparing data
        const updEvent = {
            id,
            name,
            description,
            date,
            location
        };

        //// UPDATE EVENT ////
        //Sending data to function
        this.props.updateEvent(updEvent);

        //Again Setting State to Empty after inserting data
        this.setState({
            name: '',
            description: '',
            date: '',
            location: '',
            errors: {}
        });

        //Navigating to Homepage after insertion
        this.props.history.push('/');

    }

    //Since we are setting value in input fields so we need this otherwise we won't be able to fill the form
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { name, description, date, location, errors } = this.state;

        return (
            <React.Fragment>
                <h1 className="display-4 mb-2">
                    <span className="text-primary">Edit</span> Event
                </h1>
                <div className="card mb-3 mt-3">
                    <div className="card-header">Edit Event</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <TextInputGroup
                                label="Event Name"
                                name="name"
                                placeholder="Event Name"
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}
                            />
                            <div className="form-group">
                                <label htmlFor="description">Event Description</label>
                                <textarea
                                    name="description"
                                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.description })}
                                    cols="30"
                                    rows="5"
                                    value={description}
                                    placeholder="Enter Event Description..."
                                    onChange={this.onChange}
                                >
                                </textarea>
                                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                            </div>
                            <TextInputGroup
                                label="Event Date"
                                name="date"
                                placeholder="Event Date"
                                value={date}
                                onChange={this.onChange}
                                error={errors.date}
                            />
                            <TextInputGroup
                                label="Event Location"
                                name="location"
                                placeholder="Event Location"
                                value={location}
                                onChange={this.onChange}
                                error={errors.location}
                            />
                            <input
                                type="submit"
                                value="Update Event"
                                className="btn btn-dark btn-block"
                            />
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

//Props validation
EditEvent.propTypes = {
    event: PropTypes.object.isRequired,
    getEvent: PropTypes.func.isRequired
}

//Mapping state to Props
const mapStateToProps = state => ({
    event: state.event.event
})

//Exporting Component with addEvent function
export default connect(mapStateToProps, { getEvent, updateEvent })(EditEvent);