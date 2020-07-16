import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let menuPortalId = 0;

export default class MenuPortal extends Component {
	constructor(props) {
		super(props);

		if (typeof window !== 'undefined') {
			this.el = document.createElement('div');
			this.el.id = `menu-portal-${menuPortalId++}`;
			document.body.appendChild(this.el);
		}
	}

	componentWillUnmount() {
		if (this.el) {
			document.body.removeChild(this.el);
		}
	}

	render() {
		if (this.props.noPortal) {
			return (
				<div>
					{this.props.children}
				</div>
			);
		}

		if (this.el) {
			return ReactDOM.createPortal(
				this.props.children,
				this.el
			);
		}

		return null;
	}
}