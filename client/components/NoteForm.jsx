import React, {Component} from 'react';

export default class NoteForm extends Component{

	addNotes(event){
		event.preventDefault();
		var text = this.refs.note.value.trim();
		if(text != ""){
			Meteor.call('addNote', text, (error, data)=>{
				if(error){
					Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
				}else{
					this.refs.note.value = "";
				}
				
			});
		}
		else{
			console.log("error: cannot enter nothing");
		}
	}

	render(){
		return(
			<form className="new-resolution" onSubmit={this.addNotes.bind(this)}>
				<input type="text" ref="note" placeholder="Add a new note" />
			</form>
		);
	}
}