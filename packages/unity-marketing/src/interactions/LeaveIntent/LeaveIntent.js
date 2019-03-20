import { Component }  from 'react';
import { bool } from 'prop-types';
import ouibounce from './ouibounce';

export default class LeaveIntent extends Component {
    static propTypes = {
    	force: bool,
    }

    state = {
    	show: false,
    }

    componentDidMount() {
    	this.setup();
    }

    componentWillUnmount() {
    	this.teardown();
    }

    setup = () => {
    	const { force } = this.props;

    	const { disable, teardown } = ouibounce({
    		aggressive: Boolean(force),
    		callback: this.onFire,
    	});
        
    	this.ouibounceTeardown = teardown;
    	this.ouibounceDismiss = disable;
    }

    teardown = () => {
    	this.ouibounceTeardown();
    }

    onFire = () => {
    	this.setState({
    		show: true,
    	});
    }
    
    onDismiss = () => {
    	this.ouibounceDismiss();

    	this.setState({
    		show: false,
    	});
    }

    render() {
    	const { children } = this.props;
    	const { show } = this.state;

    	return children({ show, onDismiss: this.onDismiss });
    }
}
