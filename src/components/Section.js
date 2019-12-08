import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMode: false,
        }
    }

    toggleInputMode = () => {
        this.setState({
            inputMode: !this.state.inputMode
        })
    };

    addItem = () => {
        let title = document.querySelector(`#${this.props.id}-title-input`);
        let desc = document.querySelector(`#${this.props.id}-desc-input`);
        if (title.value !== '') this.props.addItem({
            title: title.value,
            desc: desc.value,
            day: new Date().getDay(),
            month: new Date().getMonth()
        })
    };

    updateItem = (idx, update) => {
        this.props.updateItem(idx, update)
    };

    deleteItem = (idx) => {
        this.props.deleteItem(idx)
    };

    scheduleItem = (idx, update) => {
        this.props.transferTaskToEvent(idx, update)
    };

    render() {
        const sectionHeader = (
            <div className="section-header">
                <h2>{this.props.name}</h2>
                <i className="material-icons" style={{fontSize: 40}} onClick={this.toggleInputMode}>
                    {this.state.inputMode ? 'remove' : 'add'}
                </i>
            </div>
        );

        const sectionForm = (
            <div className="section-input-group">
                <input type="text" id={`${this.props.id}-title-input`} className="item-title-input"
                       placeholder="Click to enter title"/>
                <input type="text" id={`${this.props.id}-desc-input`} className="item-body-input"
                       placeholder="Click to enter description"/>
                <button onClick={() => {
                    this.addItem();
                    this.toggleInputMode()
                }}>
                    Add
                </button>
            </div>
        );

        const sectionList = (
            <ol id={`${this.props.id}-section-list`} className="section-list">
                {this.state.inputMode ? sectionForm : <></>}
                {Object.values(this.props.items).map((val, idx) => (
                    <Item key={`${this.props.id}-task-${idx}`}
                          section={this.props.id}
                          idx={idx}
                          title={val.title}
                          desc={val.desc}
                          start={val.start}
                          end={val.end}
                          updateItem={(idx, update) => this.updateItem(idx, update)}
                          deleteItem={(idx) => this.deleteItem(idx)}
                          scheduleItem={(idx, update) => this.scheduleItem(idx, update)}
                    />
                ))}
            </ol>
        );

        return (
            <div id={`${this.props.id}-section`} className="section-container">
                {sectionHeader}
                {sectionList}
            </div>
        )
    }
}

Section.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    timed: PropTypes.bool,
    items: PropTypes.array,
    addItem: PropTypes.func,
    updateItem: PropTypes.func,
    deleteItem: PropTypes.func,
    transferTaskToEvent: PropTypes.func
};

export default Section
