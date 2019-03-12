import React, { Component } from 'react';
import { func, string } from 'prop-types';
import noop from '@clarityhub/unity-core/lib/utilities/noop';

class RadioGroup extends Component {
  static propTypes = {
  	children: func.isRequired,
  	defaultSelected: string,
  	onChange: func,
  	/**
     * The onChange callback will be called with an event and a checkbox reference:
     * `(event, input) => {}`.
     */
  	selected: string,
  }

  static defaultProps = {
  	defaultSelected: null,
  	onChange: noop,
  	selectOverride: null,
  }

  constructor(props) {
  	super(props);
  	this.state = {
  		selected: props.defaultSelected,
  	};

  	this.handleChange = this._handleChange.bind(this);
  }

  _handleChange(e, input) {
  	this.setState({
  		selected: input.value,
  	}, () => {
  		const { onChange } = this.props;
  		onChange(e, input);
  	});
  }

  render() {
  	const { children, selected: selectOverride } = this.props;
  	const { selected } = this.state;

  	return (
  		<div role="radiogroup">
  			{
  				React.Children.map(children, (child) => {
  					return React.cloneElement(child, {
  						onChange: this.handleChange,
  						selected: (
  							child.props.value === selectOverride ||
                child.props.value === selected
  						),
  					});
  				})
  			}
  		</div>
  	);
  }
}

export default RadioGroup;
