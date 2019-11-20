/** @jsx jsx */

import {  Component } from 'react';
import { func, node, arrayOf, bool } from 'prop-types';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import deepEqual from 'deep-equal';

import Fade from '../../animations/Fade';
import { offset } from '../../utilities/position';
import MenuPopoverDefault from './MenuPopover';
import MenuPortal from './MenuPortal';

const MenuWrapper = styled.div`
    position: relative;
`;

const MenuTarget = styled.div`
	display: ${({ inline }) => inline ? 'inline-block' : 'block' };
    position: relative;
`;


/**
 * When you click on the {children} wrapper,
 * a menu will appear below the {children}'s position.
 * 
 * The menu's position will remain within the window.
 * 
 * The menu will close when you click outside of the menu
 */
export default class Menu extends Component {
    static propTypes = {
    	children: func.isRequired,
    	content: node,
    	inline: bool,
    	items: arrayOf(node),
    	onClose: func,
    }

    state = {
    	open: false,
    }
	
	MenuPopover = MenuPopoverDefault;
	
	componentDidMount() {
    	this._onClickOutside = this.onClickOutside.bind(this);
    	this._onKeyUp = this.onKeyUp.bind(this);
		
    	document.addEventListener('click', this._onClickOutside);
    	document.addEventListener('keyup', this._onKeyUp);
	}
	
	componentWillUnmount() {
    	document.removeEventListener('click', this._onClickOutside);
    	document.removeEventListener('keyup', this._onKeyUp);
	}

	componentDidUpdate(prevProps, prevState) {
    	if (this.state.open && this.target) {
    		const position = offset(this.target);

    		if (!deepEqual(position, prevState.position)) {
    			this.setState({
    				position,
    			});
    		}
    	}
	}

    onClickOutside = (e) => {
    	if (this.menu && this.doneOpening) {        
    		if (this.state.open) {
    			const target = e.target;
    			// check if target is within (or is) the menu
    			const clickOutsideMenu = this.menu !== target && !this.menu.contains(target) && document.body.contains(target);
    			if (clickOutsideMenu) {
    				this.close();
    			}
    		}
    	}
    }

    onKeyUp = (e) => {
    	if (this.state.open) {
    		if (e.key === 'Escape') {
    			this.close();
    		}
    	}
    }

    open = () => {
    	this.doneOpening = false;

    	let position = {
    		top: 0,
    		left: 0,
    	};

    	if (this.target) {
    		position = offset(this.target);
    	}

    	this.setState(() => ({
    		open: true,
    		position,
    	}), () => {
    		setTimeout(() => {
    			this.doneOpening = true;
    		}, 100);
    	});
    }

    close = () => {
    	this.setState({
    		open: false,
    	}, () => {
    		if (this.props.onClose) {
    			this.props.onClose();
    		}
    	});
    }
	
	renderChildren = ({ open, close }) => {
		const { children } = this.props;
	
		return children({
			open,
			close,
		});
	}

	render() {
    	const { children, content, inline, items, ...props } = this.props;
    	const { open, position } = this.state;
		
		const MenuPopover = this.MenuPopover;

    	return (
    		<MenuWrapper>
				<MenuPortal>
					{this.fade ? (
						<Fade show={open}>
							<MenuPopover
								ref={ref => this.menu = ref}
								content={content}
								items={items}
								position={position}
								target={this.target}
								{...props}
							/>
						</Fade>
					) : (
						open && <MenuPopover
							ref={ref => this.menu = ref}
							content={content}
							items={items}
							position={position}
							target={this.target}
							{...props}
						/>
					)}
    				
				</MenuPortal>

    			<MenuTarget ref={ref => this.target = ref} inline={inline}>
					{this.renderChildren({ open: this.open, close: this.close })}
    			</MenuTarget>
    		</MenuWrapper>
    	);
	}
}
