import React, {Component} from 'react';
import PropTypes from 'prop-types';

const months = [
    {
        name: 'January',
        days: 31
    },
    {
        name: 'February',
        days: new Date().getFullYear() % 4 === 0 ? 29 : 28
    },
    {
        name: 'March',
        days: 31
    },
    {
        name: 'April',
        days: 30
    },
    {
        name: 'May',
        days: 31
    },
    {
        name: 'June',
        days: 30
    },
    {
        name: 'July',
        days: 31
    },
    {
        name: 'August',
        days: 31
    },
    {
        name: 'September',
        days: 30
    },
    {
        name: 'October',
        days: 31
    },
    {
        name: 'November',
        days: 30
    },
    {
        name: 'December',
        days: 31
    }
];

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: new Date().getMonth()
        }
    }

    render() {
        const calendarHeader = (
            <div className="section-header">
                <h2>{months[this.state.currentMonth].name}</h2>
            </div>
        );

        const day = (date) => (
            <div key={`day-${date}`} id={`day-${date}`}>
                <p>{date}</p>
            </div>
        );

        const days = [];
        for (let idx = 0; idx < months[this.state.currentMonth].days; idx++) {
            idx % 7 === 0 ? days.push(day(idx), <br/>) : days.push(day(idx))
        }

        const monthView = (
            <div id="days-group">
                {days}
            </div>
        );

        return (
            <div id={`${this.props.id}-section`} className="section-container">
                {calendarHeader}
                {monthView}
            </div>
        )
    }
}

Calendar.propTypes = {
    id: PropTypes.string
};

export default Calendar
