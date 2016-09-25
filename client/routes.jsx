import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import Notes from './components/Notes.jsx';
import About from './layouts/About.jsx';
import NoteDetail from './layouts/NoteDetail.jsx';

FlowRouter.route('/', {
	action() {
		mount (MainLayout, {
			content: (<Notes />)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount (MainLayout, {
			content: (<About />)
		})
	}
});

FlowRouter.route('/notes/:id', {
	action(params) {
		mount (MainLayout, {
			content: (<NoteDetail id={params.id} />)
		})
	}
});