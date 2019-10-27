import React, {Component} from 'react';
import Section from "./Section";

const sections = {
    'Calendar': {id: 'calendar', title: 'Calendar'},
    'To-Do': {id: 'todo', title: 'To-Do'},
    'Goals': {id: 'goals', title: 'Goals'},
    'Motivation': {id: 'motivation', title: 'Motivation'},
    'Happiness': {id: 'happiness', title: 'Happiness'}
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sections-wrapper" className="day-layout">
                {Object.values(sections).map(section => (
                    <Section key={`${section.id}-section`} sectionMetaData={section}/>
                ))}
            </div>
        )
    }
}

export default App
