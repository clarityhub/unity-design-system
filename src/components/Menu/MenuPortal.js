import { Component } from 'react';
import ReactDOM from 'react-dom';

let menuPortalId = 0;

export default class MenuPortal extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.el.id = `menu-portal-${menuPortalId++}`;
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}