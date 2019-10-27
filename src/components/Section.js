import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Task from "./Task";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: this.props.sectionMetaData.id,
            showInputGroup: false,
            items: []
        }
    }

    toggleAddInput = () => {
        this.setState({
            showInputGroup: !this.state.showInputGroup
        })
    };

    addItem = () => {
        let name = document.querySelector(`#${this.state.section}-name-input`);
        let desc = document.querySelector(`#${this.state.section}-desc-input`);
        if (name.value !== '') {
            this.setState({
                items: this.state.items.concat({name: name.value, desc: desc.value})
            }, () => {
                console.log(this.state.items)
            })
        }
    };

    updateItem = (idx, update) => {
        this.setState({
            items: this.state.items.map((item, jdx) => idx === jdx ? update : item)
        })
    };

    deleteItem = (idx) => {
        this.setState({
            items: this.state.items.filter((item, jdx) => {
                console.log(item, idx, jdx);
                return idx !== jdx
            })
        }, () => {
            console.log(this.state.items)
        })
    };

    render() {
        return (
            <div className="section-container">
                <div className="section-header">
                    <h2>{this.props.sectionMetaData.title}</h2>
                    <button id={`${this.state.section}-add-btn`} className={this.state.showInputGroup ? 'hide' : 'show'}
                            onClick={this.toggleAddInput}>Add
                    </button>
                </div>
                <ol id={`${this.state.section}-section-list`} className="section-list">
                    {Object.values(this.state.items).map(((val, idx) => (
                        <Task key={`${this.state.section}-task-${idx}`} section={this.state.section} idx={idx}
                              name={val.name} desc={val.desc} updateSelf={(idx, update) => this.updateItem(idx, update)}
                              deleteSelf={(idx) => this.deleteItem(idx)}/>
                    )))}
                </ol>
                <div id={`${this.props.sectionMetaData.id}-input-group`}
                     className={this.state.showInputGroup ? 'show' : 'hide'}>
                    <input type="text" id={`${this.state.section}-name-input`} placeholder="name"/>
                    <input type="text" id={`${this.state.section}-desc-input`} placeholder="description"/>
                    <button onClick={() => {
                        this.addItem();
                        this.toggleAddInput()
                    }}>Add
                    </button>
                </div>
            </div>
        )
    }
}

Section.propTypes = {
    sectionMetaData: PropTypes.object
};

export default Section
