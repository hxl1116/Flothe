import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodayItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            showDesc: false
        }
    }

    toggleDesc = () => {
        this.setState({
            showDesc: !this.state.showDesc
        })
    };

    render() {
        return (
            <li className="today-item-group">
                <h3>{this.props.name}</h3>
                <p onClick={this.toggleDesc}>{this.state.showDesc ? this.props.desc : this.props.location}</p>
            </li>
        )
    }
}

TodayItem.propTypes = {
    idx: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    location: PropTypes.string,
    month: PropTypes.string,
    day: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string
};

export default TodayItem