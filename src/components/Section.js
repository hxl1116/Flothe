import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Task from "./Task";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        let name = document.querySelector(`#${this.props.name}-name-input`);
        let desc = document.querySelector(`#${this.props.name}-desc-input`);
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
            <div id={`${this.props.id}-section`} className="section-container">
                <div className="section-header">
                    <h2>{this.props.name}</h2>
                    <i className={`fas fa-plus fa-lg ${this.state.showInputGroup ? 'hide' : 'show'}`}
                       onClick={this.toggleAddInput}/>
                </div>
                <ol id={`${this.props.id}-section-list`} className="section-list">
                    {Object.values(this.state.items).map(((val, idx) => (
                        <Task key={`${this.props.name}-task-${idx}`} section={this.props.id} idx={idx}
                              name={val.name} desc={val.desc} updateSelf={(idx, update) => this.updateItem(idx, update)}
                              deleteSelf={(idx) => this.deleteItem(idx)}/>
                    )))}
                </ol>
                <div className={`section-input-group ${this.state.showInputGroup ? 'show' : 'hide'}`}>
                    <input type="text" id={`${this.props.name}-name-input`} placeholder="Name"/>
                    <input type="text" id={`${this.props.name}-desc-input`} placeholder="Description"/>
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
    id: PropTypes.string,
    name: PropTypes.string
};

export default Section
