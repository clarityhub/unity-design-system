import React from 'react';
import { func, node, arrayOf, oneOf, bool } from 'prop-types';

import { Menu } from '../Menu';
import extend from '../../utilities/extend';
import TooltipPopover from './TooltipPopover';

const Tooltip = extend('Tooltip', Menu, {
	MenuPopover: TooltipPopover,
	fade: true,
	renderChildren({ open, close }) {
		const { children, inline } = this.props;

		if (typeof children === 'function') {
			return children({
				open,
				close,
			});
		} else {
			return (
				<div
					style={{ display: inline ? 'inline-block' : 'block' }}
					onMouseOver={open}
					onMouseOut={close}
				>
					{children}
				</div>
			);
		}
	},
}, {
	placement: oneOf(['top', 'bottom', 'left', 'right']),
});


/**
 * Hack for docz and react-docgen
 */
const TooltipPropTypes = () => <div />;
TooltipPropTypes.propTypes = {
	children: func.isRequired,
	content: node,
	inline: bool,
	items: arrayOf(node),
	onClose: func,
	placement: oneOf(['top', 'bottom', 'left', 'right']),
};
Tooltip.propTypes = TooltipPropTypes.propTypes;
export { TooltipPropTypes };

export default Tooltip;
