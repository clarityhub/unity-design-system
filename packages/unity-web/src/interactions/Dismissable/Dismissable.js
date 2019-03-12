import React, { Component } from 'react';
import { node, func } from 'prop-types';
import styled from '@emotion/styled';
import noop from '@clarityhub/unity-core/lib/utilities/noop';

const ANIMATION_LENGTH = 300;

const DismissButton = styled.button`
    position: absolute;
    cursor: pointer;
    font-size: 1.2rem;
    top: 0;
    right: 0;
    padding: .75rem 1.25rem;
    color: inherit;

    background-color: transparent;
    border: 0;
    appearance: none;

    /* span {
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      display: inline-block;
      height: 1.4rem;
      width: 1.4rem;
      text-align: center;
    } */
`;

export default class Dismissable extends Component {
  static propTypes = {
  	children: node.isRequired,
  	onDismiss: func,
  }

  static defaultProps = {
  	onDismiss: noop,
  }

  state = {
  	status: 'show',
  }

  componentWillUnmount() {
  	if (this.timer) {
  		clearTimeout(this.timer);
  	}
  }

  onDismiss = (e) => {
  	this.setState({
  		status: 'hiding',
  	}, () => {
  		this.timer = setTimeout(() => {
  			const { onDismiss } = this.props;
  			this.setState({
  				status: 'hidden',
  			}, onDismiss);
  		}, ANIMATION_LENGTH);
  	});
  }

  reset = () => {
  	this.setState({
  		status: 'show',
  	});
  }

  render() {
  	const { children } = this.props;
  	const { status } = this.state;

  	const Dismiss = () => (
  		<DismissButton
  			onClick={this.onDismiss}
  			type="button"
  			aria-label="Dismiss"
  		>
  			<span aria-hidden="true">×</span>
  		</DismissButton>
  	);

  	if (status === 'hidden') {
  		return null;
  	}

  	return children({
  		onDismiss: this.onDismiss,
  		Dismiss,
  	});
  }
}