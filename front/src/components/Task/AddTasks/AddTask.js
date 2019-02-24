import React, {Component} from 'react'
import AddTaskDisplayer from "./AddTaskDisplayer";
import {endPoint} from "../../../services/util";
import axios from 'axios';

export default class AddTask extends Component {
    state = {
        change: {}
    };

    handleInput = (e) => {
        this.setState({
            change: {
                ...this.state.change,
                [e.target.name] : e.target.value
            }
        })
    };

    addTask = () => {
        const {change} = this.state;
        axios.post(endPoint + "player/5c72ca0320589f520275ed4f/tasks",change).then(this.props.getPlayer)
    };

    render() {
        return (

            <AddTaskDisplayer handleInput={this.handleInput}
                              change={this.state.change}
                              addTask={this.addTask}/>
        );
    }
}
