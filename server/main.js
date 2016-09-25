Scans = new Mongo.Collection('scans');

Meteor.publish('allNotes', ()=>{
	return Scans.find();
});

Meteor.publish('userNotes', function(){
	return Scans.find({user: this.userId});
});