import React from 'react';
import { oneOfType, node, func } from 'prop-types';
import { ButtonGroup } from '../ButtonGroup';

const Tabs = ({ children, _onClick, _currentTab, ...props }) => {
	return (
		<div {...props}>
			<ButtonGroup>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child, {
						_onClick: _onClick,
						_currentTab: _currentTab,
					});
				})}
			</ButtonGroup>
		</div>
	);
};

Tabs.propTypes = {
	children: oneOfType([node, func]),
};

export default Tabs;
