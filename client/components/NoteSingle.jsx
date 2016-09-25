import React, {Component} from 'react';

export default class NoteSingle extends Component {
	toggleChecked(){
		Meteor.call('toggleNote', this.props.note);
	}
	deleteNote(){
		Meteor.call('deleteNote', this.props.note);
	}
	render(){
		const noteClass = this.props.note.complete ? "checked" : "";
		const status = this.props.note.complete ? <span className="completed">Completed</span> : '';
		return(
			<li className={noteClass}>
				<input type="checkbox"
					readOnly={true}
					checked={this.props.note.complete}
					onClick={this.toggleChecked.bind(this)} />
				{this.props.note.text}
				{status}
				<button className="btn-cancel"
				onClick={this.deleteNote.bind(this)}>
				&times;
				</button>
			</li>
		);
	}
}