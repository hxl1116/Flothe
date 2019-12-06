import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInputGroup: false,
        }
    }

    toggleAddInput = () => {
        this.setState({
            showInputGroup: !this.state.showInputGroup
        })
    };

    addItem = () => {
        let name = document.querySelector(`#${this.props.name}-name-input`);
        let desc = document.querySelector(`#${this.props.name}-desc-input`);
        if (name.value !== '') this.props.addItem({
            name: name.value,
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
                <i className="material-icons" style={{fontSize: 40}} onClick={this.toggleAddInput}>
                    {this.state.showInputGroup ? 'remove' : 'add'}
                </i>
            </div>
        );

        const sectionList = (
            <ol id={`${this.props.id}-section-list`} className="section-list">
                {Object.values(this.props.items).map((val, idx) => (
                    <Item key={`${this.props.name}-task-${idx}`}
                          section={this.props.id}
                          idx={idx}
                          name={val.name}
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

        // todo - convert to Item-like structure
        const sectionForm = (
            <div className={`section-input-group ${this.state.showInputGroup ? 'show' : 'hide'}`}>
                <input type="text" id={`${this.props.name}-name-input`} placeholder="Name"/>
                <input type="text" id={`${this.props.name}-desc-input`} placeholder="Description"/>
                <button onClick={() => {
                    this.addItem();
                    this.toggleAddInput()
                }}>
                    Add
                </button>
            </div>
        );

        return (
            <div id={`${this.props.id}-section`} className="section-container">
                {sectionHeader}
                {sectionList}
                {sectionForm}
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
