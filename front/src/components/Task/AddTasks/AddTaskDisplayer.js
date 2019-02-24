import React, {Component} from 'react'

export default class AddTaskDisplayer extends Component {
    render() {
        let {
            name,
            importance,
        } = this.props.change;

        return (
            <div className="box">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input"
                               name="name"
                               value={name}
                               type="text"
                               placeholder="Tâche..."
                               onChange={this.props.handleInput}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Importance</label>
                    <div className="control">
                        <input className="input"
                               name="importance"
                               value={importance}
                               type="number"
                               onChange={this.props.handleInput}/>
                    </div>
                </div>
                <button className="button is-medium is-success"
                        onClick={this.props.addTask}>Ajouter une tâche !</button>
            </div>
        );
    }
}
