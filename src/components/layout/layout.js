import React, { Component } from 'react';
import globalStyles from '../../styles/global.module.css';
import Header from './header';
import Footer from './footer';

class Layout extends Component {
	state = {
		usingMouse: false
	};
	//Using mouse, updating state
	usingMouseFn = () => {
		this.setState({ usingMouse: true });
	}
	//Using keyboard, updating state
	usingKeysFn = () => {
		this.setState({ usingMouse: false });
	}

	componentDidMount() {
		//User is using a mouse
		document.body.addEventListener('mousedown', this.usingMouseFn);
		//User is using keyboard
		document.body.addEventListener('keydown', this.usingKeysFn);
	}

	render() {
		//Update class depending on if the user last used a mouse or keyboard
		const navType = this.state.usingMouse ? globalStyles.usingMouse : globalStyles.usingKeys;

		return (
			<div className={globalStyles.pageCon + ' ' + navType}>
				<Header />
				<div className={globalStyles.contentCon}>{this.props.children}</div>
				<Footer />
			</div>
		);
	}
}

export default Layout;
