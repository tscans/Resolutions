import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NoteForm from './NoteForm';
import NoteSingle from './NoteSingle';

Scans = new Mongo.Collection('scans');

export default class App extends TrackerReact(React.Component){

	constructor(props){
		super(props);

		this.state = {
			subscription: {
				notes: Meteor.subscribe('userNotes')
			}
		}
	}

	componentWillUnmount(){
		this.state.subscription.notes.stop();
	}

	notes() {
		return Scans.find().fetch();
	}

	render() {
		console.log(this.notes());
		var res = this.notes();
		return (
			<div className="notes">
				<h1>Scanlan Notes {Session.get('test')}</h1>
					<NoteForm />
				<ul className="addin">
					<ReactCSSTransitionGroup
						transitionName="resolutionLoad"
						transitionEnterTimeout={600}
						transitionLeaveTimeout={400}>
						{this.notes().reverse().map( (note) => {
							return <NoteSingle key={note._id} note={note}/>
						})}
					</ReactCSSTransitionGroup>
				</ul>
			</div>
		);
	}
}

