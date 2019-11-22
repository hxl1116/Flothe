import React, {Component} from 'react'
import MenuItem from "./MenuItem";

const sideMenuItems = ['Profile', 'Settings'];

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideMenu: false,
            showTeamGroup: false,
            teams: []
        }
    }

    toggleSideMenu = () => {
        this.setState({
            showSideMenu: !this.state.showSideMenu
        })
    };

    toggleTeamGroup = () => {
        this.setState({
            showTeamGroup: !this.state.showTeamGroup
        })
    };

    addTeam = () => {
        let name = document.querySelector('#team-name-input');
        let members = document.querySelectorAll('input[type="email"]');

        members = Object.values(members).filter(element => element.value !== '');

        console.log(members);

        if (name.value !== '') {
            this.setState({
                teams: this.state.teams.concat({
                    name: name.value,
                    members: Object.values(members).map(element => element.value)
                })
            })
        }
    };

    render() {
        const inputGroup = (
            <div id="team-input-group" className={`input-group ${this.state.showTeamGroup ? 'show' : 'hide'}`}>
                <input type="text" id="team-name-input" placeholder="Team Name" required={true}/>
                <p>Invite Members</p>
                <input type="email" id="team-email-input-1" placeholder="Member 1"/>
                <input type="email" id="team-email-input-1" placeholder="Member 1"/>
                <input type="email" id="team-email-input-1" placeholder="Member 1"/>
                <input type="email" id="team-email-input-1" placeholder="Member 1"/>
                <button onClick={() => {
                    this.addTeam();
                    this.toggleTeamGroup();
                }}>Create
                </button>
            </div>
        );

        return (
            <div id="side-bar">
                <i className="material-icons md-36" onClick={this.toggleSideMenu}>dehaze</i>
                <ul id="side-menu" className={this.state.showSideMenu ? 'show' : 'hide'}>
                    <div id="profile-img"/>
                    <div id="team-section">
                        <h2>Teams</h2>
                        <button onClick={this.toggleTeamGroup}>Add</button>
                        <ol>
                            {Object.values(this.state.teams).map((val, idx) => (
                                <MenuItem key={`team-${idx}`} idx={idx} name={val.name} members={val.members}/>
                            ))}
                        </ol>
                        {inputGroup}
                    </div>
                    {Object.values(sideMenuItems).map(val => (
                        <li key={`${val}-side-menu-item`}><h2>{val}</h2></li>
                    ))}
                </ul>
            </div>

        )
    }
}

export default Sidebar;