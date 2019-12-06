import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            // showEditGroup: false,
            showOptions: false,
            showTimeGroup: false
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    };

    // toggleEditGroup = () => {
    //     this.setState({
    //         showEditGroup: !this.state.showEditGroup
    //     })
    // };

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
                        <i className="material-icons" onClick={() => {
                            if (this.state.showTimeGroup) this.toggleTimeGroup();
                            this.toggleEditMode();
                            this.toggleOptionsGroup();
                        }}>create</i>
                        {this.props.section === 'todo' ?
                            <i className="material-icons" onClick={() => {
                                if (this.state.editMode) this.toggleEditMode();
                                this.toggleTimeGroup();
                                this.toggleOptionsGroup();
                            }}>calendar_today</i> : <></>
                        }
                        <i className="material-icons" onClick={() => {
                            this.deleteSelf();
                            this.toggleOptionsGroup();
                        }}>delete</i>
                    </>
                ) : (
                    <>
                        <i className="material-icons" onClick={this.toggleOptionsGroup}>more_vert</i>
                    </>
                )}
            </div>
        );

        const editGroup = (
            <div id={`${this.props.section}-edit-group`}
                 className={`input-group ${this.state.editMode ? 'show' : 'hide'}`}>
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
            <>
                <li className="item-group">
                    {this.state.editMode ? (
                        <input type="text" id={`${this.props.section}-name-edit`} className="title-edit"
                               placeholder="Click to edit title"/>
                    ) : (
                        <h3>{this.props.name}</h3>
                    )}
                    <div className="item-content">
                        {this.state.editMode ? (
                            <input type="text" id={`${this.props.section}-desc-edit`} className="desc-edit"
                                   placeholder="Click to edit description"/>
                        ) : (
                            <p>{this.props.desc}</p>
                        )}
                    </div>
                    {this.state.editMode ? (
                        <button onClick={() => {
                            this.updateSelf();
                            this.toggleEditMode();
                        }}>Done</button>
                    ) : (<></>)}
                    {optionsGroup}
                </li>
                {/* Migrate to Section */}
                <div className={
                    `input-group ${this.state.showEditGroup || this.state.showTimeGroup ? 'show' : 'hide'}`
                }>
                    {/*{editGroup}*/}
                    {timeGroup}
                </div>
            </>
        );
    }
}

Item.propTypes = {
    section: PropTypes.string,
    idx: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    month: PropTypes.string,
    day: PropTypes.string,
    updateItem: PropTypes.func,
    deleteItem: PropTypes.func,
    scheduleItem: PropTypes.func
};

export default Item
