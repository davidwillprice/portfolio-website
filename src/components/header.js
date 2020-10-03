import React, { Component } from 'react';
import { Link } from 'gatsby';
import headerStyles from '../styles/header.module.css';
import Logo from '../svgs/personal-logo.svg';

class Header extends Component {
	state = {
		isMobMenuTrig: false,
		randomNo: Math.random() * 1
	};
	toggleMobMenu = () => {
		this.setState((state) => ({ isMobMenuTrig: !state.isMobMenuTrig }));
	};
	render() {
		const genRandomHeader = this.state.randomNo > 0.9 ? headerStyles.secretMenuExp : '';
		const headerExpClass = this.state.isMobMenuTrig
			? ' ' + headerStyles.expandedHeader + ' ' + genRandomHeader
			: '';

		return (
			<div className={headerStyles.headerCon}>
				<div className={headerStyles.header + headerExpClass}>
					<Link aria-label="David Price Logo" to={`/`}>
						<Logo className={headerStyles.headerLogo} />
					</Link>
					<button className={headerStyles.headerMenuTrig} onClick={this.toggleMobMenu}>
						<span className={headerStyles.headerTrigLines} />
						<span className={headerStyles.headerTrigLines} />
						<span className={headerStyles.headerTrigLines} />
						<span className={headerStyles.headerTrigLines} />
					</button>
					<div className={headerStyles.headerNav}>
						{/*<div className={classnames(headerStyles.headerNav, headerStyles.expandedHeaderNav)}>*/}
						<Link className={headerStyles.headerMenuItem} to={`/web/`}>
							Web development
						</Link>
						<Link className={headerStyles.headerMenuItem} to={`/graphic-design/`}>
							Graphic design
						</Link>
						{/*<Link className={headerStyles.headerMenuItem} to={`/art/`}>
							Art
							</Link>*/}
						<a className={headerStyles.headerMenuItem} href="#contact" onClick={this.toggleMobMenu}>
							Contact
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
