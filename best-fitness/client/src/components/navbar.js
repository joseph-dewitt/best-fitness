import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom';
import './navbar.css';


class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		};
	};
	render() {
		return(
			<div className='navbar'>
				<div className='left'>
					<Link className='brand' to="/">
						<h3>Best Fitness</h3>
					</Link>
				</div>
				<div className='right'>
					<Link className='log' to="logout">
						<h3>LOGOUT</h3>
					</Link>
				</div>
			</div> 
	)};
}	

export default Navbar;