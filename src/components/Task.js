import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditGroup: false,
        }
    }

    toggleEditGroup = () => {
        this.setState({
            showEditGroup: !this.state.showEditGroup
        })
    };

    updateTask = () => {
        let name = document.querySelector(`#${this.props.section}-name-edit`);
        let desc = document.querySelector(`#${this.props.section}-desc-edit`);

        this.props.updateSelf(this.props.idx, {
            name: (name.value || this.props.name),
            desc: (desc.value || this.props.desc)
        })
    };

    deleteTask = () => {
        this.props.deleteSelf(this.props.idx)
    };

    render() {
        return (
            <div>
                <li>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                </li>
                <button onClick={this.toggleEditGroup}>Edit</button>
                <button onClick={this.deleteTask}>Delete</button>
                <div id={`${this.props.section}-edit-group`} className={this.state.showEditGroup ? 'show' : 'hide'}>
                    <input type="text" id={`${this.props.section}-name-edit`}/>
                    <input type="text" id={`${this.props.section}-desc-edit`}/>
                    <button onClick={() => {
                        this.updateTask();
                        this.toggleEditGroup()
                    }}>Change
                    </button>
                </div>
            </div>
        );
    }
}

Task.propTypes = {
    section: PropTypes.string,
    idx: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    updateSelf: PropTypes.func,
    deleteSelf: PropTypes.func
};

export default Task
