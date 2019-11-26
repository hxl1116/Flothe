import React, {Component} from 'react';
import Section from "./Section";
import Sidebar from "./Sidebar";

const sections = {
    'To-Do': {id: 'todo', name: 'To-Do'},
    'Goals': {id: 'goals', name: 'Goals'},
    'Motivation': {id: 'motivation', name: 'Motivation'},
    'Happiness': {id: 'happiness', name: 'Happiness'}
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transferredTasks: []
        }
    }

    transferTaskToEvent = (task) => {
        this.setState({
            transferredTasks: this.state.transferredTasks.concat(task)
        }, () => {
            console.log(task)
        })
    };

    render() {
        return (
            <>
                <Sidebar/>
                <div id="sections-wrapper" className="day-layout">
                    <Section id ={'calender'} name ={"Calendar"} timed={true}
                             transferredTasks={this.state.transferredTasks}
                    />
                    <Section id={'today'} name={'Today'} timed={true}
                             transferredTasks={this.state.transferredTasks}
                    />
                    <Section id={'todo'} name={'ToDo'}
                             transferTaskToEvent={(task) => this.transferTaskToEvent(task)}
                             transferredTasks={this.state.transferredTasks}
                    />
                    <Section id={'goal'} name={'Goal' }
                             transferredTasks={this.state.transferredTasks}
                    />
                    <Section id={'motivation'} name={'Motivation'}
                             transferredTasks={this.state.transferredTasks}
                    />
                    <Section id={'happiness'} name={'Happiness'}
                             transferredTasks={this.state.transferredTasks}
                    />
                </div>
            </>
        )
    }
}

export default App
