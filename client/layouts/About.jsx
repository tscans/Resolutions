import React, {Component} from 'react';

export default class About extends Component {
	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible', true);
	}
	render(){
		return(
			<div>
				<h1>About Us</h1>
				<p>This website is an application I, Tom Scanlan, made to help organize the notes I have on a daily basis.</p>
				<button onClick={this.setVar}>Sign Up</button>
			</div>
		);
	}
}