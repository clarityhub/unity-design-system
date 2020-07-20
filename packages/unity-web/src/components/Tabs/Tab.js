import React from 'react';
import { oneOfType, node, func, string } from 'prop-types';
import { ButtonGroupItem } from '../ButtonGroup';

const Tab = ({ children, tab, _onClick, _currentTab, ...props }) => {
	const handleClick = (e) => {
		_onClick(e, tab);
	};

	const selected = tab === _currentTab;

	return (
		<ButtonGroupItem {...props} selected={selected} onClick={handleClick}>
			{children}
		</ButtonGroupItem>
	);
};

Tab.propTypes = {
	children: oneOfType([node, func]).isRequired,
	tab: string.isRequired,
};

export default Tab;
