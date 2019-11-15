import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditGroup: false,
            showOptions: false,
            showTimeGroup: false
        }
    }

    toggleEditGroup = () => {
        this.setState({
            showEditGroup: !this.state.showEditGroup
        })
    };

    toggleOptionsGroup = () => {
        this.setState({
            showOptions: !this.state.showOptions
        });

        setTimeout(() => {
            this.setState({
                showOptions: false
            })
        }, 5000)
    };

    toggleTimeGroup = () => {
        this.setState({
            showTimeGroup: !this.state.showTimeGroup
        })
    };

    updateSelf = () => {
        let name = document.querySelector(`#${this.props.section}-name-edit`);
        let desc = document.querySelector(`#${this.props.section}-desc-edit`);

        this.props.updateItem(this.props.idx, {
            name: (name.value || this.props.name),
            desc: (desc.value || this.props.desc)
        })
    };

    deleteSelf = () => {
        this.props.deleteItem(this.props.idx)
    };

    scheduleSelf = () => {
        let startTime = document.querySelector(`#${this.props.section}-start-time-edit`);
        let endTime = document.querySelector(`#${this.props.section}-end-time-edit`);

        this.props.scheduleItem(this.props.idx, {
            start: startTime.value,
            end: endTime.value
        })
    };

    render() {
        const optionsGroup = (
            <div className="options-group">
                {this.state.showOptions ? (
                    <>
                        <i className="fas fa-pen-square fa-lg" onClick={() => {
                            if (this.state.showTimeGroup) this.toggleTimeGroup();
                            this.toggleEditGroup();
                            this.toggleOptionsGroup();
                        }}/>
                        {/* todo: add onClick functionality */}
                        <i className="fas fa-calendar-plus fa-lg"/>
                        <i className="fas fa-trash-alt fa-lg" onClick={() => {
                            this.deleteSelf();
                            this.toggleOptionsGroup();
                        }}/>
                        {this.props.section === 'todo' ?
                            <button onClick={() => {
                                if (this.state.showEditGroup) this.toggleEditGroup();
                                this.toggleTimeGroup();
                                this.toggleOptionsGroup();
                            }}>Schedule</button> : <></>}
                    </>
                ) : (
                    <>
                        {/* todo: add onClick functionality */}
                        <i className="fas fa-ellipsis-v fa-lg" onClick={this.toggleOptionsGroup}/>
                    </>
                )}
            </div>
        );

        const editGroup = (
            <div id={`${this.props.section}-edit-group`}
                 className={`section-input-group ${this.state.showEditGroup ? 'show' : 'hide'}`}>
                <input type="text" id={`${this.props.section}-name-edit`} placeholder="Name"/>
                <input type="text" id={`${this.props.section}-desc-edit`} placeholder="Description"/>
                <button onClick={() => {
                    this.updateSelf();
                    this.toggleEditGroup()
                }}>Change
                </button>
            </div>
        );

        const timeGroup = (
            <div id={`${this.props.section}-time-group`}
                 className={`section-input-group ${this.state.showTimeGroup ? 'show' : 'hide'}`}>
                <input type="datetime-local" id={`${this.props.section}-start-time-edit`}/>
                <input type="datetime-local" id={`${this.props.section}-end-time-edit`}/>
                <button onClick={() => {
                    this.scheduleSelf();
                    this.deleteSelf();
                    this.toggleTimeGroup()
                }}>Schedule
                </button>
            </div>
        );

        return (
            <div className="item-group">
                <li>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                    <p>{this.props.start}</p>
                    <p>{this.props.end}</p>
                </li>
                {optionsGroup}
                <div id="input-group" className={
                    `input-group ${this.state.showEditGroup || this.state.showTimeGroup ? 'show' : 'hide'}`
                }>
                    {editGroup}
                    {timeGroup}
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    section: PropTypes.string,
    idx: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    updateItem: PropTypes.func,
    deleteItem: PropTypes.func,
    scheduleItem: PropTypes.func
};

export default Item
