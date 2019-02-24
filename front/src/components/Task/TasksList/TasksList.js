import React, {Component} from 'react';
import TasksListDisplayer from "./TasksListDisplayer";
import axios from 'axios'
import {endPoint} from "../../../services/util";

export default class TasksList extends Component {
    state = {
        sliders: this.props.sliders,
    };

    handleSlider = (e) => {
        this.setState({
            sliders: {
                ...this.state.sliders,
                [e.target.name]: e.target.value
            }
        })
    };

    addXp = () => {
        const id = '5c71c5574db4956dae968ebf';
        if (id) {
            let sliders = [];
            for (var key in this.state.sliders) {
                if (this.state.sliders.hasOwnProperty(key)) {
                    sliders.push(+this.state.sliders[key]);
                }
            }
            const data = {
                id: id,
                tasks: sliders,
            };
            axios.patch(endPoint + 'player',data).then(this.props.getPlayer);
        }
    };

    render() {
        return (
            <TasksListDisplayer tasks={this.props.tasks}
                                sliders={this.state.sliders}
                                handleSlider={this.handleSlider}
                                addXp={this.addXp}/>
        );
    }
}
