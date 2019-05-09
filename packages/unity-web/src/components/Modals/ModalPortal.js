import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ModalPortal extends Component {
	constructor(props) {
		super(props);

		if (typeof window !== 'undefined') {
			this.el = document.createElement('div');
		}
	}

	componentDidMount() {
		// Append the element into the DOM on mount. We'll render
		// into the modal container element (see the HTML tab).
		if (this.el) {
			document.body.appendChild(this.el);
		}
	}

	componentWillUnmount() {
		// Remove the element from the DOM when we unmount
		if (this.el) {
			document.body.removeChild(this.el);
		}
	}

	render() {
		if (this.el) {
			// Use a portal to render the children into the element
			return ReactDOM.createPortal(
				// Any valid React child: JSX, strings, arrays, etc.
				this.props.children,
				// A DOM element
				this.el,
			);
		}

		return null;
	}
}
