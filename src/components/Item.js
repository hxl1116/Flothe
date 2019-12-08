import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            scheduleMode: false,
            // showEditGroup: false,
            showOptions: false,
            // showTimeGroup: false
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    };

    toggleScheduleMode = () => {
        this.setState({
            scheduleMode: !this.state.scheduleMode
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

    updateSelf = () => {
        let title = document.querySelector(`#${this.props.section}-title-edit`);
        let desc = document.querySelector(`#${this.props.section}-desc-edit`);

        this.props.updateItem(this.props.idx, {
            title: (title.value || this.props.title),
            desc: (desc.value || this.props.desc)
        })
    };

    deleteSelf = () => {
        this.props.deleteItem(this.props.idx)
    };

    scheduleSelf = () => {
        let startTime = document.querySelector(`#${this.props.section}-start-time-edit`);
        let endTime = document.querySelector(`#${this.props.section}-end-time-edit`);

        if (startTime.value !== '' && endTime.value !== '') {
            this.props.scheduleItem(this.props.idx, {
                month: new Date().getMonth(),
                day: new Date().getDay(),
                start: startTime.value,
                end: endTime.value
            });

            this.deleteSelf();
        }
    };

    render() {
        const optionsGroup = (
            <div className="options-group">
                {this.state.showOptions ? (
                    <>
                        <i className="material-icons" onClick={() => {
                            if (this.state.scheduleMode) this.toggleScheduleMode();
                            this.toggleEditMode();
                            this.toggleOptionsGroup();
                        }}>create</i>
                        {this.props.section === 'todo' ?
                            <i className="material-icons" onClick={() => {
                                if (this.state.editMode) this.toggleEditMode();
                                this.toggleScheduleMode();
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

        return (
            <>
                <li className="item-group">
                    {!this.state.editMode && !this.state.scheduleMode ? (
                        <h3>{this.props.title}</h3>
                    ) : (<></>)}
                    {this.state.editMode ? (
                        <input type="text" id={`${this.props.section}-title-edit`} className="item-title-input"
                               placeholder="Click to edit title"/>
                    ) : (<></>)}
                    {this.state.scheduleMode ? (
                        <input type="text" id={`${this.props.section}-start-time-edit`} className="item-title-input"
                               placeholder="Click to enter start time"/>
                    ) : (<></>)}
                    <div className="item-content">
                        {!this.state.editMode && !this.state.scheduleMode ? (
                            <p>{this.props.desc}</p>
                        ) : (<></>)}
                        {this.state.editMode ? (
                            <input type="text" id={`${this.props.section}-desc-edit`} className="item-body-input"
                                   placeholder="Click to edit description"/>
                        ) : (<></>)}
                        {this.state.scheduleMode ? (
                            <input type="text" id={`${this.props.section}-end-time-edit`} className="item-body-input"
                                   placeholder="Click to enter end time"/>
                        ) : (<></>)}
                    </div>
                    {this.state.editMode ? (
                        <button onClick={() => {
                            this.updateSelf();
                            this.toggleEditMode();
                        }}>Done</button>
                    ) : (<></>)}
                    {this.state.scheduleMode ? (
                        <button onClick={() => {
                            this.scheduleSelf();
                            this.toggleScheduleMode()
                        }}>Schedule</button>
                    ) : (<></>)}
                    {optionsGroup}
                </li>
            </>
        );
    }
}

Item.propTypes = {
    section: PropTypes.string,
    idx: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    month: PropTypes.string,
    day: PropTypes.string,
    updateItem: PropTypes.func,
    deleteItem: PropTypes.func,
    scheduleItem: PropTypes.func
};

export default Item
