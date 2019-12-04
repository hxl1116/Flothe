import React, {Component} from 'react';
import Section from "./Section";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";

const testItem = {
    name: 'Test Item',
    desc: 'This is a test To-Do Item'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarEvents: [],
            todoTasks: [
                testItem
            ],
            goalItems: [],
            motivationItems: [],
            happinessItems: []
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

        task[0].start = data.start;
        task[0].end = data.end;

        this.setState({
            calendarEvents: this.state.calendarEvents.concat(task),
            todoTasks: this.state.todoTasks.filter((item, jdx) => idx !== jdx)
        })
    };

    render() {
        return (
            <>
                <Sidebar/>
                <div id="sections-wrapper" className="day-layout">
                    <Calendar id="calendar"/>
                    {/*<Section id ={'calender'} name ={"Calendar"} timed={true}*/}
                    {/*         transferredTasks={this.state.transferredTasks}*/}
                    {/*/>*/}
                    <Section id="today"
                             name="Today"
                             items={this.state.calendarEvents}
                             addItem={(data) => this.addItem('calendar', data)}
                             updateItem={(idx, data) => this.updateItem('calendar', idx, data)}
                             deleteItem={(idx) => this.deleteItem('calendar', idx)}
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
