import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/eventActions';
import classnames from 'classnames';

class AddEvent extends Component {
    //defining initial state of form
    state = {
        name: '',
        description: '',
        date: '',
        location: '',
        errors: {}
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

        //Preparing data
        const newEvent = {
            name,
            description,
            date,
            location
        };

        //Sending data to function
        this.props.addEvent(newEvent);

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
                    <span className="text-primary">Add</span> Event
                </h1>
                <div className="card mb-3 mt-3">
                    <div className="card-header">Add Event</div>
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
                                value="Add Event"
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
AddEvent.propTypes = {
    addEvent: PropTypes.func.isRequired
}

//Exporting Component with addEvent function
export default connect(null, { addEvent })(AddEvent);