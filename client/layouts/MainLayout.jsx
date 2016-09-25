import React from 'react';
import AccountsUI from '../components/AccountsUI';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<header>
			<h2>Scanlan Notes</h2>
			<nav>
				<a href="/">Notes</a>
				<a href="/about">About</a>
				<AccountsUI />
			</nav>
		</header>
		<main>
			{content}
		</main>
	</div>
);
