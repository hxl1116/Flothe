import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodayItem from "./TodayItem";

const times = [
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '1:00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00'
];

class Today extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInputGroup: false
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
        let loc = document.querySelector(`#${this.props.name}-loc-input`);
        let start = document.querySelector(`#${this.props.name}-start-input`);
        let end = document.querySelector(`#${this.props.name}-end-input`);

        // if (name.value !== '') this.props.addItem({
        //     name: name.value,
        //     desc: desc.value,
        //     location: loc.value,
        //     start: start.value,
        //     end: end.value,
        //     day: new Date().getDay(),
        //     month: new Date().getMonth()
        // })
    };

    render() {
        const sectionHeader = (
            <div className="section-header">
                <h2>{this.props.name}</h2>
                <i className="material-icons" onClick={this.toggleAddInput}>
                    {this.state.showInputGroup ? 'remove' : 'add'}
                </i>
            </div>
        );

        // todo - Refresh data when ToDo Task is transferred
        const timeBlock = (time, idx) => (
            <div key={`time-block-${idx}`} className="time-block-group">
                <p className="time-block-time">{time}</p>
                <div className="time-block-display">
                    {this.props.items.map(
                        value => (value.day === this.props.currentDay.toString() && value.start === time) ? (
                            <TodayItem key={`today-item-${idx}`}
                                       idx={idx}
                                       name={value.name}
                                       desc={value.desc}
                                       location={value.location}
                                       month={value.month}
                                       day={value.day}
                                       start={value.start}
                                       end={value.end}
                            />
                        ) : (<></>)
                    )}
                </div>
            </div>
        );

        const sectionForm = (
            <div className={`section-input-group ${this.state.showInputGroup ? 'show' : 'hide'}`}>
                <input type="text" id={`${this.props.id}-name-input`} placeholder="Title"/>
                <input type="text" id={`${this.props.id}-desc-input`} placeholder="Description"/>
                <input type="text" id={`${this.props.id}-loc-input`} placeholder="Location"/>
                <input type="text" id={`${this.props.id}-start-input`} placeholder="Start time"/>
                <input type="text" id={`${this.props.id}-end-input`} placeholder="End time"/>
                    {/*{this.props.timed ? (*/}
                    {/*    <>*/}
                    {/*        <input type="text" id={`${this.props.name}-start-input`} defaultValue={'Current time'} placeholder={'Start time'}*/}
                    {/*        />*/}
                    {/*        <input type="text" id={`${this.props}-end-input`} placeholder={'End time'}/>*/}
                    {/*    </>*/}
                    {/*) : (<></>)}*/}
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
                {sectionForm}
                <div id="time-block-list">
                    {times.map((value, idx) => timeBlock(value, idx))}
                </div>
            </div>
        )
    }
}

Today.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array,
    currentDay: PropTypes.number,
    addItem: PropTypes.func
};

export default Today