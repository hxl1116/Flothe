import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <li className="menu-item-group">
                <h3>{this.props.name}</h3>
                {Object.values(this.props.members).map(val => (
                    <p>{val}</p>
                ))}
            </li>
        )
    }
}

MenuItem.propTypes = {
    idx: PropTypes.number,
    name: PropTypes.string,
    members: PropTypes.array
};

export default MenuItem
