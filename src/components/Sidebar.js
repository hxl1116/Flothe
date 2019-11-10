import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="sidebar">
                {/* <button type="button">Sidebar</button> */}
                <div id="profile-img" style={{
                    backgroundImage: "url(./img/barack_obama.jpg)"
                }}/>
            </div>
        )
    }
}

export default Sidebar;