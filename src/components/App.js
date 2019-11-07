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
    }

    render() {
        return (
            <div id="content-wrapper" className="day-layout">
                <Sidebar/>
                <Section id={'calendar'} name={'Calendar'} timed={true}/>
                {Object.values(sections).map(section => (
                    <Section key={`${section.id}-section`} id={section.id} name={section.name}/>
                ))}
            </div>
        )
    }
}

export default App
