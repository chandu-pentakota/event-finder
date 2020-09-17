import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Navigation Bar
const Header = props => {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">{branding}</a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/event/add" className="nav-link">
                            <i className="fas fa-plus"></i> Add Event
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            <i className="fas fa-question"></i> About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    branding: 'Find My Events'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;