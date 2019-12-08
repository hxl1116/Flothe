import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodayItem from "./TodayItem";

class TimeBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-block-group">
                <p className="time-block-time">{this.props.time}</p>
                <div className="time-block-item-display">
                    {this.props.items.map(item => (
                        <TodayItem idx={this.props.idx}
                                   title={item.title}
                                   desc={item.desc}
                                   location={item.location}
                                   month={item.month}
                                   day={item.day}
                                   start={item.start}
                                   end={item.end}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

TimeBlock.propTypes = {
    idx: PropTypes.number,
    time: PropTypes.string,
    items: PropTypes.array
};

export default TimeBlock