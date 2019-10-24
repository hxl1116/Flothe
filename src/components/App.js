import React, {Component} from 'react';
import Section from "./Section";

const sections = ['Calendar', 'To-Do', 'Goals', 'Motivation', 'Happiness'];

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sections-wrapper" className="day-layout">
                {sections.map(name => <Section key={`${name.toLowerCase()}-section`} sectionName={name}/>)}
            </div>
        )
    }
}

export default App
