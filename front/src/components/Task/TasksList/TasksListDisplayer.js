import React, {Component} from 'react';
import {colors} from "../../../services/util";

export default class TasksListDisplayer extends Component {
    render() {
        let {tasks,
            sliders,
            handleSlider,
            addXp,
        } = this.props;

        return (
            <div className="box">
                {tasks.map((task,idx) => (
                    <div className="content is-medium" key={task._id}>
                        <p className="title">{task.name}</p>
                        <input className={"slider " + colors[idx%4] + " has-output is-large is-circle is-fullwidth"}
                               name={task._id}
                               min="0" max="100"
                               value={sliders[task._id]} step="1"
                               type="range"
                               onChange={handleSlider}/>
                        <output>{sliders[task._id]}</output>
                    </div>
                ))}
                <div className="button is-success is-medium" onClick={addXp}>Gagne de l'xp !</div>
            </div>
        );
    }
}
