import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

const testItem = {
    name: 'Test Item',
    desc: 'This is a test To-Do Item'
};

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

    // todo - Pass data to root component (App)
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

    // todo - Pass data to root component (App)
    updateItem = (idx, update) => {
        this.setState({
            items: this.state.items.map((item, jdx) => idx === jdx ? update : item)
        })
    };

    // todo - Pass data to root component (App)
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

    // todo - Verify data transfer to root component (App)
    scheduleItem = (idx, update) => {
        let task = this.state.items.filter((item, jdx) => {
            return idx === jdx
        });

        task[0].start = update.start;
        task[0].end = update.end;

        this.props.transferTaskToEvent(task)
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
                {/*todo - Refactor data source*/}
                {Object.values(this.state.items).map((val, idx) => (
                    <Item key={`${this.props.name}-task-${idx}`}
                          section={this.props.id}
                          idx={idx}
                          name={val.name}
                          desc={val.desc}
                          updateItem={(idx, update) => this.updateItem(idx, update)}
                          deleteItem={(idx) => this.deleteItem(idx)}
                          scheduleItem={(idx, update) => this.scheduleItem(idx, update)}
                    />
                ))}
                {/*todo - Refactor data source*/}
                {this.props.timed ? <>
                    {Object.values(this.props.transferredTasks).map((val, idx) => (
                        <Item key={`${this.props.name}-transferred-task-${idx}`}
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
                </> : <></>}
            </ol>
        );

        const sectionForm = (
            <div className={`section-input-group ${this.state.showInputGroup ? 'show' : 'hide'}`}>
                <input type="text" id={`${this.props.name}-name-input`} placeholder="Name"/>
                <input type="text" id={`${this.props.name}-desc-input`} placeholder="Description"/>
                {this.props.timed ? (
                    <>
                        <input type="text"
                               id={`${this.props.name}-start-input`}
                               defaultValue={'Current time'}
                               placeholder={'Start time'}
                        />
                        <input type="text" id={`${this.props}-end-input`} placeholder={'End time'}/>
                    </>
                ) : (<></>)}
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
    transferTaskToEvent: PropTypes.func
};

export default Section
