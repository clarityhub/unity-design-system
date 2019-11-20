/** @jsx jsx */

import React, { Component } from 'react';
import { jsx, css } from '@emotion/core';
import { arrayOf, any, node, oneOf } from 'prop-types';
import { variants } from '@clarityhub/unity-core/lib/typography';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';
import { opacify } from '@clarityhub/unity-core/lib/utilities/color';
import deepEqual from 'deep-equal';

import { offset, noOverflow } from '../../utilities/position';

const MARGIN = 4;

const tooltipPopoverWrapper = () => css`
    background-color: ${opacify(colors.dark.default, 0.8)};
    border-radius: ${borders.borderRadius.rem}rem;
    /* box-shadow: ${colors.shadow.default}; */
    color: ${colors.white.default};
    position: absolute;
    z-index: 99999999;
    /* min-width: 13rem; */
    padding: 0.2rem 0.4rem;

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

class TooltipPopover extends Component {
    static propTypes = {
    	content: node,
    	items: arrayOf(node),
    	placement: oneOf(['top', 'bottom', 'left', 'right']),
    	target: any,
    }

    state = {
    	position: {},
    }

    componentDidMount() {
    	const position = this.getPosition(this.props, this.popover);
    	this.setState({
    		position,
    	});
    }

    componentWillUpdate(nextProps) {
    	if (!deepEqual(nextProps.position, this.props.position) ||
            nextProps.target !== this.props.target) {

    		const position = this.getPosition(nextProps, this.popover);
    		this.setState({
    			position,
    		});
    	}
    }

    getPosition = (props, el) => {
    	const { placement } = this.props;
    	let pos = { ...props.position };
        
    	switch (placement) {
    	case 'top': {
    		if (el) {
    			// Try to center
    			pos.left = pos.left - (offset(el).width / 2) + (offset(props.target).width / 2);
    		}
    		// No push over for top
    		const position = pos;
    		return {
    			top: `${position.bottom - position.height - offset(el).height - MARGIN}px`,
    			left: `${position.left || 0}px`,
    			marginBottom: `${MARGIN}px`,
    		};
    	}
    	case 'left': {
    		if (el) {
    			// Try to center
    			pos.top = pos.top - (offset(el).height / 2) + (offset(props.target).height / 2);
    		}
    		// No push over for top
    		const position = pos;
    		return {
    			top: `${position.top || 0}px`,
    			left: `${position.left - offset(el).width - MARGIN || 0}px`,
    			marginRight: `${MARGIN}px`,
    		};
    	}
    	case 'right': {
    		if (el) {
    			// Try to center
    			pos.top = pos.top - (offset(el).height / 2) + (offset(props.target).height / 2);
    		}
    		// No push over for top
    		const position = pos;
    		return {
    			top: `${position.top || 0}px`,
    			left: `${position.left + position.width || 0}px`,
    			marginLeft: `${MARGIN}px`,
    		};
    	}
    	case 'bottom':
    	default: {
    		if (el) {
    			// Try to center
    			pos.left = pos.left - (offset(el).width / 2) + (offset(props.target).width / 2);
    		}
    		// Push over if it would go off the page
    		const position = noOverflow(pos, el);
    		return {
    			top: `${position.bottom || 0}px`,
    			left: `${position.left || 0}px`,
    			marginTop: `${MARGIN}px`,
    		};
    	}
    	}
    }

    render() {
    	const { position } = this.state;
    	const { items, content, innerRef } = this.props;

    	return (
    		<div
    			ref={(ref) => { this.popover = ref; innerRef(ref); }}
    			css={tooltipPopoverWrapper}
    			style={position}
    		>
    			{content ? content : (
    				<ul>
    					{items.map((item, i) => (
    						<li key={i}>
    							{item}
    						</li>
    					))}
    				</ul>
    			)}
    		</div>
    	);
    }
}

export default React.forwardRef((props, ref) => <TooltipPopover innerRef={ref} {...props} />);
