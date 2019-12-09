import React, {Component, Fragment} from 'react'
import MenuItem from "./MenuItem";

const sideMenuItems = ['Profile', 'Settings'];

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideMenu: false,
            inputMode: false,
            teams: [{
                name: 'Test Team',
                members: ['Henry', 'John']
            }]
        }
    }

    toggleSideMenu = () => {
        this.setState({
            showSideMenu: !this.state.showSideMenu
        })
    };

    toggleInputMode = () => {
        this.setState({
            inputMode: !this.state.inputMode
        })
    };

    addTeam = () => {
        let name = document.querySelector('#team-name-input');
        let members = document.querySelectorAll('input[type="email"]');

        // noinspection JSCheckFunctionSignatures
        members = Object.values(members).filter(element => element.value !== '');

        console.log(members);

        if (name.value !== '') {
            // noinspection JSCheckFunctionSignatures
            this.setState({
                teams: this.state.teams.concat({
                    name: name.value,
                    members: Object.values(members).map(element => element.value)
                })
            })
        }
    };

    render() {
        const header = (name) => (
            <div className="section-header">
                <h2>{name}</h2>
                <i className="material-icons" onClick={this.toggleInputMode}>
                    {this.state.showTeamInputGroup ? 'remove' : 'add'}
                </i>
            </div>
        );

        const inputGroup = (
            <div id="team-input-group" className="input-group">
                <input type="text" id="team-name-input" placeholder="Team Name" required={true}/>
                <p>Invite Members</p>
                <input type="email" id="team-email-input-1" placeholder="Member 1"/>
                <input type="email" id="team-email-input-1" placeholder="Member 1"/>
                <input type="email" id="team-email-input-1" placeholder="Member 1"/>
                <input type="email" id="team-email-input-1" placeholder="Member 1"/>
                <button onClick={() => {
                    this.addTeam();
                    this.toggleInputMode();
                }}>Create
                </button>
            </div>
        );

        return (
            <Fragment>
                <i id="side-menu-btn" className="material-icons" onClick={this.toggleSideMenu}>dehaze</i>
                <div id="side-bar" className={this.state.showSideMenu ? 'show' : 'hide'}>
                    <ul id="side-menu">
                        <div id="profile-img"/>
                        <div id="team-section">
                            {header('Teams')}
                            {this.state.inputMode ? (inputGroup) : (
                                <ol>
                                    {this.state.teams.map((val, idx) => (
                                        <MenuItem key={`team-${idx}`} idx={idx} name={val.name} members={val.members}/>
                                    ))}
                                </ol>
                            )}
                        </div>
                        {sideMenuItems.map(val => (<li key={`${val}-side-menu-item`}><h2>{val}</h2></li>))}
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Sidebar;