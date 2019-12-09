import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import TodayItem from "./TodayItem";
import TimeBlock from "./TimeBlock";

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
            inputMode: false
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
        let loc = document.querySelector(`#${this.props.id}-loc-input`);
        let start = document.querySelector(`#${this.props.id}-start-input`);
        let end = document.querySelector(`#${this.props.id}-end-input`);

        if (title.value !== '') this.props.addItem({
            title: title.value,
            desc: desc.value,
            location: loc.value,
            start: start.value,
            end: end.value,
            day: new Date().getDate(),
            month: new Date().getMonth()
        })
    };

    render() {
        const sectionHeader = (
            <div className="section-header">
                <h2>{this.props.name}</h2>
                <i className="material-icons" onClick={this.toggleInputMode}>
                    {this.state.inputMode ? 'remove' : 'add'}
                </i>
            </div>
        );

        // todo - migrate to separate component
        const timeBlock = (time, idx) => (
            <div key={`time-block-${idx}`} className="time-block-group">
                <p className="time-block-time">{time}</p>
                <div className="time-block-display">
                    {this.props.items.map(
                        value => (value.day === this.props.currentDay.toString() && value.start === time) ? (
                            <TodayItem key={`today-item-${idx}`}
                                       idx={idx}
                                       title={value.title}
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
            <div className="section-input-group">
                <input type="text" id={`${this.props.id}-title-input`} className="item-title-input"
                       placeholder="Title"/>
                <input type="text" id={`${this.props.id}-desc-input`} className="item-body-input"
                       placeholder="Description"/>
                <input type="text" id={`${this.props.id}-loc-input`} className="item-body-input"
                       placeholder="Location"/>
                <input type="text" id={`${this.props.id}-start-input`} className="item-body-input"
                       placeholder="Start time"/>
                <input type="text" id={`${this.props.id}-end-input`} className="item-body-input"
                       placeholder="End time"/>
                <button onClick={() => {
                    this.addItem();
                    this.toggleInputMode()
                }}>
                    Add
                </button>
            </div>
        );

        return (
            <div id={`${this.props.id}-section`} className="section-container">
                {sectionHeader}
                {this.state.inputMode ? sectionForm : (
                    <div id="time-block-list">
                        {/*<TimeBlock idx={0} time="8:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={1} time="9:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={2} time="10:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={3} time="11:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={4} time="12:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={5} time="1:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={6} time="2:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={7} time="3:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={8} time="4:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={9} time="5:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={10} time="6:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={11} time="7:00" items={this.props.items}/>*/}
                        {/*<TimeBlock idx={12} time="8:00" items={this.props.items}/>*/}

                        {/*{times.map((value, idx) => <TimeBlock idx={idx} time={value} items={*/}
                        {/*    this.props.items.filter(*/}
                        {/*        item => item.day === this.props.currentDay.toString() && item.start === value*/}
                        {/*    )*/}
                        {/*}/>)}*/}

                        {times.map(
                            (time, idx) => <TimeBlock idx={idx} time={time} items={
                                this.props.items.filter(
                                    item => item.start === time && item.day === this.props.currentDay.toString()
                                )
                            }/>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

Today.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array,
    currentDay: PropTypes.number,
    addItem: PropTypes.func
};

export default Today