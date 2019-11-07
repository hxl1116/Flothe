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
            <div id="sections-wrapper" className="day-layout">
                <Section id={'calendar'} name={'Calendar'} timed={true}/>
                <Section id={'todo'} name={'ToDo'}/>
                <Section id={'goal'} name={'Goal'}/>
                <Section id={'motivation'} name={'Motivation'}/>
                <Section id={'happiness'} name={'Happiness'}/>
                {/*{Object.values(sections).map(section => (*/}
                {/*    <Section key={`${section.id}-section`} id={section.id} name={section.name}/>*/}
                {/*))}*/}
            </div>
        )
    }
}

export default App
