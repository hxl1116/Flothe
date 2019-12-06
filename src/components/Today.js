import React, {Component, Fragment} from 'react'
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

    render() {
        const sectionHeader = (
            <div className="section-header">
                <h2>{this.props.name}</h2>
                <i className="material-icons" onClick={this.toggleAddInput}>
                    {this.state.showInputGroup ? 'remove' : 'add'}
                </i>
            </div>
        );

        const timeBlock = (time, idx) => (
            <div key={`time-block-${idx}`} className="time-block-group">
                <p className="time-block-time">{time}</p>
                <div className="time-block-display">
                    {this.props.items.map(value => {
                        console.log(value);
                        if (value.start === time)
                            return <TodayItem idx={idx}
                                              name={value.name}
                                              desc={value.desc}
                                              location={value.location}
                                              month={value.month}
                                              day={value.day}
                                              start={value.start}
                                              end={value.end}
                            />
                    })}
                </div>
            </div>
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
                <div id="time-block-list">
                    {times.map((value, idx) => timeBlock(value, idx))}
                </div>
                {sectionForm}
            </div>
        )
    }
}

Today.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array,
    currentDay: PropTypes.number
};

export default Today