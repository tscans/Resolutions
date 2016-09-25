Meteor.methods({
	addNote(note){
		check(note, String);
		if(!Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		Scans.insert({
			text: note,
			complete: false,
			createdAt: new Date(),
			user: Meteor.userId()

		});
	},
	toggleNote(note) {
		check(note, Object);

		if(Meteor.userId() !== note.user){
			throw new Meteor.Error('not-authorized');
		}
		Scans.update(note._id, {
			$set: {complete: !note.complete}
		});
	},
	deleteNote(note){
		check(note, Object);
		if(Meteor.userId() !== note.user){
			throw new Meteor.Error('not-authorized');
		}
		Scans.remove(note._id);
	}
});