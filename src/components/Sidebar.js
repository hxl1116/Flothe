import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Sidebar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen:false
        }
    }

    

    toggleSidemenu = () => {
        var opposite = this.state.sidebarOpen == false ? true : false;
        this.setState({ sidebarOpen:opposite });
    }

    render() {
        const style = this.state.sidebarOpen ? {display: 'none'} : {};
        return (
            <div id="sidebar">
                {/* <button type="button">Sidebar</button> */}
                <div id="profile-img" style={{
                    backgroundImage: "url(./img/barack_obama.jpg)"
                }}
                onClick={this.toggleSidemenu}
                />

                <div id="sidemenu" style={style}>
                    <a class="sidemenu-item">Teams</a>
                    <a class="sidemenu-item">Profile</a>
                    <a class="sidemenu-item">Settings</a>
                </div>

            </div>
            
        )
    }
}

export default Sidebar;