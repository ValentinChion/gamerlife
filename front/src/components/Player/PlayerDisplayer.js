import React, {Component} from 'react';
import avatar from './../../services/kakashion.png' ;

export default class PlayerDisplayer extends Component {
    render() {
        const {
            nickname,
            xp,
            level,
            nextLevelXp
        } = this.props.player;
        return (
            <div className="box">
                <div className="columns">
                    <div className="column is-2 has-text-centered">
                        <figure className="image is-128x128 is-inline-block">
                            <img className="is-rounded" src={avatar}/>
                        </figure>
                    </div>
                    <div className="column">
                        <div className="content is-medium">
                            <div className="title">{nickname}</div>
                            <div className="subtitle">Niveau {level}</div>
                        </div>
                        <progress className="progress is-success is-medium" value={xp} max={nextLevelXp}>{(+(xp) * 100/(+nextLevelXp))}%</progress>
                        <p className="content is-medium">Encore {nextLevelXp - xp} d'xp pour passer au prochain niveau !</p>
                    </div>
                </div>
            </div>
        );
    }
}
