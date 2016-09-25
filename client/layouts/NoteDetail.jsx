import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class NoteDetail extends TrackerReact(Component) {
	constructor(){
		super();
		this.state = {
			subscription: {
				notes: Meteor.subscribe('userNotes')
			}
		}
	}

	componentWillUnmount(){
		this.state.subscription.notes.stop();
	}
	note() {
		return Scans.findOne(this.props.id);
	}

	render(){
		let not = this.note();
		if (!not){
			return(<div>Loading...</div>);
		}
		return(
			<div>
				<h1>{not.text}</h1>
			</div>
		);
	}
}