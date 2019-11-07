import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditGroup: false,
            showOptions: false
        }
    }

    toggleEditGroup = () => {
        this.setState({
            showEditGroup: !this.state.showEditGroup
        })
    };

    toggleOptionsGroup = () => {
        this.setState({
            showOptions: !this.state.showOptions
        });

        setTimeout(() => {
            this.setState({
                showOptions: false
            })
        }, 5000)
    };

    updateTask = () => {
        let name = document.querySelector(`#${this.props.section}-name-edit`);
        let desc = document.querySelector(`#${this.props.section}-desc-edit`);

        this.props.updateSelf(this.props.idx, {
            name: (name.value || this.props.name),
            desc: (desc.value || this.props.desc)
        })
    };

    deleteTask = () => {
        this.props.deleteSelf(this.props.idx)
    };

    render() {
        const optionsGroup = (
            <div className="options-group">
                {this.state.showOptions ? (
                    <>
                        <i className="fas fa-pen-square fa-lg" onClick={() => {
                            this.toggleEditGroup();
                            this.toggleOptionsGroup();
                        }}/>
                        {/* todo: add onClick functionality */}
                        <i className="fas fa-calendar-plus fa-lg"/>
                        <i className="fas fa-trash-alt fa-lg" onClick={() => {
                            this.deleteTask();
                            this.toggleOptionsGroup();
                        }}/>
                    </>
                ) : (
                    <>
                        {/* todo: add onClick functionality */}
                        <i className="fas fa-ellipsis-v fa-lg" onClick={this.toggleOptionsGroup}/>
                    </>
                )}
            </div>
        );

        return (
            <div className="item-group">
                <li>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                </li>
                {optionsGroup}
                <div id={`${this.props.section}-edit-group`}
                     className={`section-input-group ${this.state.showEditGroup ? 'show' : 'hide'}`}>
                    <input type="text" id={`${this.props.section}-name-edit`} placeholder="Name"/>
                    <input type="text" id={`${this.props.section}-desc-edit`} placeholder="Description"/>
                    <button onClick={() => {
                        this.updateTask();
                        this.toggleEditGroup()
                    }}>Change
                    </button>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    section: PropTypes.string,
    idx: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    updateSelf: PropTypes.func,
    deleteSelf: PropTypes.func
};

export default Item
