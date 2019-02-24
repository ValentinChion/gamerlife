import React, {Component} from 'react';
import PlayerDisplayer from "./PlayerDisplayer";

export default class Player extends Component {
    render() {
        return (
            <PlayerDisplayer player={this.props.player}/>
        );
    }
}
