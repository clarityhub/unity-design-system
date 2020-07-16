import React, { Component } from 'react';
import { node, bool, func, oneOf, string } from 'prop-types';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { opacify } from '@clarityhub/unity-core/lib/utilities/color';
import colors from '@clarityhub/unity-core/lib/colors';

import zIndex from '../../theme/zIndexes';
import Card from '../Card';
import ModalPortal from './ModalPortal';

// XXX refactor animations to be reuseable

const ModalWrapper = styled('div', {
	shouldForwardProp: prop => isPropValid(prop) && !['open'].includes(prop),
})`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${opacify(colors.dark.default, 0.6)};
    display: flex;
    z-index: ${zIndex.modal};

    ${({ open }) => !open && css`
        display: none;
    `}
`;

const ModalDialog = styled('div', {
	shouldForwardProp: prop => isPropValid(prop) && ![
		'onClose',
		'open',
		'size',
	].includes(prop),
})`
    transition: all .3s ease-out;
    transition-property: opacity, transform;
    transform: translate(0, -25%);
    display: flex;
    min-height: calc(100% - (.5rem * 2));
    opacity: 0;
    align-items: center;
    max-width: 500px;
    margin: 1.75rem auto;
    position: relative;
    width: 100%;

    @media screen and (prefers-reduced-motion:reduce) {
        transition: none;
    }

    ${({ open }) => open && css`
        opacity: 1;
        transform: translate(0, 0);
    `}

    ${({ size }) => {
		switch (size) {
		case 'large':
			return css`
				max-width: 90%;
			`;
		case 'default':
		default:
			return '';
		}
	}}

    ${Card} {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
    }
`;

export default class Modal extends Component {
    static propTypes = {
    	/**
		 * Passthrough to Card
		 */
    	center: bool,
    	/**
		 * Passthrough to Card
		 */
    	children: node,
    	noPortal: bool,
    	onClose: func,
    	open: bool.isRequired,
    	size: oneOf(['default', 'large']),
    	type: string,
    }
	
	static defaultProps = {
		noPortal: false,
		size: 'default',
	}

    state = {
    	delayedOpen: false,
    }

    componentDidMount() {
    	this.setup();
    }

    componentDidUpdate(prevProps) {
    	if (!prevProps.open && this.props.open) {
    		this.setup();
    	}
        
    	if (prevProps.open && !this.props.open) {
    		this.teardown();
    	}
    }

    componentWillUnmount() {
    	this.teardown(true);
    }

    setup = () => {
    	this._onClickOutside = this.onClickOutside.bind(this);
    	this._onKeyUp = this.onKeyUp.bind(this);

    	document.addEventListener('click', this._onClickOutside);
    	window.addEventListener('keyup', this._onKeyUp);

    	this.checkOpen();
    }

    teardown = (immediate = false) => {
    	if (this.openTimer) {
    		clearTimeout(this.openTimer);
    	}

    	document.removeEventListener('click', this._onClickOutside);
    	window.removeEventListener('keyup', this._onKeyUp);
        
    	this.setState({
    		delayedOpen: false,
    	});
        
    	if (!immediate) {
    		this.closeTimer = setTimeout(() => {
    			this.setState({
    				delayedClose: false,
    			});
    		}, 100);
    	}
    }

    checkOpen = () => {
    	if (this.props.open && !this.state.delayedOpen) {
    		this.doneOpening = false;

    		if (this.openTimer) {
    			clearTimeout(this.openTimer);
    		}
            
    		this.setState({
    			delayedClose: true,
    		});

    		this.openTimer = setTimeout(() => {
    			this.doneOpening = true;
    			this.setState({
    				delayedOpen: true,
    			});
    		}, 100);
    	}
    }

    onClickOutside = (e) => {
    	if (this.modal && this.doneOpening) {
    		if (this.props.open) {
    			const target = e.target;
    			// check if target is within (or is) the modal
    			const clickOutsideModal = this.modal !== target && !this.modal.contains(target);
    			if (clickOutsideModal) {
    				this.close(e, { reason: 'onClickOutside' });
    			}
    		}
    	}
    }

    onKeyUp = (e) => {
    	if (this.props.open) {
    		if (e.key === 'Escape') {
    			this.close(e, { reason: 'escape' });
    		}
    	}
    }

    close = (...args) => {
    	const { onClose } = this.props;

    	if (onClose) {
    		onClose(...args);
    	}
    }

    render() {
    	const { size, center, children, type, cardProps, noPortal, ...props } = this.props;
    	const { delayedOpen, delayedClose } = this.state;
    
    	return (
    		<ModalPortal noPortal={noPortal}>
    			<ModalWrapper open={delayedClose}>
    				<ModalDialog open={delayedOpen} size={size} {...props}>
    					<Card ref={ref => this.modal = ref} type={type} center={center} {...cardProps}>
    						{children}
    					</Card>
    				</ModalDialog>
    			</ModalWrapper>
    		</ModalPortal>
    	);
    }
}
