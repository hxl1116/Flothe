import React, {Component} from 'react';
import Section from "./Section";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";
import Today from "./Today";

const testTodoTask = {
    title: 'Test Item',
    desc: 'This is a test To-Do Item'
};

const testCalendarEvent = {
    title: 'Test Item',
    desc: 'This is a test Calendar Event',
    location: 'Victor, NY',
    month: 11,
    day: 8,
    start: '10:00',
    end: '11:00'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarEvents: [
                testCalendarEvent
            ],
            todoTasks: [
                testTodoTask
            ],
            goalItems: [],
            motivationItems: [],
            happinessItems: [],
            currentDay: new Date().getDate()
        }
    }

    addItem = (id, data) => {
        switch (id) {
            case 'calendar':
                this.setState({
                    calendarEvents: this.state.calendarEvents.concat(data)
                });
                break;
            case 'todo':
                this.setState({
                    todoTasks: this.state.todoTasks.concat(data)
                });
                break;
            case 'goal':
                this.setState({
                    goalItems: this.state.goalItems.concat(data)
                });
                break;
            case 'motivation':
                this.setState({
                    motivationItems: this.state.motivationItems.concat(data)
                });
                break;
            case 'happiness':
                this.setState({
                    happinessItems: this.state.happinessItems.concat(data)
                });
                break;
            default:
                break;
        }
    };

    updateItem = (id, idx, data) => {
        switch (id) {
            case 'calendar':
                this.setState({
                    calendarEvents: this.state.calendarEvents.map((item, jdx) => idx === jdx ? data : item)
                });
                break;
            case 'todo':
                this.setState({
                    todoTasks: this.state.todoTasks.map((item, jdx) => idx === jdx ? data : item)
                });
                break;
            case 'goal':
                this.setState({
                    goalItems: this.state.goalItems.map((item, jdx) => idx === jdx ? data : item)
                });
                break;
            case 'motivation':
                this.setState({
                    motivationItems: this.state.motivationItems.map((item, jdx) => idx === jdx ? data : item)
                });
                break;
            case 'happiness':
                this.setState({
                    happinessItems: this.state.happinessItems.map((item, jdx) => idx === jdx ? data : item)
                });
                break;
            default:
                break;
        }
    };

    deleteItem = (id, idx) => {
        switch (id) {
            case 'calendar':
                this.setState({
                    calendarEvents: this.state.calendarEvents.filter((item, jdx) => idx !== jdx)
                });
                break;
            case 'todo':
                this.setState({
                    todoTasks: this.state.todoTasks.filter((item, jdx) => idx !== jdx)
                });
                break;
            case 'goal':
                this.setState({
                    goalItems: this.state.goalItems.filter((item, jdx) => idx !== jdx)
                });
                break;
            case 'motivation':
                this.setState({
                    motivationItems: this.state.motivationItems.filter((item, jdx) => idx !== jdx)
                });
                break;
            case 'happiness':
                this.setState({
                    happinessItems: this.state.happinessItems.filter((item, jdx) => idx !== jdx)
                });
                break;
            default:
                break;
        }
    };

    transferTaskToEvent = (idx, data) => {
        let task = this.state.todoTasks.filter((item, jdx) => idx === jdx);

        // task[0].idx = idx;
        task[0].month = data.month;
        task[0].day = data.day;
        task[0].start = data.start;
        task[0].end = data.end;

        this.setState({
            calendarEvents: this.state.calendarEvents.concat(task),
            todoTasks: this.state.todoTasks.filter((item, jdx) => idx !== jdx)
        })
    };

    selectDay = (date) => {
        this.setState({
            currentDay: date
        })
    };

    render() {
        return (
            <>
                <Sidebar/>
                <div id="sections-wrapper" className="day-layout">
                    <Calendar id="calendar" items={this.state.calendarEvents} currentDay={this.state.currentDay}
                              selectDay={(date) => this.selectDay(date)}/>
                    <Today id="today"
                           name="Today"
                           items={this.state.calendarEvents}
                           currentDay={this.state.currentDay}
                           addItem={(data) => this.addItem('calendar', data)}
                    />
                    <Section id="todo"
                             name="ToDo"
                             items={this.state.todoTasks}
                             addItem={(data) => this.addItem('todo', data)}
                             updateItem={(idx, data) => this.updateItem('todo', idx, data)}
                             deleteItem={(idx) => this.deleteItem('todo', idx)}
                             transferTaskToEvent={(idx, task) => this.transferTaskToEvent(idx, task)}
                    />
                    <Section id="goal"
                             name="Goal"
                             items={this.state.goalItems}
                             addItem={(data) => this.addItem('goal', data)}
                             updateItem={(idx, data) => this.updateItem('goal', idx, data)}
                             deleteItem={(idx) => this.deleteItem('goal', idx)}
                    />
                    <Section id="motivation"
                             name="Motivation"
                             items={this.state.motivationItems}
                             addItem={(data) => this.addItem('motivation', data)}
                             updateItem={(idx, data) => this.updateItem('motivation', idx, data)}
                             deleteItem={(idx) => this.deleteItem('motivation', idx)}
                    />
                    <Section id="happiness"
                             name="Happiness"
                             items={this.state.happinessItems}
                             addItem={(data) => this.addItem('happiness', data)}
                             updateItem={(idx, data) => this.updateItem('happiness', idx, data)}
                             deleteItem={(idx) => this.deleteItem('happiness', idx)}
                    />
                </div>
            </>
        )
    }
}

export default App
