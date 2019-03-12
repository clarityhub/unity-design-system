/** @jsx jsx */

import React, { Component } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { arrayOf, node } from 'prop-types';
import { variants } from '@clarityhub/unity-core/lib/typography';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';

import { offset, noOverflow } from '../../utilities/position';

const menuPopoverWrapper = () => css`
    background-color: ${colors.white.default};
    border-radius: ${borders.borderRadius.rem}rem;
    box-shadow: ${colors.shadow.default};
    position: absolute;
    z-index: 99999999;
    margin-top: 1rem;
    min-width: 13rem;
    padding: 0.4rem 0;

    ${variants.button.string}

    font-size: 1rem;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0;
        padding: 0;
    }
`;

const Arrow = styled.div`
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid ${colors.white.default};
    top: -0.5rem;
    transform: translateX(-50%);
`;

class MenuPopover extends Component {
    static propTypes = {
    	items: arrayOf(node).isRequired,
    	target: node,
    }

    state = {
    	position: {},
    	arrow: {},
    }

    componentDidMount() {
    	const position = this.getPosition(this.props, this.popover);
    	this.setState({
    		position,
    		arrow: this.getArrowPosition(this.props, position),
    	});
    }

    componentWillUpdate(nextProps) {
    	if (nextProps.left !== this.props.left ||
            nextProps.target !== this.props.target) {
            
    		const position = this.getPosition(nextProps, this.popover);
    		this.setState({
    			position,
    			arrow: this.getArrowPosition(nextProps, position),
    		});
    	}
    }

    getPosition = (props, el) => {
    	let pos = { ...props.position };
    	if (el) {
    		// Try to center
    		pos.left = pos.left - (offset(el).width / 2) + (offset(props.target).width / 2);
    	}

    	// Push over if it would go off the page
    	return noOverflow(pos, el);
    }

    getArrowPosition = (props, menuPosition) => {
    	if (props.target) {
    		const targetPos = offset(props.target);

    		const left = targetPos.left - menuPosition.left + (targetPos.width / 2);

    		return {
    			top: 0,
    			left,
    		};
    	} else {
    		return {
    			top: 0,
    			left: 0,
    		};
    	}
    }

    render() {
    	const { position, arrow } = this.state;
    	const { items, innerRef } = this.props;

    	return (
    		<div
    			ref={(ref) => { this.popover = ref; innerRef(ref);}}
    			css={menuPopoverWrapper}
    			style={{
    				top: `${position.bottom || 0}px`,
    				left: `${position.left || 0}px`,
    			}}
    		>
    			<Arrow
    				style={{
    					left: `${arrow.left || 0}px`,
    				}}
    			/>
    			<ul>
    				{items.map((item, i) => (
    					<li key={i}>
    						{item}
    					</li>
    				))}
    			</ul>
    		</div>
    	);
    }
}

export default React.forwardRef((props, ref) => <MenuPopover innerRef={ref} {...props} />);
