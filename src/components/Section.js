import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section-container">
                <h2>{this.props.sectionName}</h2>
            </div>
        )
    }
}

Section.propTypes = {
    sectionName: PropTypes.string
};

export default Section
