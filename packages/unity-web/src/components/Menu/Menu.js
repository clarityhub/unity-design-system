/** @jsx jsx */

import { Component } from 'react';
import { func, node, arrayOf } from 'prop-types';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';

import { offset } from '../../utilities/position';
import MenuPopover from './MenuPopover';
import MenuPortal from './MenuPortal';

const MenuWrapper = styled.div`
    position: relative;
`;

const MenuTarget = styled.div`
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
    	items: arrayOf(node).isRequired,
    }

    state = {
    	open: false,
    }

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

    onClickOutside = (e) => {
    	if (this.menu && this.doneOpening) {        
    		if (this.state.open) {
    			const target = e.target;
    			// check if target is within (or is) the menu
    			const clickOutsideMenu = this.menu !== target && !this.menu.contains(target);
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

    	this.setState(({ open }) => ({
    		open: !open,
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
    	});
    }

    render() {
    	const { children, items } = this.props;
    	const { open, position } = this.state;

    	return (
    		<MenuWrapper>
    			{open && (
    				<MenuPortal>
    					<MenuPopover
    						ref={ref => this.menu = ref}
    						items={items}
    						position={position}
    						target={this.target}
    					/>
    				</MenuPortal>
    			)}

    			<MenuTarget ref={ref => this.target = ref}>
    				{children({
    					open: this.open,
    				})}
    			</MenuTarget>
    		</MenuWrapper>
    	);
    }
}
