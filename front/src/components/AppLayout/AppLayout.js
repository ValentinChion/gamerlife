import React, {Component} from 'react'
import Player from "../Player/Player";
import TasksList from "../Task/TasksList/TasksList";
import AddTask from "../Task/AddTasks/AddTask";
import axios from "axios";
import {endPoint} from "../../services/util";

export default class AppLayout extends Component {
    state = {
        tasks: [],
        sliders: {},
        player: {},
    };

    async componentDidMount() {
        await this.getPlayer();
    }

    getPlayer = async () => {
        const player = await axios.get(endPoint + "player/5c71c5574db4956dae968ebf/tasks");
        const playerInfo = {
            nickname: player.data.nickname,
            level: player.data.level,
            xp: player.data.xp,
            nextLevelXp: player.data.nextLevelXp,
            id: player.data._id,
        };
        this.setState({tasks: player.data.tasks, player: playerInfo});
        this.state.tasks.map((task) => this.setState({sliders:{
                ...this.state.sliders,
                [task._id]: 50}
        }));
    };

    render() {
        return (
            <div className="hero-body is-background-color is-fullheight">
                <Player player={this.state.player}/>
                <TasksList tasks={this.state.tasks} sliders={this.state.sliders} getPlayer={this.getPlayer}/>
                <AddTask getPlayer={this.getPlayer}/>
            </div>
        );
    }
}
