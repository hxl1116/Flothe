import React, {Component} from 'react';
import Section from "./Section";

const sections = {
    'Calendar': {id: 'calendar', name: 'Calendar'},
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
                {Object.values(sections).map(section => (
                    <Section key={`${section.id}-section`} id={section.id} name={section.name}/>
                ))}
            </div>
        )
    }
}

export default App
