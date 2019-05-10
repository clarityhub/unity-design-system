import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ModalPortal extends Component {
	state = {
		ready: false,
	}

	componentDidMount() {
		// Append the element into the DOM on mount. We'll render
		// into the modal container element (see the HTML tab).
		this.el = document.createElement('div');
		document.body.appendChild(this.el);
		this.setState({
			ready: true,
		});
	}

	componentWillUnmount() {
		// Remove the element from the DOM when we unmount
		if (this.el) {
			document.body.removeChild(this.el);
		}
	}

	render() {
		const { ready } = this.state;

		if (ready) {
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
