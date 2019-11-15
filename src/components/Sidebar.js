import React, {Component} from 'react'

const sideMenuItems = ['Teams', 'Profile', 'Settings'];

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideMenu: false
        }
    }

    toggleSideMenu = () => {
        this.setState({
            showSideMenu: !this.state.showSideMenu
        })
    };

    render() {
        return (
            <div id="side-bar">
                <button onClick={this.toggleSideMenu}>Menu</button>   {/*Replace with a hamburger menu icon*/}
                <ul id="side-menu" className={this.state.showSideMenu ? 'show' : 'hide'}>
                    <div id="profile-img"/>
                    {Object.values(sideMenuItems).map(val => (
                        <li key={`${val}-side-menu-item`}>{val}</li>
                    ))}
                </ul>
            </div>

        )
    }
}

export default Sidebar;